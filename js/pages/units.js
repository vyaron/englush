import { gameService } from '../services/game.service.js'
import { userService } from '../services/user.service.js'

export async function unitsPageContent() {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1])
    const sectionId = urlParams.get('section') || 'section1'
    const section = await gameService.getSection(sectionId)
    const sectionProgress = userService.getProgressPercentage(section.id)

    return `
        <div class="units-page">
            <div class="section">
                <h2>${section.title}</h2>
                <div class="progress-bar">
                    <div class="progress" style="width: ${sectionProgress}%"></div>
                </div>
                <p>${sectionProgress.toFixed(0)}% סיימת</p>
                ${section.units.map(unit => {
                    const unitProgress = userService.getProgressPercentage(section.id, unit.id)
                    return `
                        <div class="unit">
                            <h3>${unit.title}</h3>
                            <div class="progress-bar">
                                <div class="progress" style="width: ${unitProgress}%"></div>
                            </div>
                            <p>${unitProgress.toFixed(0)}% התקדמות</p>
                            ${unit.levels.map(level => {
                                const levelProgress = userService.getProgressPercentage(section.id, unit.id, level.id)
                                return `
                                    <div class="level">
                                        <h4>${level.title}</h4>
                                        <div class="progress-bar">
                                            <div class="progress" style="width: ${levelProgress}%"></div>
                                        </div>
                                        <p>${levelProgress.toFixed(0)}% סיימת</p>
                                        <ul class="lesson-list">
                                            ${level.lessons.map((lesson, index) => {
                                                const lessonProgress = userService.getProgressPercentage(section.id, unit.id, level.id, lesson.id)
                                                return `
                                                    <li>
                                                        <a href="#quests?section=${section.id}&unit=${unit.id}&level=${level.id}&lesson=${lesson.id}" class="lesson-link">
                                                            Lesson ${index + 1}: ${lesson.title}
                                                        </a>
                                                        <div class="progress-bar">
                                                            <div class="progress" style="width: ${lessonProgress}%"></div>
                                                        </div>
                                                        <p>${lessonProgress.toFixed(0)}% התקדמות</p>
                                                    </li>
                                                `
                                            }).join('')}
                                        </ul>
                                    </div>
                                `
                            }).join('')}
                        </div>
                    `
                }).join('')}
            </div>
        </div>
    `
}

export function setupUnitsPage() {
    // Add any event listeners or additional setup here if needed
}