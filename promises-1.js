// Creating a promise
const list = []
const promiseExample = (min, max) => {
    return new Promise(sucess => {
        [min, max] = [min, max].sort()
        const display1sec = () => {
            console.log(min);
            min += 1
            if (min > max) {
                clearInterval(displaying)
                sucess({ msg: 'Fim!' })
            }
        }

        const displaying = setInterval(display1sec, 1000)
    })
}

promiseExample(20, 15).then(console.log)
