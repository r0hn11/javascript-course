let charObj = {
    name: 'Rohan',
    age: 21,
    wave: function(){console.log('Hiii')},
}

console.log(charObj)
/*
{name: 'Rohan', age: 21, wave: ƒ}
age: 21
name: "Rohan"
wave: ƒ ()
[[Prototype]]: Object
*/

// constructor
function createChar(name, age){
    this.name = name
    this.age = age
    this.wave = ()=>{}
}

char1 = new createChar('Ax', 20)
console.log(char1)
/*
createChar {name: 'Ax', age: 20, wave: ƒ}
age: 20
name: "Ax"
wave: ()=>{}
[[Prototype]]: Object
constructor: ƒ createChar(name, age)
[[Prototype]]: Object
*/

// we can change protoype of a constructor of an object but not the object
createChar.prototype.setName = function(name){return this.name = name}
createChar.prototype.getName = function(){return this.name}
console.log(char1)