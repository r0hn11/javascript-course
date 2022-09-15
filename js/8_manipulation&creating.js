const body = document.getElementsByTagName('body')[0]
body.innerHTML = ''
body.id = 'body'

console.log(window)

//creating element function
function create(type='', className='', parentId='', id='', content=''){
    let element = document.createElement(type)
    element.classList.add(className)
    element.id = id
    document.getElementById(parentId).appendChild(element)
    element.innerHTML = content
    return element
}

root = create('div', 'rootClass', 'body', 'root', '')
menu_par = create('ul', 'list', 'root', 'menu', 'Menu')

//creating list items
let i = 0
let menu = ['Home', 'About', 'Contact', 'Services']
let items = []
while(i<4){
    items[i] = create('li','item', 'menu', `it${i}`, menu[i])
    i++
}



//sekecting methods
console.log(body.children[0].children[0].childElementCount)
console.log(menu_par.firstChild)
console.log(menu_par.firstElementChild.innerHTML)
console.log(menu_par.lastChild)
console.log(menu_par.lastElementChild.innerHTML)
console.log(menu_par.childNodes)

console.log(menu_par.parentNode)
console.log(menu_par.firstChild.parentNode)
console.log(menu_par.lastChild.parentNode)

console.log(menu_par.firstChild.nextSibling)
console.log(menu_par.firstChild.nextElementSibling)

//plain text node creation
let txt = document.createTextNode('A text node')    //plain text element
menu_par.appendChild(txt)

//insertBefore
let title = document.createElement('h1')
title.className = 'ttl'
title.id = 'heading'
title.innerText = 'Creating elements in JS'
title.setAttribute('name', 'title')

root.insertBefore(title, menu_par)

let btn = create('button', 'btn', 'root', 'r-btn', 'Replace')
let btn2 = create('button', 'btn', 'root', 'rc-btn', 'Replace child')
let btn3 = create('button', 'btn', 'root', 'rm-btn', 'Remove child')

// replacing an element
var flag = 0
let new_ttl = document.createElement('ul')
let new_txt = document.createTextNode('Navigation')
new_ttl.id = 'nav'
new_ttl.appendChild(new_txt)
new_ttl.innerHTML+=`
<li>Updates</li>
<li>Connect</li>
<li>Account</li>
`

btn.onclick = ()=>{
    flag2 = 0
    if(flag === 0){
        menu_par.replaceWith(new_ttl)
        flag = 1
    }
    else{
        new_ttl.replaceWith(menu_par)
        flag = 0
    }
}

// replacing child element
var flag2 = 0
let new_item = document.createElement('li')
new_item.className = 'item'
new_item.innerHTML = 'News'
let fui
btn2.onclick = ()=>{
    parent = root.childNodes[1]
    if(flag2 === 0){
        fui = root.childNodes[1].firstElementChild
        parent.replaceChild(new_item, root.childNodes[1].firstElementChild)
        flag2 = 1
    }
    else{
        parent.replaceChild(fui, new_item)
        flag2 = 0
    }
}

// Remove child
btn3.onclick = ()=>{
    root.childNodes[1].removeChild(root.childNodes[1].lastElementChild)
}

// Attributes
let nid = title.getAttribute('id')
let nclass = title.getAttribute('class')
let isid = title.hasAttribute('id')

title.setAttribute('style', 'text-shadow: 0 0 5px #000')

console.log(nid, nclass, isid)

// removing attribute
title.removeAttribute('class')
nclass = title.getAttribute('class')
console.log(nid, nclass, isid)

title.onclick = ()=>{
    location.href = 'root.html'
}