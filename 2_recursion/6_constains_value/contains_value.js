// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// (object, 'one')
// obj = {
//     a: {
//         b: {
//             c: {
//                 1: 'one'
//             }
//         }
//     }
// }

function contains(object, value){
    for(let key in object){
        console.log(key);

        if(object[key] === value){
            return true;
        }

        if(typeof object[key] === 'object'){
            return contains(object, key);
        }
    }
    
}
let obj = {
    'a': {
        'b': 'two'
    }
}
console.log(contains(obj, 'two'));

