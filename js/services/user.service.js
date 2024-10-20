import { gameService } from './game.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const DEFAULT_USER = {
    fullname: 'תלמידוש',
    username: 'talmidush',
    imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
    score: 0,
    progress: {
        sections: {}
    }
}

export const userService = {
    login,
    logout,
    getLoggedinUser,
    updateProgress,
    getProgressPercentage,
    initializeUserProgress,
    updateLessonProgress  // Add this line
}

// IIFE to ensure user exists and is logged in
;(async function() {
    try {
        const users = await storageService.query('user')
        if (users.length === 0) {
            // If no users exist, create the default user
            const user = await storageService.post('user', DEFAULT_USER)
            _saveLocalUser(user)
        } else {
            // If users exist, log in the first one (which should be תלמידוש)
            _saveLocalUser(users[0])
        }
    } catch (error) {
        console.error('Failed to ensure user:', error)
    }
})()

async function login() {
    const loggedInUser = getLoggedinUser()
    if (loggedInUser) return loggedInUser

    const users = await storageService.query('user')
    if (users.length > 0) {
        return _saveLocalUser(users[0])
    }
    throw new Error('No users found')
}

function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

async function updateProgress(sectionId, unitId, levelId, lessonId, questId, score) {
    const user = getLoggedinUser()
    if (!user || !user.progress) {
        console.error('User progress not initialized')
        return
    }

    const quest = user.progress.sections[sectionId].units[unitId].levels[levelId].lessons[lessonId].quests[questId]
    quest.completed = true
    quest.score = score
    
    const lesson = user.progress.sections[sectionId].units[unitId].levels[levelId].lessons[lessonId]
    lesson.completedQuests++
    lesson.completed = lesson.completedQuests === lesson.totalQuests
    
    updateCompletionStatus(user.progress, sectionId, unitId, levelId)
    
    // Update user's total score
    user.score = (user.score || 0) + score
    
    await storageService.put('user', user)
    _saveLocalUser(user)
}

function updateCompletionStatus(progress, sectionId, unitId, levelId) {
    const section = progress.sections[sectionId]
    const unit = section.units[unitId]
    const level = unit.levels[levelId]
    
    // Update level completion
    level.completedLessons = Object.values(level.lessons).filter(l => l.completed).length
    level.completed = level.completedLessons === level.totalLessons
    
    // Update unit completion
    unit.completedLevels = Object.values(unit.levels).filter(l => l.completed).length
    unit.completed = unit.completedLevels === unit.totalLevels
    
    // Update section completion
    section.completedUnits = Object.values(section.units).filter(u => u.completed).length
    section.completed = section.completedUnits === section.totalUnits
}

function getProgressPercentage(sectionId, unitId, levelId, lessonId) {
    const user = getLoggedinUser()
    if (!user || !user.progress) return 0
    
    const section = user.progress.sections[sectionId]
    if (!section) return 0
    
    if (lessonId) {
        const lesson = section.units[unitId].levels[levelId].lessons[lessonId]
        return (lesson.completedQuests / lesson.totalQuests) * 100
    }
    
    if (levelId) {
        const level = section.units[unitId].levels[levelId]
        return (level.completedLessons / level.totalLessons) * 100
    }
    
    if (unitId) {
        const unit = section.units[unitId]
        return (unit.completedLevels / unit.totalLevels) * 100
    }
    
    return (section.completedUnits / section.totalUnits) * 100
}

function _saveLocalUser(user) {
    const userToSave = { 
        id: user.id, 
        fullname: user.fullname, 
        imgUrl: user.imgUrl, 
        score: user.score,
        progress: user.progress
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(userToSave))
    return userToSave
}

async function updateLessonProgress(sectionId, unitId, levelId, lessonId, percentageCorrect) {
    const user = getLoggedinUser()
    if (!user || !user.progress) {
        console.error('User progress not initialized')
        return
    }
    
    const lesson = user.progress.sections[sectionId].units[unitId].levels[levelId].lessons[lessonId]
    lesson.completed = percentageCorrect >= 70
    lesson.score = percentageCorrect
    
    // Update completed quests count based on percentage correct
    lesson.completedQuests = Math.round((percentageCorrect / 100) * lesson.totalQuests)
    
    updateCompletionStatus(user.progress, sectionId, unitId, levelId)
    
    // Update user's total score (you may want to adjust this based on your scoring system)
    user.score = (user.score || 0) + percentageCorrect
    
    await storageService.put('user', user)
    _saveLocalUser(user)
}

async function initializeUserProgress() {
    const user = getLoggedinUser()
    if (!user) {
        console.error('No logged in user found')
        return
    }
    
    const progressTemplate = await gameService.getProgressTemplate()
    user.progress = progressTemplate
    
    await storageService.put('user', user)
    _saveLocalUser(user)
}