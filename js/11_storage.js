// NOTE: value is stored as a string so passing an array will result as a string with brackets. So we can use JSON.stringify and JSON.parse
// lOCALSTORAGE has no expiry date while SESSIONSTORAGE has
localStorage.setItem('Name', 'Rohan')   // key, value
localStorage.setItem('Name2', 'Ezreal')   // key, value
let arrI = ['it1', 'it2', 'it3']
localStorage.setItem('Name3', arrI)   // key, value (input as Array without stringify)
localStorage.setItem('Name4', JSON.stringify(arrI))   // key, value (input as Array with stringiify)
let arrO = JSON.parse(localStorage.getItem('Name4'))    // retrieving array

console.log(window.localStorage)
console.log(window.localStorage.Name)

let nm = localStorage.getItem('Name2')
console.log(nm)

// clear specific
localStorage.removeItem('Name')
console.log(window.localStorage)



sessionStorage.setItem('sname1', 'Rohan')
sessionStorage.setItem('sname2', 'Eon')

// clear all
localStorage.clear()
sessionStorage.clear()
console.log(window.localStorage)


console.log()