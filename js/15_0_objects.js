// Object
let character = {
    name: 'Rohan',
    age: 21,
    wave: function(){
        console.log('Hiii')
        return 0
    },
    check: function(){}
}

// Constructor e.g. new Date()
function createChar(iname, iage){
    this.name = iname
    this.age = iage
    this.wave = function(){
        console.log(`${this.name} just waved at you`)
    }
}

let char1 = new createChar('Aj', 15)