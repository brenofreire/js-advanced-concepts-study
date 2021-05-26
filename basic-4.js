// Callback in practice, file system read file example

const fs = require('fs')
const path = require('path')

const pathFile = path.join(__dirname, '/files/random.txt')

const showContent = function (_, conteudo) {
    console.log(conteudo);
}

fs.readFile(pathFile, { encoding: 'utf-8' }, showContent)