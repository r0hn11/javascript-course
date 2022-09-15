if(!location.href.slice(location.href.lastIndexOf('/')+1,).includes('form.html')){window.open('/projects/form.html');}

const root = document.getElementById('root');
const form = document.querySelector('#root>form');
const types_popup = document.getElementById('msg2');
const qbox = document.getElementById('info');

// Personality types information popup hide/reveal
let id_arr = ['form','mail','pass','phone','uname','address','body','ttl','root'];

qbox.onclick = function(){
    types_popup.classList.remove('hidden');
    document.onclick = (e)=>{
        if(id_arr.includes(e.target.id)){
            types_popup.classList.add('hidden');
        }
    }
}

// Regex Validations

const warntxt = document.querySelector('#warning>p');
const unlocktext = document.getElementById('unlocktext').innerText;

uname.addEventListener('blur', validate);
mail.addEventListener('blur', validate);
phone.addEventListener('blur', validate);
pass.addEventListener('blur', validate);
untxt.addEventListener('blur', validate);

// toggle warning
function warn(val){
    document.documentElement.scrollTop = 0;
    let text;
    switch (val) {
        case 0:
            text = 'username must contain 2-14 non-special characters and non-numeric starting character.';
            break;
        case 1:
            text = 'enter a valid email.'
            break;
        case 2:
            text = 'enter a 10 digit contact number.'
            break;
        case 3:
            text = 'password must be at least 8 character long and must contain uppercase and lowercase character, number and special character.'
            break;
        case 4:
            text = 'incorrect unlock text.'
            break;
        default:
            break;
    }
    warntxt.innerHTML = text;
    warning.classList.add('show-warning');

    setTimeout(() => {
        warntxt.style.opacity = '1';
    }, 500);
}

function hidewarning(){
    warntxt.style.opacity = '0';
    setTimeout(() => {
        warning.classList.remove('show-warning');
    }, 500);
}

function showstatus(flag){
    let text;
    let color;
    switch (flag) {
        case 0:
            text = 'Submission failed. Check inputs.';
            color = 'rgb(255, 50, 50)';
            break;
        case 1:
            uname.value = ''
            mail.value = ''
            phone.value = ''
            pass.value = ''
            untxt.value = ''
            text = 'Submission successful.';
            color = 'rgb(66, 150, 98)';
            break;
        default:
            break;
    }
    stat.innerText = text;
    stat.style.color = color;
    stat.classList.add('show-status');
    setTimeout(() => {
        stat.classList.remove('show-status');
    }, 5000);
}

// validate
let finalCode = 0;
function validate(){
    let input = this.value;
    let regex;
    let operation;
    let code;
    switch (this.id) {
        case 'uname':
            regex = /^[a-zA-z]([a-zA-z0-9]){2,14}$/;
            operation = regex.test(input.replace(' ',''));
            code = 0;
            break;
        case 'mail':
            regex = /^\w+([\w\d#@$!_\.\-\*]){1,}@\w{2,}\.([\w\d#@$!_\.\*]{2,7}){1,}/;
            operation = regex.exec(input);
            code = 1;
            break
        case 'phone':
            regex = /^[0-9]{10}$/;
            operation = regex.test(input);
            code = 2;
            break
        case 'pass':
            regex = /^[a-zA-Z0-9](?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#@!$%_&\*\.])([a-zA-Z0-9@$#&!?_]){8,}$/;
            operation = regex.test(input);
            console.log(operation, regex.source);
            code = 3;
            break
        case 'untxt':
            str = unlocktext.replace(/ /g,'');
            regex = /faith/;
            operation = regex.exec(input.replace(' ',''))
            console.log(operation);
            code = 4;
            break;
        default:
            break;
    }
    if(!operation){
        this.style.borderColor = 'rgb(246, 142, 142)';
        warn(code);
        finalCode = 0;
    }
    else{
        this.style.borderColor = '#0002';
        hidewarning();
        finalCode = 1;
    }
    console.log(finalCode);
}

submit.onclick = (e)=>{
    e.preventDefault();
    showstatus(finalCode);
}
