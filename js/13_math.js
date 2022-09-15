// Math class

let x=5
let y=3

let z=x+y
z=x-y
z=x*y
z=x/y

console.log(Math)
/*
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
clz32: ƒ clz32()
cos: ƒ cos()
cosh: ƒ cosh()
exp: ƒ exp()
expm1: ƒ expm1()
floor: ƒ floor()
fround: ƒ fround()
hypot: ƒ hypot()
imul: ƒ imul()
log: ƒ log()
log1p: ƒ log1p()
log2: ƒ log2()
log10: ƒ log10()
max: ƒ max()
min: ƒ min()
pow: ƒ pow()
random: ƒ random()
round: ƒ round()
sign: ƒ sign()
sin: ƒ sin()
sinh: ƒ sinh()
sqrt: ƒ sqrt()
tan: ƒ tan()
tanh: ƒ tanh()
trunc: ƒ trunc()
*/

z= Math.ceil(2.3)   //3    (next value on numeber line)
z= Math.ceil(-2.3)   //3    (next value on numeber line)
z= Math.floor(-2.8)   //2   (prev value on number line)
z= Math.round(2.5)
z= Math.abs(-2.5)
z= Math.sqrt(2.5)
z= Math.pow(2,5)
z= Math.min(1,2,4,8,2,21)
z= Math.max(1,2,4,8,2,21)
z= Math.random()    //between 0 to 1
z= (Math.random())*100    // between 0 to 100
z= Math.round(1+((Math.random())*(10-1)))    // between 1 to 10
console.log(z)