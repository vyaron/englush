import { gameService } from '../services/game.service.js'

export async function sectionsPageContent() {
    const sections = await gameService.getSections()


    return `
        <div class="sections-page">
            <h1>Select a Section</h1>
            <div class="sections-grid">
                ${sections.map((section, idx) => `
                    <button class="section-button" onclick="selectSection('${section.id}')" ${(idx > 0)? 'disabled' : '' }>
                        ${section.title} ${(idx > 0)? '🔒' : '' }
                    </button>
                `).join('')}
            </div>
        </div>
    `
}

window.selectSection = function(sectionId) {
    window.location.hash = `#units?section=${sectionId}`
}

export function setupSectionsPage() {
    // Any additional setup for the sections page
}