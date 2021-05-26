// OO with Composition instead of Inheiretance
const composition = {
    name: '',
    price: 0,
    discount: 10,
    finalPrice() {
        return this.price - (this.price * this.discount / 100)
    }
}

function Product({ name, price, discount }) {
    const base = Object.assign({}, composition)

    return {
        ...base,
        name,
        price,
        discount,
    }
}

function WorkService({ name, price, discount, professional }) {
    const base = Object.assign({}, composition)

    return {
        ...base,
        name,
        discount,
        professional,
        price,
    }
}

const mouse = new Product({
    name: 'Mouse Gamer',
    price: 180,
    discount: 20,
})

const notebookAssistance = new WorkService({
    name: 'Backup Notebook',
    discount: 5,
    price: 50,
    professional: 'Tech. Worker'
})

const hybridBike = new Product({
    name: 'Hybrid Bike',
    price: 1890,
    discount: 7.7,
})

console.log({ mouse, notebookAssistance, hybridBike })
console.log({
    mouseDiscount: mouse.finalPrice(),
    notebookAssistance: notebookAssistance.finalPrice(),
    hybridBike: hybridBike.finalPrice()
})
