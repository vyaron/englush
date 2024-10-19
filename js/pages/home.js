import { userService } from '../services/user.service.js'

export function homePageContent() {
    const user = userService.getLoggedinUser()
    return `
        <div class="home-page">
            <h1 class="home-title">אינגלוש</h1>
            <h2 class="home-subtitle">ללמוד אנגלית בכיף</h2>
            ${user ? `<p class="welcome-message">כיף לראותך שוב ${user.fullname}</p>` : ''}
            <img src="img/dog.png" alt="Mascot" class="mascot-img">
            <a href="#sections" class="start-btn">התחל</a>
        </div>
    `
}

function startGame() {
    // Navigate to the sections page or the first quest
    window.location.hash = '#sections'
}

// Make sure this function is available globally
window.startGame = startGame
