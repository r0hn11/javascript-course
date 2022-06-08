const body = document.getElementsByTagName('body')[0]
body.innerHTML = 
`
<form id='root' method='post' action='form.php'>
    <div id='swatch'></div>
    <div id='txt' class='c1 c2'>Events</div>
    <button class='btn' id='sbtn' type='submit' style='margin: 20px auto;'>Submit</button>
</form>
`
body.style.background = '#222'

const root = document.querySelector('#root')
const txt = document.querySelector('#txt')
const sbtn = document.querySelector('#sbtn')
const swatch = document.querySelector('#swatch')

sbtn.addEventListener('click', prevent)     //only for left click
sbtn.addEventListener('dblclick', prevent2)     //only for left click
sbtn.addEventListener('mousedown', down)     //allows all mouse buttons (including middle)
sbtn.addEventListener('mousedown', up)     //allows all mouse buttons (including middle)

root.addEventListener('mouseenter', enter)
root.addEventListener('mouseleave', leave)

function prevent(e){
    console.log('Single click')
    e.preventDefault()
}

function prevent2(e){
    console.log('Double click')
    e.preventDefault()
}

function down(e){
    console.log('Down')
    e.preventDefault()
}

function up(e){
    console.log('Up')
    e.preventDefault()
}

function enter(e){
    console.log('Enter', e.offsetX, e.offsetY)
    root.style.border = '2px solid #fff'
    root.style.padding = '20px 100px'
}

function leave(e){
    console.log('Leave', e.offsetX, e.offsetY)
    root.style.border = '2px solid transparent'
    root.style.padding = '20px 50px'
}

window.onmousemove = (e)=>{
    let z = Math.round(Math.random(0,255)*255)
    swatch.style.background = `rgb(${e.offsetX}, ${e.offsetY}, ${z})`
}