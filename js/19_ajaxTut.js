/*

AJAX- asynchronous JavaScript and XML
- not a programming language but a set of technologies
- fetch data asynchronously
- no complete page reload, only required part is reloaded

- AJAX uses XMLHTTPRequest object
- modern uses of JSON instead of XML for data transfer
- any format for data transfer. (similar to HTTP, use of FTP, SRTP (Secure Real-time Transport Protocol))

*/


if(location.href.slice(location.href.lastIndexOf('/')+1,)!='ajax.html'){
    setTimeout(()=>{
        window.open('projects/ajax.html')
    },2000)
}

const root = document.getElementById('root')
const title = document.getElementById('title')
const sectone = document.querySelector('.one')
const btnone = document.querySelector('.b1')
const txtone = document.querySelector('.t1')
const checkone = document.querySelector('.check1')
const errone = document.querySelector('.err1')


window.onload=()=>{
    setTimeout(() => {
        title.style.opacity = 0.05
    }, 1000);
}


btnone.onclick=()=>{
    const xhr = new XMLHttpRequest();   //initializing instance of object XMLHTTPpRequest

    // open the object
    // xhr.open('GET', 'content.json', true)    //arguments: method/request, from where data is, if request is async or blocking
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

    // while in-progress
    // underlying code won't work for blocking code
    xhr.onprogress= function(){
        console.log('in-progress.')
        btnone.style.background = '#555'
        btnone.onclick=()=>{}
    }

    /*
    // previously, instead of onload, onreadystatechange was used. onload means 4 th state of readyState
    xhr.onreadystatechange = (()=>{
        console.log(xhr.readyState) //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    })
    */

    // after loading is complete
    xhr.onload= function(){
        /* https://www.restapitutorial.com/httpstatuscodes.html */ // refer for all response codes
        if(this.status === 200){
            console.log('fetching process complete.')
            checkone.style.display = 'block'
            // console.log(this.response)
            txtone.innerText = this.responseText
            // txtone.innerText = (this.responseText).replace('Lorem','Rohan')
        }
        else{
            errone.style.display = 'block'
            txtone.innerText = `Unable to fetch data. error ${this.status}`
            if(this.status === 429){
                txttwo.innerText += '\nToo many requests. Wait for a while.'
            }
        }
    }

    // sending request
    xhr.send()

    console.log('EOF')  //async is set true hence this will execute anyway faster than above fetch request

}



const secttwo = document.querySelector('.two')
const btntwo = document.querySelector('.b2')
const txttwo = document.querySelector('.t2')
const checktwo = document.querySelector('.check2')
const errtwo = document.querySelector('.err2')

btntwo.onclick = ()=>{
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', "https://dummy.restapiexample.com/api/v1/create", true);
    xhr.getResponseHeader('Content-type', 'application/JSON')

    xhr.onprogress= function(){
        console.log('in-progress.')
        btntwo.style.background = '#555'
        btntwo.onclick=()=>{}
    }
    
    xhr.onload = function (){
        if(this.status === 200){
            checktwo.style.display = 'block'
            txttwo.innerText = this.responseText
        }
        else{
            errtwo.style.display = 'block'
            txttwo.innerText = `Unable to add data. error ${this.status}`
            if(this.status === 429){
                txttwo.innerText += '\nToo many requests. Wait for a while.'
            }
        }
    }

    let params = {"name":"tests","salary":"123","age":"23"}
    xhr.send(params)
}


const sectthree = document.querySelector('.thre')
const btnthree = document.querySelector('.b3')
const txtthree = document.querySelector('.t3')
const checkthree = document.querySelector('.check3')
const errthree = document.querySelector('.err3')

btnthree.onclick = ()=>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true)

    xhr.onprogress= function(){
        console.log('in-progress.')
        btnthree.style.background = '#555'
        btnthree.onclick=()=>{}
    }

    xhr.onload = function(){
        if(this.status === 200){
            checkthree.style.display = 'block'
            let entries = JSON.parse(this.responseText)
            for(let i=0;i<entries.data.length;i++){
                txtthree.innerHTML += `<li>${entries.data[i].employee_name}, ${entries.data[i].employee_salary}</li>`
            }
        }
        else{
            errthree.style.display = 'block'
            txtthree.innerText = `Unable to fetch data. error ${this.status}`
            if(this.status === 429){
                txtthree.innerText += '\nToo many requests. Wait for a while.'
            }
        }
    }

    xhr.send()

}