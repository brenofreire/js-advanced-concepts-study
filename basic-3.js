// Callbacks used to delay a assignment to a variable

const addsSecondsToNow = (seconds) => Date.now() + seconds * 1000
const delay = addsSecondsToNow(3)

const sumDelay = (n1, n2) => {
    const sum = n1 + n2
    while (Date.now() < delay) {}
    
    console.log('sumDelay', sum)

    return sum
}

const sumWithoutDelay = (n1, n2) => {
    const sum = n1 + n2
    console.log('sumWithoutDelay', sum)

    return sum
}

const calculate = (n1, n2, fn) => fn(n1, n2)

const sum = calculate(4, 6, sumDelay)
const sum2 = calculate(5, 5, sumWithoutDelay)


/**
 *  [NOTES]
 *  > Javascript is single thread so it will execute only 1 operation at once
 *  > While the operation is being made, nothing else will be executed
 *  > But it also have a call stack (heap) and an event loop 
 *  > When it's an assyncronous action it will be queued in the event loop
 * */ 