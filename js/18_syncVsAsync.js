
// Synchronous code:

for(let i=0;i<10;i++){
    console.log(i+1);
}
console.log('Synchronous, Done printing.')  //printed after above code is executed

// Asynchronous code:

setTimeout(() => {
    for(let i=0;i<10;i++){
        console.log(i+1);
    }
}, 100);
console.log('Asynchronous, Done printing.')  //printed after or before above code is executed according to completion time of both
