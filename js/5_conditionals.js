let box = document.querySelector('#box');
box.innerHTML = ''
let dt = new Date;
if(dt.getDate()%3 === 0){box.innerHTML += `-fizz-${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()}`}
else if(dt.getDate()%5 === 0){box.innerHTML += `-buzz-${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()}`}
else{box.innerHTML='-err-<br>condition overridden';}