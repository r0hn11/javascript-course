
class Player{
    constructor(username, platform, game){
        this.username = username
        this.platform = platform
        this.game = game
    }

    // dynamic method (object required)
    stream(t){return `Stream starting in ${t}m`}
    // static method (object not required)
    static clientOpen(){return `Client is launched.`}
}

const p1 = new Player('rohn', 'twitch', 'LoL')

console.log(p1)
console.log(p1.stream(10))
console.log(Player.clientOpen())

// ES6 Inheritance

class Member extends Player{
    constructor(username, platform, game, plan){
        super(username, platform, game)     //calling  parent class constructor
        this.plan = plan
    }
    
    planExpire(){return `Pass expiring in ${this.plan} month(s)`}
    static activateContent(){return 'Exclusive content accessible'}
}

let m1 = new Member('rohn', 'twitch', 'LoL', 1)

console.log(m1)
console.log(m1.planExpire())
console.log(Member.clientOpen())    // accessing parent class methods
console.log(Member.activateContent())