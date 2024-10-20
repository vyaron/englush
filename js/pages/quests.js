import { gameService } from '../services/game.service.js'
import { getCheer, getCompliment } from '../services/util.service.js'
import { speak } from '../services/util.service.js'
import { playAudio } from '../services/util.service.js'
import { userService } from '../services/user.service.js' // Add this import

let currentQuest = 0
let hearts = 3
let selectedOption = null
let audio = new Audio()
let quests = []
let currentSectionId, currentUnitId, currentLevelId, currentLessonId // Add these variables

async function getQuests() {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1])
    currentSectionId = urlParams.get('section')
    currentUnitId = urlParams.get('unit')
    currentLevelId = urlParams.get('level')
    currentLessonId = urlParams.get('lesson')

    if (!currentSectionId || !currentUnitId || !currentLevelId) {
        throw new Error('Missing required parameters for fetching quests')
    }

    if (!currentLessonId) {
        // If lessonId is not provided, get the first lesson of the level
        const level = await gameService.getLevel(currentSectionId, currentUnitId, currentLevelId)
        if (level && level.lessons && level.lessons.length > 0) {
            currentLessonId = level.lessons[0].id
        } else {
            throw new Error('No lessons found for the given level')
        }
    }
    console.log('Fetching quests for:', { currentSectionId, currentUnitId, currentLevelId, currentLessonId })

    const fetchedQuests = await gameService.getQuests(currentSectionId, currentUnitId, currentLevelId, currentLessonId)
    console.log('Fetched quests:', fetchedQuests)

    if (!fetchedQuests || fetchedQuests.length === 0) {
        throw new Error('No quests returned from gameService.getQuests')
    }

    return fetchedQuests
}

function questsPageContent(quest) {
    if (!quest) {
        console.error('No quest data available')
        return '<div>Error: No quest data available</div>'
    }
    const largerOptClassname = (quest.opts.every(({ word }) => word.length <= 2))? 'larger' : ''

    return `
        <div class="quest-page">
            <div class="top-bar">
                <div class="hearts">
                    ❤️<span class="heart-count">${hearts}</span>
                </div>
                <button id="exitBtn" class="exit-btn">X</button>
            </div>
            <h2 class="quest-question">${quest.title}</h2>
            ${quest.word ? `
                <button id="playSound" class="play-sound-btn">
                    <i class="fas fa-volume-up"></i>
                </button>
            ` : ''}
            <div class="options-grid">
                ${quest.opts.map((option, index) => `
                    <button class="option-btn ${largerOptClassname}" data-index="${index}" data-text="${option.word}">
                        ${option.word.toUpperCase()}
                    </button>
                `).join('')}
            </div>
            <button id="checkBtn" class="check-btn" disabled>בדקי</button>
        </div>
        <div id="pageOverlay" class="page-overlay"></div>
        <div id="feedbackOverlay" class="feedback-overlay">
            <div id="feedbackText" class="feedback-text"></div>
            <button id="feedbackBtn" class="feedback-btn"></button>
        </div>
        <div id="confirmModal" class="confirm-modal">
            <p>האם אתה בטוח שברצונך לצאת?</p>
            <div class="confirm-buttons">
                <button id="confirmYes">כן</button>
                <button id="confirmNo">לא</button>
            </div>
        </div>
    `
}

function selectOption(index, text) {
    selectedOption = index
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.toggle('selected', i === index)
    })
    const checkBtn = document.getElementById('checkBtn')
    checkBtn.disabled = false
    checkBtn.classList.add('enabled')

    speak(text)
}

