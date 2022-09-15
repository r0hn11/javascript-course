
let users = []

function create(name, platform){
    let user = {}
    user.name = name
    user.platform = platform
    users.push(user)
    console.log(`'${user.name}' has been created.`)
    return user
}

create('Rohn', 'Windows')
create('Vayne', 'Windows')


// scope
/*
let, const have block level scope
var has function level scope
*/
{var n = 5}     //global
let m = 0
{
    let m = 6     //local/block
    console.log(m)
}
function add(){
    // var n = 9
    n = 9
    m = 1
    console.log(n, m)
}

add()

console.log(n, m)