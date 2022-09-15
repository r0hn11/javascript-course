
// DESTRUCTURING

[a,b] = [1,4];
console.log(a); //1
console.log(b); //4

[j,k,l,...m] = [1,2,3,4,5,6,7,8,9,10];  // j,k,l will be assigned as first 3 values in array and rest will be stored in ...m i.e. m in form of array
console.log(j,k,l);
console.log(m);

// use of destructuring in object
let obj = {a,b,c,...d} = {a:2,b:"ok",c:false,x:0,y:"R",z:"2",w:true,t:undefined}
console.log(a,b,c,d);

// passing an array
let arr = ['red','green','blue','yellow'];
[a,b,...c] = arr
console.log(a,b,c);


// OBJECT DESTRUCTURING
console.log('--------------------------------------');
const obj2 = {
    name:"Rohan",
    age:21,
    heart:'normal',
    alive:true,
    walk:function(){
        console.log('Walking');
    }
}

const {name,age,heart,walk} = obj2;
console.log(name, age, heart);
walk();