async function checkAnswer() {
    const quest = quests[currentQuest]
    const isCorrect = selectedOption === quest.correctOptIdx

    // Store the user's answer
    quest.userAnswer = selectedOption

    const pageOverlay = document.getElementById('pageOverlay')
    const feedbackOverlay = document.getElementById('feedbackOverlay')
    const feedbackText = document.getElementById('feedbackText')
    const feedbackBtn = document.getElementById('feedbackBtn')

    pageOverlay.classList.add('show')

    if (isCorrect) {
        playAudio('right.mp3');
        feedbackText.innerHTML = `
        <p> ✓</p>
        <p>${getCheer()}</p>
        `
        feedbackOverlay.className = 'feedback-overlay show correct'
        feedbackBtn.textContent = 'המשך'

        // Update user progress
        await userService.updateProgress(currentSectionId, currentUnitId, currentLevelId, currentLessonId, quest.id, 100)
    } else {
        playAudio('wrong.mp3');
        const correctAnswer = quest.opts[quest.correctOptIdx].word
        feedbackText.innerHTML = `
            <p>טעית ✗</p>
            <p class="correct-answer">התשובה הנכונה היא: <span class="correct-answer-word">${correctAnswer}</span></p>
        `
        feedbackOverlay.className = 'feedback-overlay show incorrect'
        feedbackBtn.textContent = 'הבנתי'
        hearts--
        updateHearts()
        if (hearts === 0) {
            // Handle game over
            console.log('Game Over')
            return
        }

        // Update user progress with 0 points for incorrect answer
        await userService.updateProgress(currentSectionId, currentUnitId, currentLevelId, currentLessonId, quest.id, 0)
    }
}

function nextQuest() {
    const feedbackOverlay = document.getElementById('feedbackOverlay')
    const pageOverlay = document.getElementById('pageOverlay')

    feedbackOverlay.classList.remove('show')
    pageOverlay.classList.remove('show')

    currentQuest++
    if (currentQuest < quests.length) {
        renderCurrentQuest()
    } else {
        finishLesson()
    }
}

function updateHearts() {
    const heartsDiv = document.querySelector('.hearts')
    if (heartsDiv) {
        heartsDiv.innerHTML = `❤️<span class="heart-count">${hearts}</span>`
    }
}

function renderCurrentQuest() {
    const app = document.getElementById('app')
    if (!quests || quests.length === 0) {
        console.error('No quests available')
        app.innerHTML = '<div>Error: No quests available</div>'
        return
    }
    if (currentQuest >= quests.length) {
        console.error('Current quest index out of bounds')
        app.innerHTML = '<div>Error: No more quests available</div>'
        return
    }

    const quest = quests[currentQuest]
    let content

    if (quest.couples) {
        content = renderCouplesQuest(quest)
    } else {
        content = questsPageContent(quest)
    }

    app.innerHTML = content + `
        <div id="pageOverlay" class="page-overlay"></div>
        <div id="feedbackOverlay" class="feedback-overlay">
            <div id="feedbackText" class="feedback-text"></div>
            <button id="feedbackBtn" class="feedback-btn"></button>
        </div>
        <div id="confirmModal" class="confirm-modal">
            <p>האם אתה בטוח שברצונך לצאת?</p>
            <div class="confirm-buttons">
                <button id="confirmYes">כן</button>
                <button id="confirmNo">לא</button>
            </div>
        </div>
    `
    setupQuestPage()
}

export function setupQuestPage() {
    console.log('Setting up quest page')
    const questPage = document.querySelector('.quest-page')
    if (!questPage) {
        console.error('Quest page element not found')
        return
    }

    if (questPage.classList.contains('couples-quest')) {
        setupCouplesQuest()
    } else {
        setupRegularQuest()
    }

    // Add event listener for exit button
    const exitBtn = document.getElementById('exitBtn')
    if (exitBtn) {
        exitBtn.addEventListener('click', showConfirmModal)
    }

    // Add event listeners for confirm modal buttons
    const confirmYesBtn = document.getElementById('confirmYes')
    const confirmNoBtn = document.getElementById('confirmNo')
    if (confirmYesBtn) {
        confirmYesBtn.addEventListener('click', goToUnitsPage)
    }
    if (confirmNoBtn) {
        confirmNoBtn.addEventListener('click', hideConfirmModal)
    }

    console.log('Quest page setup complete')
}

