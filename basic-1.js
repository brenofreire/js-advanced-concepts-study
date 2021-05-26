// Function declaration 
goodMorning('Bill')
function goodMorning(name) {
    console.log(`Good morning ${name}!`)
}


// goodNight('William') // Doesn't work
// Function expression
const goodNight = function (name) {
    console.log(`Good morning ${name}!`)
}
goodNight('William')


/**
 *  [NOTES]
 *  > Differences between function declaration and function as a expression
 *  - A function declaration can be used before its initialization
 *  as an expression it's not possible.
 * */