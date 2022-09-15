
console.log('Start');

async function get(){
    console.log('inside');

    const response = await fetch('https://api.github.com/users');

    console.log('before user resolve');
    const users = await response.json();
    console.log('users resolved');

    return users;
}

console.log('Before calling get()');
let a = get();
console.log(a);
console.log('After calling get()');
a.then(data=>console.log(data));


/*

1. 'Start'
2. function is not called yet so printing 'Before calling get()'
3. then function is called so printing 'inside'
4. now compiler sees 'await' and asks if process is complete, if not then gets out of the function and assigns 'a' as a pending promise in return
    *'async' functions return a promise 
    *'await' works like a temporary 'return'. It will check if the function next to it is complete or not. if not then it will exit the parent function and work on rest of the code in the file that can be completed
5. now console.log(a) will print a promise that is 'pending' as its not resolved yet
6. now printing 'After calling get()'
7. after everything else executable is complete, so now compiler will go back to get() to check if process is done. If not done then it will wait as everything else is done.
    after completing, it will print 'before user resolve'
    again it will find await but same as above, everything else is done so it will wait
    after completing, it will print 'users resolved'
8. now it will return the given statement which is users.

hence the final response in console is:

Start    26_async_await.js:16
Before calling get()    26_async_await.js:5
inside    26_async_await.js:18
Promise {<pending>}    26_async_await.js:19
After calling get()    26_async_await.js:9
before user resolve    26_async_await.js:11
users resolved    26_async_await.js:20
(30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

*/