
// Throwing an error

let a = '';
if(a==''){
    throw new Error ('a is an empty string')
}
else{console.log('value of a is '+a);
}

// Try Catch block

const x = 0;
try {
    x = 5;
} catch (error) {
    console.log('ERROR is '+error)
    console.log(error.name);
    console.log(error.message);
} finally{
    console.log('Run irrespective of situation');
    
}

/*
Types of errors:
TypeError = occurs when a variable or parameter is not of a valid type.
SyntaxError = occurs when there is an error in syntax.
ReferenceError = occurs when there is an invalid reference.
EvalError= occurs when there is an error in global function.
RangeError=  occurs when a numeric variable or parameter is outside of its valid range.
*/