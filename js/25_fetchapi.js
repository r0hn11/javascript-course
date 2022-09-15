
// GET request
console.log('0')
function getPlayerData(source){
    console.log('1');
    fetch(source).then((response)=>{
        console.log('2');
        console.log(response.status)
        // return response.text();  // json will not be parsed hence a string will be returned so will have to parse data onwards
        return response.json();     // response.json() also returns a promise, hence 2 then
    }).then((data)=>{
        console.log('3');
        console.log(data);
    }).catch(()=>'Unable to fetch')
}

console.log('4');
getPlayerData('content.json');
console.log('5');

// sequence of execution is 0,4,1,5,2,3 ---> reson: asynchronous

// POST request
/* https://jsonplaceholder.typicode.com/guide/ */
function addPlayerData(){
    source = 'https://jsonplaceholder.typicode.com/posts';
    data = {title: 'rohan',body: 'data',userId: 1,};
    const params = {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        // body : data
        body : JSON.stringify(data)    //if data is an object
    }
    fetch(source, params).then(response=>response.json())
    .then(data=>console.log(data))
}

addPlayerData()