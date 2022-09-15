// callbacks are the function called inside functions

const body = document.getElementsByTagName('body')[0]
body.innerHTML = 
`
<div id="root">
    <h2>Persons</h2>
    <ul id="list"></ul>
</div>
`

// example response from server
const persons = [
    {name:"Rohan", age:21, sex:"M"},
    {name:"Brian", age:22, sex:"M"},
    {name:"Freya", age:20, sex:"F"},
]

/*
function addPerson(person){
    setTimeout(function(){
        persons.push(person)
        console.log('Person added.')
    }, 2000);
}

const list = document.getElementById('list')

function getPerson(){
    list.innerHTML = ``
    setTimeout(function(){
        persons.forEach(function(e) {
            let item = document.createElement('li')
            item.innerHTML += `${e.name}, ${e.age}, ${e.sex}`  
            list.appendChild(item)
        });
    }, 1500);
}

let newPerson = {name:"Owen", age:19, sex:"M"}
addPerson(newPerson)
getPerson() //list will not contain recently added member as time delay for add is 2000ms while for get is 1500ms. Hence async callbacks
*/

// using callback
function addPerson(person, callback){
    setTimeout(function(){
        persons.push(person)
        console.log('Person added.')
        callback()
    }, 2000);
}

const list = document.getElementById('list')

function getPerson(){
    list.innerHTML = ``
    setTimeout(function(){
        persons.forEach(function(e) {
            let item = document.createElement('li')
            item.innerHTML += `${e.name}, ${e.age}, ${e.sex}`  
            list.appendChild(item)
        });
    }, 500);
}

let newPerson = {name:"Owen", age:19, sex:"M"}
addPerson(newPerson, getPerson)     // getPerson is a callback here. addPerson will hold back the callback until it's own execution