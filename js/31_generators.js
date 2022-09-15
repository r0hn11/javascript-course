
// GENERATORS 
/*
    object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.
    Similar to dynamic memory allocation.
*/

const genrt = function* (){
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
}

let op = genrt()
console.log(op.next().value);   //a
console.log(op.next().value);   //b
console.log(op.next().value);   //c
console.log(op.next().value);   //d
console.log(op.next().value);   //undefined

//////////
// infinite generation
function* genrt2(){
    let i = 0;
    while(true){
        yield i++;
    }
}

let op2 = genrt2()
console.log(op2.next().value);
console.log(op2.next().value);
console.log(op2.next().value);
console.log(op2.next().value);
console.log(op2.next().value);
console.log(op2.next().value);