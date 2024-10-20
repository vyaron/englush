import { userService } from '../services/user.service.js'
import { gameService } from '../services/game.service.js'
import { getRandomInt } from '../services/util.service.js'

export async function profilePageContent() {
    const user = userService.getLoggedinUser()
    if (!user) {
        return '<div>משתמש לא מחובר</div>'
    }

    const sections = await gameService.getSections()
    const overallProgress = calculateOverallProgress(user.progress, sections)

    return `
        <div class="profile-page">
            <h1>פרופיל</h1>
            <div class="user-info">
                <img src="${user.imgUrl}" alt="${user.fullname}" class="profile-image">
                <h2>${user.fullname}</h2>
                <p>ניקוד כולל: ${user.score}</p>
                <img class="go" src="img/brain/go1.gif" />
            </div>
            <div class="progress-charts">
                <div class="chart-container">
                    <canvas id="overallProgressChart"></canvas>
                </div>
                <div class="chart-container">
                    <canvas id="sectionProgressChart"></canvas>
                </div>
            </div>
        </div>
    `
}

export function setupProfilePage() {
    document.querySelector('img.go').src = `img/brain/go${getRandomInt(1, 7)}.gif`

    renderOverallProgressChart()
    renderSectionProgressChart()
}

function calculateOverallProgress(userProgress, sections) {
    let totalUnits = 0
    let completedUnits = 0

    sections.forEach(section => {
        const sectionProgress = userProgress.sections[section.id]
        if (sectionProgress) {
            totalUnits += sectionProgress.totalUnits
            completedUnits += sectionProgress.completedUnits
        }
    })

    return totalUnits > 0 ? (completedUnits / totalUnits) * 100 : 0
}

async function renderOverallProgressChart() {
    const user = userService.getLoggedinUser()
    const sections = await gameService.getSections()
    const overallProgress = calculateOverallProgress(user.progress, sections)

    const ctx = document.getElementById('overallProgressChart').getContext('2d')
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['הושלם', 'נותר'],
            datasets: [{
                data: [overallProgress, 100 - overallProgress],
                backgroundColor: ['#4CAF50', '#E0E0E0']
            }]
        },
        options: {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            plugins: {
                title: {
                    display: true,
                    text: 'התקדמות כוללת'
                }
            }
        }
    })
}

async function renderSectionProgressChart() {
    const user = userService.getLoggedinUser()
    const sections = await gameService.getSections()

    const sectionProgress = sections.map(section => {
        const percentage = userService.getProgressPercentage(section.id)
        return {
            name: section.title,
            percentage
        }
    })

    const ctx = document.getElementById('sectionProgressChart').getContext('2d')
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sectionProgress.map(section => section.name),
            datasets: [{
                label: 'אחוז השלמה',
                data: sectionProgress.map(section => section.percentage),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500,
                easing: 'easeOutQuart'
            },
            plugins: {
                title: {
                    display: true,
                    text: 'התקדמות לפי נושאים'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    })
}