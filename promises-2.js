// Reading file async

const readFileAsync = function (path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fs = require('fs')
            const returnFile = (err, content) => {
                if (!err) resolve(content)
                reject(err)
            }

            fs.readFile(__dirname + path, { encoding: 'utf-8' }, returnFile)
        }, 1000)
    })
}

Promise.all([
    readFileAsync('/files/random.txt'),
    readFileAsync('/files/random-2.txt')
])
    .then(console.log).catch(console.log)