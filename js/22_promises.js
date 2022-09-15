const body = document.querySelector('body')
body.innerHTML = ''

/*----------------------------------------------------------------------------------------------------------*/

/*
when a promise is made then there are 3 possibilites
This is generally used in callbacks
Promise:
-resolve    // if fulfilled
-reject     // if not fulfilled
-pending
*/

function f1(){
    // this function f1 will return a promise -> which takes a function as arg -> which takes 2 functions resolve, reject as args
    let p = new Promise(function (resolve,reject){

        const error = true
        setTimeout(function(){
            if(!error){
                console.log('1')
                resolve()
            }
            else{
                console.log('0')
                reject('Not fulfilled.')
            }
        }, 2000);

    })
    return p
}

// f1().then(rs()).catch(rj())

// function rs(){console.log('Success.')}
// function rj(){console.log('Failure.')}

f1().then(function(){
    console.log('11')   //then->if resolved then run this
}).catch(function(err){
    console.log('10'+' '+err)   //catch->if rejected then run this. argument is the string giveen to reject() as error
})