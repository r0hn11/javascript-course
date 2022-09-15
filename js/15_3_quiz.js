// create an object called ingredient and inherit it into object cake
/*
const Ingredient = {
    setAmount: function(value){
        this.amount = value
        return this.amount
    },
    addToMix: function(){
        return `${this.name} added`
    }
}

let Floor = Object.create(Ingredient,{
    name: {value: 'cake floor'},
    calories: {value: 10},
    proteins: {value: 2},
    amount: {value: 0, writable: true},
})

let Milk = Object.create(Ingredient,{
    name: {value: 'Full cream milk'},
    calories: {value: 7},
    proteins: {value: 13},
    amount: {value:0, writable: true},
})

let Egg = Object.create(Ingredient,{
    name: {value: 'Chicken eggs'},
    calories: {value: 9},
    proteins: {value: 12},
    amount: {value:0, writable: true},
})
*/

function Ingredients(name, calories, proteins, amount, weight_unit, multiple){
    this.name = name
    this.calories = calories
    this.proteins = proteins
    this.amount = amount
    this.multiple = multiple
    switch (weight_unit) {
        case 1:
            this.unit = 'gm'
            break;
        case 2:
            this.unit = 'ml'
            break;
        default:
            this.unit = 'n'
            break;
    }
}

Ingredients.prototype.addToMix = function(){
    return `${this.name} has been added to mix`
}
Ingredients.prototype.setWtGram = function(){
    if(this.unit === 'gm'){return this.amount}
    else if(this.unit === 'ml'){return this.amount*this.multiple}
    else if(this.unit === 'n'){return this.amount*60}
}

let floor = new Ingredients('Cake floor', 2970, 80, 200, 1, 1)
console.log(floor.addToMix())
let milk = new Ingredients('Cream milk', 1960, 27, 100, 2, 1.03)
console.log(milk.addToMix())
let oil = new Ingredients('Olive oil', 8840, 0, 50, 2, 0.8)
console.log(oil.addToMix())
let eggs = new Ingredients('Chicken eggs', 1550 , 130, 2, 3, 1)
console.log(eggs.addToMix())

Cake.prototype = Object.create(Ingredients.prototype)
Cake.prototype.constructor = Cake

// cake object
function Cake(name, calories, proteins, amount, flavour){
    Ingredients.call(this,name, calories, proteins, amount)
    this.flavour= flavour
    bake = function(t){
        switch (t) {
            case 0:
                return `Cake ready.`
            case t>0:
                return `Baking in${t}s.`
            case t<0:
                return `Timer already expired ${t}s ago.`
            default:
                break;
        }
    }
}

totalCal = (floor.calories + milk.calories + oil.calories + eggs.calories)/1000
totalProt = (floor.proteins + milk.proteins + oil.proteins + eggs.proteins)/1000
totalWeight = floor.setWtGram() + milk.setWtGram() + oil.setWtGram() + eggs.setWtGram()
let dark_forest = new Cake('Dark forest', totalCal, totalProt, totalWeight, 'chocolate')