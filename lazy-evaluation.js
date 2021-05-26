function lazyLoading (a) {
    const pow = Math.pow(a, 3)
    const future = Date.now() + 2000

    while(Date.now() < future) {}

    return function (b) {
        return pow + b
    }
}
// Eager Loading
const lazyLoading3 = lazyLoading(3)

console.log(lazyLoading3(100))
console.log(lazyLoading3(200))
console.log(lazyLoading3(300))

function eagerLoading (a, b) {
    const pow = Math.pow(a, 3)
    const future = Date.now() + 2000

    while(Date.now() < future) {}

    return pow + b
}

// Eager Loading
console.log(eagerLoading(3, 100));
console.log(eagerLoading(3, 200));
console.log(eagerLoading(3, 300));