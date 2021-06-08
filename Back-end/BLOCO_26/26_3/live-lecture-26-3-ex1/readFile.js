

const fs = require('fs').promises

async function readFile(fileName){
    try{
        const content = await fs.readFile(`./${fileName}`, 'utf-8')
        return content
    }catch{
        return null
    }
}

module.exports = {
    readFile
}