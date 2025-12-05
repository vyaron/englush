
import gameData from './game.data.js'


export const gameService = {
    async getSections() {
        const data = await _getData()
        return data.sections
    },

    async getSection(sectionId) {
        const data = await _getData()
        const section = JSON.parse(JSON.stringify(
            data.sections.find(section => section.id === sectionId)
        ))

        if (!section) return null

        return _shuffleQuests(section)
    },

    async getUnitsForSection(sectionId) {
        const section = await this.getSection(sectionId)
        return section?.units || []
    },


    async getUnit(sectionId, unitId) {
        const section = await this.getSection(sectionId)
        return section?.units.find(u => u.id === unitId)
    },


    async getLevel(sectionId, unitId, levelId) {
        const unit = await this.getUnit(sectionId, unitId)
        return unit?.levels.find(l => l.id === levelId)
    },

    async getLesson(sectionId, unitId, levelId, lessonId) {
        const level = await this.getLevel(sectionId, unitId, levelId)
        return level?.lessons.find(l => l.id === lessonId)
    },

    async getQuests(sectionId, unitId, levelId, lessonId) {
        const lesson = await this.getLesson(sectionId, unitId, levelId, lessonId)
        return lesson?.quests
    },


    getProgressTemplate: async function () {
        const sections = await this.getSections()
        const progressTemplate = { sections: {} }

        sections.forEach(section => {
            progressTemplate.sections[section.id] = {
                id: section.id,
                title: section.title,
                completed: false,
                totalUnits: section.units.length,
                completedUnits: 0,
                units: {}
            }

            section.units.forEach(unit => {
                progressTemplate.sections[section.id].units[unit.id] = {
                    id: unit.id,
                    title: unit.title,
                    completed: false,
                    totalLevels: unit.levels.length,
                    completedLevels: 0,
                    levels: {}
                }

                unit.levels.forEach(level => {
                    if (!level.lessons) console.log(`level ${level.id} does not have lessons`, level)
                    progressTemplate.sections[section.id].units[unit.id].levels[level.id] = {
                        id: level.id,
                        title: level.title,
                        completed: false,
                        totalLessons: level.lessons.length,
                        completedLessons: 0,
                        lessons: {}
                    }

                    level.lessons.forEach(lesson => {
                        progressTemplate.sections[section.id].units[unit.id].levels[level.id].lessons[lesson.id] = {
                            id: lesson.id,
                            title: lesson.title,
                            completed: false,
                            totalQuests: lesson.quests.length,
                            completedQuests: 0,
                            quests: {}
                        }

                        lesson.quests.forEach(quest => {
                            progressTemplate.sections[section.id].units[unit.id].levels[level.id].lessons[lesson.id].quests[quest.id] = {
                                id: quest.id,
                                completed: false,
                                score: 0
                            }
                        })
                    })
                })
            })
        })

        return progressTemplate
    }
}


async function _getData() {
    // Simulate an async operation
    await new Promise(resolve => setTimeout(resolve, 100))

    const manipulatedData = JSON.parse(JSON.stringify(gameData))

    // Create a deep copy of the first section with new IDs
    const newSection = deepCloneWithNewIds(manipulatedData.sections[0], 'section2_')
    newSection.title = 'מתקדמים'

    // Add the new section to the data
    manipulatedData.sections.push(newSection)

    return manipulatedData
}


// Helper function to generate new IDs
function generateNewId(oldId, prefix) {
    const numericPart = oldId.match(/\d+/g).map(Number)
    numericPart[0] += 1
    return `${prefix}${numericPart.join('_')}`
}




// Helper function for deep cloning with new IDs
function deepCloneWithNewIds(obj, idPrefix) {
    if (Array.isArray(obj)) {
        return obj.map(item => deepCloneWithNewIds(item, idPrefix))
    } else if (typeof obj === 'object' && obj !== null) {
        const newObj = {}
        for (const [key, value] of Object.entries(obj)) {
            if (key === 'id') {
                newObj[key] = generateNewId(value, idPrefix)
            } else {
                newObj[key] = deepCloneWithNewIds(value, idPrefix)
            }
        }
        return newObj
    }
    return obj
}

function _shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

function _shuffleQuests(section) {
    section.units.forEach(unit => {
        unit.levels.forEach(level => {
            level.lessons.forEach(lesson => {
                // Shuffle quests
                lesson.quests = _shuffleArray([...lesson.quests])

                // Shuffle options within each quest
                lesson.quests.forEach(quest => {
                    // Only shuffle opts if they exist (multiple choice questions)
                    if (quest.opts) {
                        const correctOpt = quest.opts[quest.correctOptIdx]
                        quest.opts = _shuffleArray([...quest.opts])
                        // Update correctOptIdx to match new position
                        quest.correctOptIdx = quest.opts.indexOf(correctOpt)
                    }
                    // Handle matching/couples type questions
                    else if (quest.couples) {
                        quest.couples = _shuffleArray([...quest.couples])
                    }
                })
            })
        })
    })
    return section
}
