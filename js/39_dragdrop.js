if(!(location.href.slice(location.href.lastIndexOf('/'),).includes('drag.html'))){window.open('/projects/drag.html')}


const item = document.getElementById('item');
const holders = document.querySelectorAll('.holder');
let draggeditem;

item.ondragstart = ()=>{
  draggeditem = item;
}

item.ondragend = ()=>{
  holders.forEach( e=> {
    e.classList.remove('holding');
  });

}

for (var holder of holders) {
  holder.ondragover = (e)=>{
    e.preventDefault();
    e.target.classList.add('holding');
  }
  holder.ondragenter = ()=>{
  }
  holder.ondragleave = (e)=>{
    e.target.classList.remove('holding');
  }
  holder.ondrop = (e)=>{
    e.preventDefault();
    e.target.append(draggeditem);
    e.target.classList.remove('holding');
  }
}
