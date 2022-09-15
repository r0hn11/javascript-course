const body = document.querySelector('body')
body.innerHTML = ''

/*----------------------------------------------------------------------------------------------------------*/

// applying promise in the callbacks

// example response from server
const persons = [
    {name:"Rohan", age:21, sex:"M"},
    {name:"Brian", age:22, sex:"M"},
    {name:"Freya", age:20, sex:"F"},
]

const stat = 200;

function f1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            persons.forEach(element => {
                console.log(element.name)
            });
            if(stat === 200){resolve()}
            else{reject('Unable to fetch')}
        }, 2000);
    })
}

function f2(){
    setTimeout(() => {
        console.log('callback')
    }, 500);
}

f1().then(f2).catch(function(err){
    console.log(err)
})