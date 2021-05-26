const closure1 = require('./closure-1')
const counter = 10 // It doesn't make a difference

closure1.addCounter()
closure1.addCounter()
closure1.addCounter()
closure1.subCounter()

console.log(closure1.counterUnit)


/**
 * [NOTES]
 * > Clousure is when the function reminds its scope wherever it is called
 */