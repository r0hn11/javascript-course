// create a editable div and store items to localstorage

const body = document.getElementsByTagName('body')[0]
body.innerHTML = `
<div id='root'>
    <h1 id='txt'>Editables</h1>
    <div class='opts'>
        <div class='item' id='ed1'>Opt 1</div>
        <input id='in1'></input>
        <div class='item' id='ed1'>Opt 1</div>
        <input id='in2'></input>
    </div>
    <button class='btn' id='ebtn'>Edit</button>
    <button class='btn' id='cbtn'>Clear storage</button>
</div>
`

const root = document.querySelector('#root')
const ebtn = document.querySelector('#ebtn')
const cbtn = document.querySelector('#cbtn')
const opts_par = document.querySelector('.opts')
const opts = document.querySelectorAll('.opts>div')
const inps = document.querySelectorAll('.opts>input')

root.style.alignItems = 'center'

ebtn.addEventListener('click', (e)=>{
    e.preventDefault()
    for(let i=0;i<opts.length;i++){
        opts[i].style.display = 'none'
        inps[i].style.display = 'block'
        inps[i].value = opts[i].innerHTML
    }
})

for(let i=0;i<inps.length;i++){
    inps[i].addEventListener('blur',()=>{
        localStorage.setItem(`opt${i+1}`, inps[i].value)
        opts[i].style.display = 'block'
        inps[i].style.display = 'none'
        opts[i].innerHTML = inps[i].value
    })
    opts[i].innerHTML = localStorage.getItem(`opt${i+1}`)
}

cbtn.addEventListener('click', ()=>{
    localStorage.clear()
    for(let i=0;i<opts.length;i++){
        opts[i].innerHTML = `opt ${i+1}`
    }
})

if(window.localStorage.length === 0){
    for(let i=0;i<opts.length;i++){
        opts[i].innerHTML = `Edit ${i+1}`
    }
}