const fs = require('fs')
const path = require('path')

// Specify the path to your sound folder
const folderPath = 'sound/letters'

// Read the contents of the directory
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err)
        return
    }

    files.forEach(file => {
        if (file.endsWith('.mp3') && file.startsWith('alphasounds-')) {
            const oldPath = path.join(folderPath, file)
            const newFile = file.replace('alphasounds-', '')
            const newPath = path.join(folderPath, newFile)

            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.error(`Error renaming ${file}:`, err)
                } else {
                    console.log(`Renamed: ${file} -> ${newFile}`)
                }
            })
        }
    })
})

console.log("Renaming process initiated. Check console for results.")