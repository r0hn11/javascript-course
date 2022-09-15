
const _proto = {
    hi : function(){
        console.log(`Hello, ${this.name}`)
    },
    setName : function(newName){
        this.name = newName
    }
}

// creating object method 1
const obj1 = Object.create(_proto)
obj1.name = 'rohn'
obj1.age = 14

// creating object method 2
const obj2 = Object.create(_proto,{
    name: {value: 'AJ', writable: false},   // writeable: false will not allow the update value in setName function
    age: {value: 15},
})

obj1.hi()
obj2.hi()
obj2.setName('AX')
console.log(obj1)
console.log(obj2)

// constructor
function Player(username, game, level, active){
    this.username = username
    this.game = game
    this.level = level
    this.isOnline = (active)=>{
        if(active == 1) console.log('Online')
        else console.log('Offline')
    }
}

Player.prototype.stream = function(time){
    if(time>0){return `stream starting in ${time}s.`}
    else if(time==0){return `stream has started.`}
    else{return `Not available.`}
}

/* ES6 class
class Player {
    constructor(username, game, level, isOnline) {
        this.username = username
        this.game = game
        this.level = level
        this.active = 1
        this.isOnline = () => {
            if (active == 1)
                console.log('Online')
            else
                console.log('Offline')
        }
    }
    stream(time) {
        return `stream starting in ${time}s`
    }
}
*/

let p1 = new Player('spiritz', 'LoL', 173, 1)
p1.isOnline()
console.log(p1)
console.log(p1.stream(10))

// Inheritance (member from programmer):

/* Before inheriting protoype

p1
Player {username: 'spiritz', game: 'LoL', level: 173, isOnline: ƒ}
game: "LoL"
isOnline: (active)=> {…}
level: 173
username: "spiritz"
[[Prototype]]: Object
stream: ƒ (time)
constructor: ƒ Player(username, game, level, active)
[[Prototype]]: Object

m1
Member {username: 'AX', game: 'LoL', level: 59, platform: 'twitch', isOnline: ƒ}
game: "LoL"
isOnline: (active)=> {…}
level: 59
platform: "twitch"
username: "AX"
[[Prototype]]: Object
constructor: ƒ Member(username, game, level, isOnline, platform)
[[Prototype]]: Object

*/

Member.prototype = Object.create(Player.prototype)  // inheriting the 
Member.prototype.constructor = Member

/* After inheriting protoype 

m1
Member {username: 'AX', game: 'LoL', level: 59, platform: 'twitch', isOnline: ƒ}
game: "LoL"
isOnline: (active)=> {…}
level: 59
platform: "twitch"
username: "AX"
[[Prototype]]: Player
constructor: ƒ Member(username, game, level, isOnline, platform)
[[Prototype]]: Object
stream: ƒ (time)
constructor: ƒ Player(username, game, level, active)
[[Prototype]]: Object

*/

function Member(username, game, level, isOnline, platform){
    Player.call(this, username, game, level, isOnline)
    this.platform = platform
}

let m1 = new Member('AX', 'LoL', 59, 0, 'twitch')
m1.isOnline()