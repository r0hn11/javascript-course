
// ITERATORS
/*
    iterator is an object which defines a sequence and potentially a return value upon its termination.
    has a next() method that returns an object with 2 properties.
    similar to for...of.
    iterate without loop.
    Iterator protocol: method that returns an object with next() method which further returns an object with 2 properties value and done(if it is last)
*/
const arr = ['ax','sr','ty','ol','pn','mu'];

function getNumbers(arr){
    let nextIndex = 0;
    return{
        next: function(){
            if(nextIndex<arr.length){
                return{
                    value: arr[nextIndex++],
                    done: false
                }
            }
            else{
                done: true
            }
        }
    }
}

const itr = getNumbers(arr);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);