function setupRegularQuest() {
    const questPage = document.querySelector('.quest-page')
    questPage.addEventListener('click', function (event) {
        if (event.target.classList.contains('option-btn')) {
            const index = parseInt(event.target.dataset.index)
            const text = event.target.dataset.text
            selectOption(index, text)
        } else if (event.target.id === 'checkBtn') {
            checkAnswer()
        }
    })

    // Add event listener for play sound button if it exists
    const playSoundBtn = document.getElementById('playSound')
    if (playSoundBtn) {
        playSoundBtn.addEventListener('click', function () {
            const quest = quests[currentQuest]
            if (quest.word) {
                speak(`${quest.word}`)
            }
        })
    }

    // Add event listener for feedback button
    const feedbackBtn = document.getElementById('feedbackBtn')
    if (feedbackBtn) {
        feedbackBtn.addEventListener('click', nextQuest)
    }
}

function setupCouplesQuest() {
    let selectedWords = []
    const questPage = document.querySelector('.quest-page')
    questPage.addEventListener('click', function (event) {
        if (event.target.classList.contains('word-button')) {
            handleWordClick(event.target, selectedWords)
        }
    })
}

function showConfirmModal() {
    const confirmModal = document.getElementById('confirmModal');
    const pageOverlay = document.getElementById('pageOverlay');

    // Set display to block and trigger reflow
    confirmModal.style.display = 'block';
    confirmModal.offsetHeight;

    // Add show class to start animation
    confirmModal.classList.add('show');
    pageOverlay.classList.add('show');
}

function hideConfirmModal() {
    const confirmModal = document.getElementById('confirmModal');
    const pageOverlay = document.getElementById('pageOverlay');

    // Remove show class to start hiding animation
    confirmModal.classList.remove('show');
    pageOverlay.classList.remove('show');

    // Wait for animation to finish before setting display to none
    setTimeout(() => {
        confirmModal.style.display = 'none';
    }, 300); // This should match the transition duration in CSS
}

function goToUnitsPage() {
    // Implement the navigation to the units page here
    // For example:
    window.location.hash = '#units'
}

export async function initQuestsPage() {
    console.log('Initializing quests page')
    try {
        quests = await getQuests()
        if (!quests || quests.length === 0) {
            throw new Error('No quests returned from getQuests')
        }
        currentQuest = 0
        hearts = 3 // Reset hearts to 3
        selectedOption = null
        renderCurrentQuest()
    } catch (error) {
        console.error('Error initializing quests page:', error)
        const app = document.getElementById('app')
        app.innerHTML = `<div>Error loading quests: ${error.message}</div>`
    }
}

async function finishLesson() {
    const correctAnswers = quests.filter(quest => {
        if (quest.couples) {
            return quest.userAnswer === 100 // Assuming 100 means completed successfully
        } else {
            return quest.userAnswer === quest.correctOptIdx
        }
    }).length;

    const totalQuests = quests.length;
    const percentageCorrect = (correctAnswers / totalQuests) * 100;

    const message = percentageCorrect >= 70 ? 'כל הכבוד!' : 'לא רע';

    const app = document.getElementById('app')
    app.innerHTML = `
        <div class="lesson-complete">
            <h2>${message}</h2>
            <p>${getCompliment()}</p>
            <div class="dog-container">
                <img src="img/dog.png" alt="Congratulatory Dog" class="dog-image">
            </div>
            <p>ציון: ${percentageCorrect.toFixed(0)}%</p>
            <button id="nextLessonBtn">חזרה ליחידות</button>
        </div>
    `

    // Add animation class after a short delay to trigger the animation
    setTimeout(() => {
        document.querySelector('.dog-image').classList.add('animate')
    }, 100)

    document.getElementById('nextLessonBtn').addEventListener('click', () => {
        // Navigate back to the units page
        window.location.hash = '#units';
    })

    // Update overall lesson progress
    await userService.updateLessonProgress(currentSectionId, currentUnitId, currentLevelId, currentLessonId, percentageCorrect)
}

