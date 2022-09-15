
// SETS
/* sets store heterogenous data but only once. Repeated values are not added to the set. */

let _set = new Set();
_set.add('grey');
_set.add('blue');
_set.add(function(){});
_set.add({name:'R',age:10});
_set.add('grey');   // this will not be added as it already exists

console.log('set 1:',_set);
console.log('set 1 size:',_set.size);

// using arguments in constructor
let _set2 = new Set(['bronze',2391,210,{honor:2,flag:false},210,'bronze']);
console.log('set 2:',_set2);

// checking availability has()
console.log(_set2.has('silver'));

// removing delete()
_set2.delete('bronze');
console.log('set 2 after delete:',_set2);

// iterating
console.log('---------------------');

for (const item of _set) {
    console.log(item);
}
_set.forEach(item=>{
    console.log(item);
})

// conversion to array
/* We can remove duplicates from an array by converting it to a set and back again. example: */
let _arr = Array.from(_set);
console.log(_arr);

console.log('---------------------');

let colors = ['red','green','blue','lime','orange','red','blue'];
console.log('Array before conversion:',colors);
let _set3 = new Set(colors)
console.log('Set:',_set3);
colors = Array.from(_set3);
console.log('Array after conversion:', colors); //removed duplicate entries