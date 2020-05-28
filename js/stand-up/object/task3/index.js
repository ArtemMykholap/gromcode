// Algo to *Comparing two objects*
// cast objects to an array of arrays \ key-value
// flatten
// cast the array to the string and compare

let obj1 = {
    name: 'Andrey',
    age: 20,
    city: 'Kiev',

}
let obj1 = {
    age: 20,
    name: 'Denis',
    city: 'Kiev',

}

function compareObjects(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length)
        return false;
    return keys1.reduce((acc, key) => {
        if (acc === false)
            return false;
        return obj1[key] === obj2[key];
    }, true);
}
// 1.compare two objects by length if ===return true\false;
// 2.iterate keys and compare values,if not equal- return false;
// function compareObjects(obj1, obj2) {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) return false;
//    return  keys1.reduce((acc, key) => {
//        if (acc===false){return false;}
//        let value1=obj1[key];
//        let value2=obj2[key];
//        if (value1 !== value2){
//            return false}else{
//                return true
//            }
//          return obj1[key]=obj2[key];



//     },true)
// }



// console.log(compareObjects(obj1, obj2))
// Create empty object
// checking keys of object with for let
// compare properties to the condition 'admin'
// if the condition fits, equate the empty object to this object