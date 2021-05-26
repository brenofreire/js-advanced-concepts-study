
const myClosure = (function () {
    let counter = 0
    return {
        addCounter() {
            counter += 1
        },
        subCounter() {
            counter -= 1
        },
        get counterUnit() {
            return counter
        },
    }
})()

module.exports = myClosure