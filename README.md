# 🐶 Englush - אינגלוש

An interactive English learning game designed for Hebrew speakers, featuring a progressive quest-based learning system.

## 🎮 [Play the Game](http://YakovBiton.com)

## 📖 About

Englush (אינגלוש) is a gamified English learning platform that helps Hebrew speakers master English through structured lessons, quests, and interactive challenges. The game features a level-based progression system where users advance through sections, units, and lessons while earning XP and tracking their progress.

## ✨ Features

- **Progressive Learning Path**: Structured curriculum divided into sections, units, levels, and lessons
- **Quest-Based Learning**: Interactive quests to practice English skills
- **User Progress Tracking**: Track completed lessons, earned XP, and overall progress
- **Profile System**: View statistics, achievements, and learning history
- **RTL Support**: Designed with Hebrew speakers in mind (Right-to-Left interface)
- **Local Storage**: Progress is saved locally in the browser
- **Visual Progress Charts**: Chart.js integration for visualizing learning statistics

## 🏗️ Project Structure

```
englush/
├── index.html              # Main entry point
├── CNAME                   # Custom domain configuration
├── js/
│   ├── router.js          # Client-side routing
│   ├── pages/             # Page components
│   │   ├── home.js
│   │   ├── profile.js
│   │   ├── sections.js
│   │   ├── units.js
│   │   └── quests.js
│   └── services/          # Core services
│       ├── async-storage.service.js   # Local storage wrapper
│       ├── game.data.js               # Learning content & curriculum
│       ├── game.service.js            # Game logic & data access
│       ├── user.service.js            # User management & progress
│       └── util.service.js            # Utility functions
├── style/
│   ├── main.css           # Main stylesheet entry
│   ├── base/              # Base styles (layout, typography, forms)
│   └── cmps/              # Component-specific styles
├── img/                   # Images and visual assets
│   └── brain/
└── sound/                 # Audio files
    └── letters/
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No build tools or dependencies required!

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/vyaron/englush.git
   cd englush
   ```

2. Serve the files with any static file server:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Using VS Code:**
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

3. Open your browser and navigate to `http://localhost:8000`

## 🎯 How It Works

### Learning Structure

- **Sections**: Major learning categories (e.g., "מתחילים" - Beginners)
- **Units**: Topics within a section (e.g., "אותיות באנגלית" - English Letters)
- **Levels**: Difficulty stages within a unit
- **Lessons**: Specific learning modules
- **Quests**: Individual interactive exercises

### User Progress

- Users earn XP by completing quests
- Progress is tracked at the lesson level
- Statistics are visualized in the profile page
- All data is stored locally using async-storage

## 🛠️ Technical Stack

- **Pure JavaScript** (ES6 modules)
- **HTML5 & CSS3**
- **Chart.js** for data visualization
- **Font Awesome** for icons
- **No frameworks** - Vanilla JS implementation
- **Client-side routing** - Single Page Application (SPA)

## 📱 Browser Support

Works on all modern browsers that support:
- ES6 modules
- LocalStorage API
- CSS Grid & Flexbox
- Chart.js

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add more learning content
- Improve translations
- Enhance UI/UX

## 📄 License

This project is open source and available for educational purposes.

## 🌐 Live Demo

Visit the live game at: **[YakovBiton.com](http://YakovBiton.com)**

## 👨‍💻 Author

Created with ❤️ for English learners

---

**Happy Learning! 🎉**
