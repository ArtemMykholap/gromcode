//input:array
//output:array

let arr = [1, 2, 3.14, 4.1212121, 'ever12', 144, NaN, null, undefined];

const getParsedIntegers = arr => arr.map(elem => Number.parseInt(elem));

const getParsedIntegersV2 = arr => arr.map(elem => parseInt(elem));

const getParsedFloats = arr => arr.map(elem => Number.parseFloat(elem));
const getParsedFloatsV2 = arr => arr.map(elem => parseFloat(elem));

let result = getParsedFloats(arr);
console.log(result);
let result1 = getParsedFloatsV2(arr);
console.log(result1);
let result2 = getParsedIntegers(arr);
console.log(result2);
let result3 = getParsedIntegersV2(arr);
console.log(result3);


// let result = getFiniteNumbers(arr);
// console.log(result);