const body = document.getElementsByTagName('body')[0]
body.innerHTML = 
`
<div id='root'>
    <div id='txt' class='c1 c2'>Click</div>
</div>
`
const root = document.querySelector('#root')
const txt = document.querySelector('#txt')

txt.addEventListener('mouseOver', function(e){
    console.log(e)
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.className)
    console.log(e.target.classList)
    console.log(e.offsetX)      // position you click on according to element
    console.log(e.offsetY)
    console.log(e.clientX)      // position you click on according to client/window
    console.log(e.clientY)
})

