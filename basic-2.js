// Returning a function
const pow = (base) => {
    return (exp) => {
        return Math.pow(base, exp)
    }
}

const powOf2 = pow(2)(3) // Function composition
console.log({ powOf2 });

// Function as params of a function
const calculate = (num, num2, fn) => fn(num, num2)

const sum = (num, num2) => num + num2
const sumValue = calculate(2, 5, sum)
console.log({ sumValue })

const multiply = (num, num2) => num * num2
const multiplyValue = calculate(2, 5, multiply)
console.log({ multiplyValue })


/**
 *  [NOTES]
 *  > We can return a function from a function
 *  > We can pass a function as a paramter to a function
 *  > We can use function composition to call the return of a function
 *  > A function as a parameter exectution is called Callback
 * */ 