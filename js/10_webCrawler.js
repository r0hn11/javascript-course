let _links = document.links
let len = _links.length

Array.from(_links).forEach(e=>{
    if(e.href.includes('javascript')){console.log(e.href)}
})

