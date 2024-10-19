import { homePageContent } from './pages/home.js'
import { profilePageContent, setupProfilePage } from './pages/profile.js'
import { sectionsPageContent, setupSectionsPage } from './pages/sections.js'
import { unitsPageContent, setupUnitsPage } from './pages/units.js'
import { initQuestsPage } from './pages/quests.js'
import {userService} from './services/user.service.js'

initApp()

async function initApp() {
    await userService.login() // Assuming this creates a user if none exists
    await userService.initializeUserProgress()
    // ... other initialization code ...
}



const routes = {
    '#home': homePageContent,
    '#profile': profilePageContent,
    '#sections': sectionsPageContent,
    '#units': async () => {
        const content = await unitsPageContent()
        setTimeout(setupUnitsPage, 0)
        return content
    },
    '#quests': async () => {
        try {
            // Add a small delay
            await new Promise(resolve => setTimeout(resolve, 100))
            await initQuestsPage()
            return '' // Return an empty string as the content is rendered by initQuestsPage
        } catch (error) {
            console.error('Error in quests route:', error)
            return `<div>Error loading quests: ${error.message}</div>`
        }
    },
}

const setupFunctions = {
    '#sections': setupSectionsPage,
    '#profile': setupProfilePage,
    '#units': setupUnitsPage,
}

function createBottomNavbar() {
    const currentPage = window.location.hash.split('?')[0] || '#home'
    return `
        <nav class="bottom-navbar">
            <a href="#home" class="nav-item ${currentPage === '#home' ? 'active' : ''}">
                <i class="fas fa-home"></i>
                <span>בית</span>
            </a>
            <a href="#sections" class="nav-item ${currentPage === '#sections' ? 'active' : ''}">
                <i class="fas fa-book"></i>
                <span>שיעורים</span>
            </a>
            <a href="#profile" class="nav-item ${currentPage === '#profile' ? 'active' : ''}">
                <i class="fas fa-user"></i>
                <span>פרופיל</span>
            </a>
        </nav>
    `
}

async function router() {
    const app = document.getElementById('app')
    const hash = window.location.hash.split('?')[0] || '#home'
    
    app.innerHTML = 'Loading...'
    
    try {
        const routeFunction = routes[hash]
        if (routeFunction) {
            const html = await routeFunction()
            if (html) app.innerHTML = html
            
            // Call the setup function if it exists
            const setupFunction = setupFunctions[hash]
            if (setupFunction) {
                setupFunction()
            }
        } else {
            app.innerHTML = 'Page not found'
        }
    } catch (error) {
        console.error('Routing error:', error)
        app.innerHTML = 'An error occurred'
    }
    
    // Add the bottom navbar
    const bottomNavbar = createBottomNavbar()
    app.insertAdjacentHTML('beforeend', bottomNavbar)
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)


