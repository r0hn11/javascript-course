// FOR...IN
const obj = {
    name: "Rohan",
    age:20,
    life:"Happy"
}
// regular for loop
for (let i = 0; i < Object.keys(obj).length; i++) {
    const e = obj[Object.keys(obj)[i]];
    console.log(e);
}
// for...in
for (const key in obj) {
    console.log(obj[key]);
}

// can be used for strings also
let str = "a 3@fD";
// regular for loop
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// for...in 
for (const char in str) {
    console.log(str[char]);
}

////////////////////////////////////////////////////////////////////////////////////////////////
console.log('------------------------------');
// FOR...OF
let people = ['rohan','monu','garry'];
let str2 = 'm2d&bY'
for (const name of people) {
    console.log(name.slice(0,1).toUpperCase()+name.slice(1,));
}
for (char of str2){
    console.log(char);
}

let list = document.getElementsByTagName('div');
for (const item of list) {
    console.log(item);
}