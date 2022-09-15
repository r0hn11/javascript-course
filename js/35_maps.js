
// MAPS

const _map = new Map();

let fly=()=>console.log('flying');
let _key1 = {}

// setting key values
_map.set('name','Rohan');
_map.set(function(){},fly);
_map.set(_key1,{f1:fly});

console.log(_map);
console.log(_map.size);
// getting values by key
let _name = _map.get('name');
console.log(_name);

// iterate using for...of
for (const [key,value] of _map) {
    console.log(key,value);
}
for (const key of _map.keys()) {
    console.log(key);
}
for (const value of _map.values()) {
    console.log(value);
}

// iterate using foreach
_map.forEach((val,key)=>{
    console.log(key+'~'+val);
})

// converting map to array
let _arr = Array.from(_map);
let _keyarr = Array.from(_map.keys());
let _valarr = Array.from(_map.values());
console.log(_arr);
console.log(_keyarr);
console.log(_valarr);