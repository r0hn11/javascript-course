// alert(`Data types and conversion`);
/*
TYPES :
1. Premitive dt - string, numbers, boolean, null, undefined, symbol     //memory allocated in stack
2. Reference dt - arrays, object literals, functions, dates     //memory is allocated in heap
*/

//Premitives

let str = 'Rohn';
let num = 5;
let flag = true;
let null_var = null;
let undef = undefined;
// symbols is new primitive data type introduced in ES6
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(null_var));  //returns as object
console.log(typeof(undef));

//Reference 

let arr = [14,12.2,'Rohn',true,null,undefined];
let users = {usr1:'Rohn',usr2:'Isa',usr3:'Jane'};
function permit(p){
    console.log(`Access granted to ${p}`);
}
permit(users.usr1);
let dt = new Date();

console.log(typeof(arr));      //returns as object
console.log(typeof(users));
console.log(typeof(permit));
console.log(typeof(dt));


//CONVERSION

let num_to_str = String(num);
let dt_to_str = String(dt);
let flag_to_str = String(flag);
let arr_to_str = String(arr);
console.log(num,typeof(num),num_to_str, typeof(num_to_str));
console.log(dt,typeof(dt),dt_to_str, typeof(dt_to_str));
console.log(flag.length,typeof(flag),flag_to_str.length, typeof(flag_to_str));
console.log(arr.length,typeof(arr),arr_to_str.length, typeof(arr_to_str)); 

let x = 5;
console.log(x.toString());
console.log(dt .toString());

let str_num = Number('54');
let str_num2 = parseInt('54');
console.log(str_num, typeof(str_num));
console.log(str_num2, typeof(str_num2));

let flt = parseFloat('210.21');
console.log(flt, typeof(flt));

let res = str_num/3.1;
console.log(res);
console.log(res.toFixed(3), typeof(res));

//COERCION

let st = '10';
let x3 = 12;
console.log(x3+st); //converts number to string and concatinates unless string is converted to number
console.log(x3+parseInt(st)); 