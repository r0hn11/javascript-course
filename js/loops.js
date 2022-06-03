
let i=1
let j=6
let k=11

for(i;i<=5;i++){console.log(i)}


while (j<=10) {
    console.log(j)
    j++
    if(j==8) break  //breaking out of loop
}


do {
    console.log(k)
    k++
    if(k==13) continue  //skips next code and continues to next iteration
    console.log('unskipped')
} while (k<=15);