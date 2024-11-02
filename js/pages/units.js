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
                <p class="section-progress">${sectionProgress.toFixed(0)}% סיימת מתוך השלב</p>
                <div class="progress-bar">
                    <div class="progress" style="width: ${sectionProgress}%"></div>
                </div>
                ${section.units.map(unit => {
                    const unitProgress = userService.getProgressPercentage(section.id, unit.id)
                    return `
                        <div class="unit">
                            <h3>${unit.title}</h3>
                            <p class="progress-title">${unitProgress.toFixed(0)}% התקדמות</p>
                            <div class="progress-bar">
                                <div class="progress" style="width: ${unitProgress}%"></div>
                            </div>
                            ${unit.levels.map(level => {
                                const levelProgress = userService.getProgressPercentage(section.id, unit.id, level.id)
                                return `
                                    <details class="level">
                                        <summary>
                                            ${level.title}
                                        </summary>
                                        <p>${levelProgress.toFixed(0)}% סיימת</p>
                                        <div class="progress-bar">
                                            <div class="progress" style="width: ${levelProgress}%"></div>
                                        </div>
                                        <ul class="lesson-list">
                                            ${level.lessons.map((lesson, index) => {
                                                const lessonProgress = userService.getProgressPercentage(section.id, unit.id, level.id, lesson.id)
                                                return `
                                                    <li>
                                                        <a href="#quests?section=${section.id}&unit=${unit.id}&level=${level.id}&lesson=${lesson.id}" class="lesson-link">
                                                            Lesson ${index + 1}: ${lesson.title}
                                                        </a>
                                                        <p class="lesson-progress">${lessonProgress.toFixed(0)}% התקדמות</p>
                                                        <div class="progress-bar">
                                                            <div class="progress" style="width: ${lessonProgress}%"></div>
                                                        </div>
                                                    </li>
                                                `
                                            }).join('')}
                                        </ul>
                                    </details>
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
    // Add smooth height animation to details elements
    document.querySelectorAll('.level').forEach(details => {
        // Store the animation so we can cancel it if needed
        let animation = null
        
        details.addEventListener('toggle', (e) => {
            if (animation) {
                animation.cancel()
            }
            
            const content = details.querySelector('summary ~ *')
            if (!content) return
            
            if (details.open) {
                // Opening animation
                content.style.height = '0'
                content.style.overflow = 'hidden'
                const height = content.scrollHeight
                animation = content.animate([
                    { height: '0px' },
                    { height: height + 'px' }
                ], {
                    duration: 300,
                    easing: 'ease-out'
                })
                animation.onfinish = () => {
                    content.style.height = ''
                    content.style.overflow = ''
                }
            } else {
                // Closing animation
                const height = content.scrollHeight
                content.style.height = height + 'px'
                content.style.overflow = 'hidden'
                animation = content.animate([
                    { height: height + 'px' },
                    { height: '0px' }
                ], {
                    duration: 300,
                    easing: 'ease-in'
                })
                animation.onfinish = () => {
                    content.style.height = ''
                    content.style.overflow = ''
                }
            }
        })
    })
}