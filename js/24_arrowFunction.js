
// arrow functions

let greet1 = ()=> 'Hello, there.';    // one liner act as a return statement automatically
let greet2 = name => 'Hello, '+name;
let greet3 = (name,surname) => 'Hello, '+name+' '+surname;    // paranthesis for multiple params

console.log(greet1());
console.log(greet2('Rohan'));
console.log(greet3('Rohan', 'Chavan'));


// DIFFERENCE between normal and arrow function

// 1) arguments object not available in arrow function ----------------------------------------------------------------------------
/*
function set(x,y){
    console.log(arguments);  //this is an arguments object
    x=y;
    return x;
}

let setar = (x,y)=>{
    console.log(arguments);
    x=y;
    return x;
}

let a = 'a';
set(a,"r");
setar(a,"p");   //error : arguments not defined
*/

// 2) regulat functions created using function declarations or expressions are 'constructible' and 'callable' ----------------------------------------------------------------------------
/*
function Obj(yourname){
    this.name = yourname;
}

const Objar = (yourname)=>{
    this.name = yourname;
}

let newobj = new Obj('grit');
let newobjar = new Objar('grit');
console.log(newobj);
console.log(newobjar);  //error : Objar is not a constructor
*/

// 3) Arrow function don't have their own 'this'. It either returns empty value or it's parent's value for 'this' ----------------------------------------------------------------------------
/*
let user = {
    name:'Eve',
    regf(){console.log('regf = '+this.name);},
    arrinregf(){
        arrinf = ()=>{console.log('arrinf = '+this.name);}
        arrinf();
        console.log('arrinregf = '+this.name)
    },
    arrf: ()=>{console.log('arrf = '+this.name);}
}
user.regf()     // own value
user.arrinregf()    // result is parent's value
user.arrf()     // no error but no result either
*/

// 4) Implicitly returned by the arrow function ----------------------------------------------------------------------------
/*
function retVal(){
    100;
}

let retValar = ()=> 100;

console.log(retVal())   // returns undefined as no return statement
console.log(retValar())     // returns value as it is by default returned
*/