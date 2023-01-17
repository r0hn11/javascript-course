
let i=1
let j=4
let k=9

for(i;i<=3;i++){console.log(i)}


while (j<=8) {
    console.log(j)
    j++
    if(j==6) break  //breaking out of loop
}


do {
    console.log(k)
    k++
    if(k==10) continue  //skips next code and continues to next iteration
    console.log('unskipped')
} while (k<=12);

////////////////////
// foreach
let arr = ['t1','t2','t3','t4','t5']

arr.forEach((element, index, array)=>{
    console.log(element, index, array)
})

///////////////////
const user = {
    name: 'Rohn',
    domain: 'Web dev',
    level: 20
}

// for...in
for(let key in user){
    console.log(`${key}- ${user[key]}`)
}

// for...of
for(let x of arr){
    console.log(x);
}
