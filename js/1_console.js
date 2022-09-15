alert(`Console`);
console.warn('custom warning');     //warning
console.error('custom error');     //error
// console.clear();        //clear console

//time taken by code
{
    let _time = 'time taken for completion : '
    console.time(_time);
    setTimeout(() => {
        console.log('generated a second');
    }, 1000);
    console.timeEnd(_time);
}

//generate table of your object
obj1={
    name : 'rohan',
    age : 20,
    life : 'happy'
}
console.table(obj1);

//assert
console.assert(obj1.age>18, 'Underaged not allowed');   //if the condition fails, then assertion is displayed
obj1.age = 18;
console.assert(obj1.age>18, 'Underaged not allowed');