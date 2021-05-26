// Higher Order Functions
function execute(fn, params) { // HOF
    return function (phrase) {
        const result = fn(params) // Callback

        return `${phrase} ${result}!`
    }
}

function factoryProfile (args) {
    return {
        name: args.name,
        surname: args.surname,
        gender: args.gender || 'other',
        toString() {
            return `${this.name} ${this.surname}`
        }
    }
}

const inputProfile = { name: 'Breno', surname: 'Freire' }
const presentation = execute(factoryProfile, inputProfile)('Hey! Nice to meet you')

console.log({ presentation })

/**
 * [NOTES]
 * A HOF receives a function as param or return a function
 */