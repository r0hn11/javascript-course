if(!(location.href.slice(location.href.lastIndexOf('/'),).includes('clock.html'))){window.open('/projects/clock.html')}
/////////////////////////

////// Setting time
let hist = document.querySelector('#IST .hourhand')
let mist = document.querySelector('#IST .minutehand')
let sist = document.querySelector('#IST .secondhand')

let hln = document.querySelector('#GMTp1 .hourhand')
let mln = document.querySelector('#GMTp1 .minutehand')
let sln = document.querySelector('#GMTp1 .secondhand')

let histdg = document.querySelector('#ISTdg .hh')
let mistdg = document.querySelector('#ISTdg .mm')

let hlndg = document.querySelector('#GMTp1dg .hh')
let mlndg = document.querySelector('#GMTp1dg .mm')

let dateIST, dateGMTp1;
const hdiff = 4, mdiff = 30;
setInterval(() => {

    dateIST = new Date();
    // analog IST
    hist.style.transform = `translateZ(16px) rotateZ(${dateIST.getHours()*(360/12)+dateIST.getMinutes()/2}deg)`;
    mist.style.transform = `translateZ(12px) rotateZ(${dateIST.getMinutes()*(360/60)+dateIST.getSeconds()*0.1}deg)`;
    sist.style.transform = `translateZ(10px) rotateZ(${dateIST.getSeconds()*6}deg)`;

    // digital IST
    if(dateIST.getHours()<=9){ histdg.innerText = `0${dateIST.getHours()}`;}
    else{histdg.innerText = `${dateIST.getHours()}`}
    if(dateIST.getMinutes()<=9){ mistdg.innerText = `0${dateIST.getMinutes()}`;}
    else{mistdg.innerText = `${dateIST.getMinutes()}`}

    // analog GMT+1
    hln.style.transform = `translateZ(16px) rotateZ(${(dateIST.getHours()-hdiff)*(360/12)+(dateIST.getMinutes()-mdiff)/2}deg)`;
    mln.style.transform = `translateZ(12px) rotateZ(${(dateIST.getMinutes()-mdiff)*(360/60)+(dateIST.getSeconds())*0.1}deg)`;
    sln.style.transform = `translateZ(10px) rotateZ(${(dateIST.getSeconds()-10)*6}deg)`;

    // digital GMT+1
    if(dateIST.getHours()-1<hdiff){
        hlndg.innerText = dateIST.getHours()-hdiff-1+24;
    }
    else{
        if(dateIST.getHours()-hdiff-1<=9){hlndg.innerText = `0${dateIST.getHours()-hdiff-1}`;}
        else{hlndg.innerText = dateIST.getHours()-hdiff-1;}
    }

    if(dateIST.getMinutes()<mdiff){
        mlndg.innerText = dateIST.getMinutes()-mdiff+60;
    }
    else{
        if(dateIST.getMinutes()-mdiff<=9){mlndg.innerText = `0${dateIST.getMinutes()-mdiff}`;}
        else{mlndg.innerText = dateIST.getMinutes()-mdiff;}
    }

    chh.innerText = histdg.innerText;
    cmm.innerText = mistdg.innerText;

}, 1000);



////// toggle clocks
sbtn.onclick=()=>{
    sbtn.style.pointerEvents = 'none';
    if(localStorage.getItem('analogs')==1){
        sbtn.innerText = 'Analog';
        localStorage.setItem('analogs',0);
        localStorage.setItem('digitals',1);
        analogs.style.opacity = '0'
        setTimeout(() => {
            digitals.style.display = 'flex'
            analogs.style.display = 'none'
            setTimeout(() => {
                digitals.style.opacity = '1'
                sbtn.style.pointerEvents = 'auto';
            }, 1000);
        }, 1000);
    }
    else{
        sbtn.innerText = 'Digital';
        localStorage.setItem('digitals',0);
        localStorage.setItem('analogs',1);
        digitals.style.opacity = '0'
        setTimeout(() => {
            analogs.style.display = 'flex'
            digitals.style.display = 'none'
            setTimeout(() => {
                analogs.style.opacity = '1'
                sbtn.style.pointerEvents = 'auto';
            }, 1000);
        }, 1000);
    }
}
// setting value
let analogs = document.querySelector('.analogs');
let digitals = document.querySelector('.digitals');
// localStorage.setItem('analogs', 0);
// localStorage.setItem('digitals', 1);

window.onload = ()=>{
    if(localStorage.getItem('analogs')==1 && localStorage.getItem('digitals')==0){
        sbtn.innerText = 'Digital';
        analogs.style.display = 'flex';
        setTimeout(() => {
            analogs.style.opacity = '1';
        }, 1500);
        digitals.style.display = 'none';
    }
    else if(localStorage.getItem('digitals')==1 && localStorage.getItem('analogs')==0){
        sbtn.innerText = 'Analog';
        analogs.style.display = 'none';
        digitals.style.display = 'flex';
        setTimeout(() => {
            digitals.style.opacity = '1';
        }, 1500);
    }
}


////// alarm popup and setup
shh.innerText = '00';
smm.innerText = '00';
let fbtns = document.querySelectorAll('.fbtn');
addbtn.onclick = ()=>{
    fbtns.forEach(e => {
        e.classList.add('hidden2');
    });
    alarmpop.classList.remove('hidden');
}
aht.onclick = ()=>{
    hh = parseInt(shh.innerText)+1;
    if(hh<=9){shh.innerText = `0${hh}`;}
    else{shh.innerText = `${hh}`;}
    if(hh>23){shh.innerText = `00`;}
}
amt.onclick = ()=>{
    mm = parseInt(smm.innerText)+1;
    if(mm<=9){smm.innerText = `0${mm}`;}
    else{smm.innerText = `${mm}`;}
    if(mm>59){smm.innerText = `00`;}
}
ahb.onclick = ()=>{
    hh = parseInt(shh.innerText)-1;
    if(hh<=9){shh.innerText = `0${hh}`;}
    else{shh.innerText = `${hh}`;}
    if(hh<0){shh.innerText = `23`;}
}
amb.onclick = ()=>{
    mm = parseInt(smm.innerText)-1;
    if(mm<=9){smm.innerText = `0${mm}`;}
    else{smm.innerText = `${mm}`;}
    if(mm<0){smm.innerText = `59`;}
}

setalarm.onclick = ()=>{
    console.log(shh.innerText, smm.innerText);
    fbtns.forEach(e => {
        e.classList.remove('hidden2');
    });
    alarmpop.classList.add('hidden');
}
cancelsetalarm.onclick = ()=>{
    fbtns.forEach(e => {
        e.classList.remove('hidden2');
    });
    alarmpop.classList.add('hidden');
}


////// opacity toggle
let clockfaces = document.querySelectorAll('.clockface');
let dgfaces = document.querySelectorAll('.dgface');

window.onmouseover=()=>{
    clockfaces.forEach(e=>e.style.opacity = '1')
    dgfaces.forEach(e=>e.style.opacity = '1')
    addbtn.style.opacity = '1';
    swbtn.style.opacity = '1';
    tbtn.style.opacity = '1';
    
}
window.onmouseout=()=>{
    clockfaces.forEach(e=>e.style.opacity = '0.6')
    dgfaces.forEach(e=>e.style.opacity = '0.6')
    addbtn.style.opacity = '0.6';
    swbtn.style.opacity = '0.6';
    tbtn.style.opacity = '0.6';
}
