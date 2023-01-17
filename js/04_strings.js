//STRINGS

//concat
let str1 = `'Taking your own life.' `;
let str2 = `Interesting expression, `;
console.log(str1.toUpperCase() + str2 + 'but taking it from who?');
let fin_str = ((str1.toUpperCase()).concat(str2)).concat('but taking it from who?');
console.log(fin_str);

//indexing
console.log(str1.indexOf(`'`));
console.log(str1.lastIndexOf(`'`));
console.log(str1.charAt(23));
console.log(str1.endsWith(' '));    //returns true
console.log(str1.includes(`our`));    //returns false
console.log(str1.substring(3,10));    //not including second value
console.log(str1.slice(5,20));    
console.log(str1.slice(0,-5));    
let arr = str1.split(' ');
console.log(arr);

//functions
str2 = str2.replace('Interesting','sigh, interesting');
console.log(str2);

//escape sequence
console.log('Rohan\'');

//template literals
let persona={
    name: 'Rohan',
    age: 20,
    work: 'web developer',
    city: 'Pune'
}

let box = document.querySelector('#box');
box.innerHTML = `This is ${persona.name} aged ${persona.age} `


