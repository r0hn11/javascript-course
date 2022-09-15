
// SYMBOLS - primitive (newly introduced)
/* introduced in ES6 for creating unique keys in objects */

let _sym = Symbol('Jax');
console.log(_sym);
console.log('Type:', typeof(_sym));

// checking equality of symbols vs  equality of strings
// symbols
let _sym1 = Symbol('s1')
let _sym2 = Symbol('s1')
console.log(_sym1===_sym2);    //false

// string
let _st1 = 'r1';
let _st2 = 'r1';
console.log(_st1===_st2);   //true

// introduing symbols into objects

let k1 = Symbol();
let k2 = Symbol();

let obj = new Object();
obj[k1] = 'R';
obj[k2] = 'S';
obj['sname'] = 'C';
obj[0] = 0;

console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);
// console.log(obj.k2);     //symbols can't be accessed by dot operator
console.log(obj.sname);

// iterating through object: Symbols are ignored in for..in loop
for (const key in obj) {
    console.log(key, obj[key]);
}

// JSON.stringify: Symbols are ignored
console.log(JSON.stringify(obj));