function renderCouplesQuest(quest) {
    const leftColumn = quest.couples.map(pair => pair.word1).sort(() => Math.random() - 0.5)
    const rightColumn = quest.couples.map(pair => pair.word2).sort(() => Math.random() - 0.5)

    const leftHTML = leftColumn.map(word => `
        <button class="option-btn word-button left" data-word="${word}">
            ${word}
        </button>
    `).join('')
    const rightHTML = rightColumn.map(word => `
        <button class="option-btn word-button right" data-word="${word}">
            ${word}
        </button>
    `).join('')


    return `
        <div class="quest-page couples-quest">
            <div class="top-bar">
                <div class="hearts">
                    ❤️<span class="heart-count">${hearts}</span>
                </div>
                <button id="exitBtn" class="exit-btn">X</button>
            </div>
            <h2 class="quest-question">${quest.title}</h2>
            <div class="columns-container">
                <div class="left-column">${leftHTML}</div>
                <div class="right-column">${rightHTML}</div>
            </div>
        </div>
    `
}

function handleWordClick(button, selectedWords) {
    debugger
    if (button.classList.contains('matched') || button.classList.contains('selected')) {
        return
    }

    if (selectedWords.length < 2) {
        button.classList.add('selected')
        selectedWords.push(button)

        if (button.classList.contains('left')) {
            speak(button.dataset.word)
        }

        if (selectedWords.length === 2) {
            checkCouplesMatch(selectedWords)
        }
    } else {
        selectedWords.forEach(btn => btn.classList.remove('selected'))
        selectedWords.length = 0
        button.classList.add('selected')
        selectedWords.push(button)

        if (button.classList.contains('left')) {
            speak(button.dataset.word)
        }
    }
}

function checkCouplesMatch(selectedWords) {
    const [left, right] = selectedWords
    const quest = quests[currentQuest]
    const isMatch = quest.couples.some(pair =>
        (pair.word1 === left.dataset.word && pair.word2 === right.dataset.word) ||
        (pair.word1 === right.dataset.word && pair.word2 === left.dataset.word)
    )

    if (isMatch) {
        handleCouplesMatch(selectedWords)
    } else {
        handleCouplesMismatch(selectedWords)
    }
}

function handleCouplesMatch(selectedWords) {
    selectedWords.forEach(button => {
        button.classList.remove('selected')
        button.classList.add('matched')
        button.disabled = true
    })

    const allMatched = document.querySelectorAll('.word-button:not(.matched)').length === 0
    if (allMatched) {
        const quest = quests[currentQuest]
        quest.userAnswer = 100
        finishCouplesQuest(true)
    }
}

function handleCouplesMismatch(selectedWords) {
    hearts--
    updateHearts()

    if (hearts === 0) {
        finishCouplesQuest(false)
    } else {
        selectedWords.forEach(button => {
            button.classList.add('wrong')
            setTimeout(() => {
                button.classList.remove('selected', 'wrong')
            }, 1000)
        })
    }
}

function finishCouplesQuest(isSuccess) {
    userService.updateProgress(currentSectionId, currentUnitId, currentLevelId, currentLessonId, quests[currentQuest].id, isSuccess ? 100 : 0)

    if (isSuccess) {
        playAudio('right.mp3')
        showFeedback('מצוין! ✓', 'correct', 'המשך')
    } else {
        playAudio('wrong.mp3')
        showFeedback('טעית ✗', 'incorrect', 'נסה שוב')
    }
}

function showFeedback(message, className, buttonText) {
    const pageOverlay = document.getElementById('pageOverlay')
    const feedbackOverlay = document.getElementById('feedbackOverlay')
    const feedbackText = document.getElementById('feedbackText')
    const feedbackBtn = document.getElementById('feedbackBtn')

    pageOverlay.classList.add('show')

    feedbackText.innerHTML = `<p>${message}</p>`
    feedbackOverlay.className = `feedback-overlay show ${className}`
    feedbackBtn.textContent = buttonText

    // Ensure the feedback overlay is above the page overlay
    feedbackOverlay.style.zIndex = '1001'

    feedbackBtn.addEventListener('click', () => {
        nextQuest()
        pageOverlay.classList.remove('show')
        feedbackOverlay.classList.remove('show')
    }, { once: true })
}