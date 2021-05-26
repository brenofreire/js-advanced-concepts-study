// Functors

function MyMap(arr) {
    return {
        arr,
        orderByLength(fn) {
            const newValue = fn ? fn(arr) : arr.sort()

            return MyMap(newValue)
        },
        join(fn) {
            const newValue = fn ? fn(arr) : arr.join(' ')

            return MyMap(newValue)
        }
    }
}

const newData = new MyMap(['any', 'envito', 'is', 'danny', 'devito'])

const { arr: sortedOnly } = newData.orderByLength()
const { arr: sortedAndJoinedByDefault } = newData.orderByLength().join()
const { arr: sortedAndJoinedByComma } = newData.orderByLength().join(arr => arr.join(','))

console.log({ sortedOnly, sortedAndJoinedByDefault, sortedAndJoinedByComma })