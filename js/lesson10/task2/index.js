//input:array
//output:array

let arr = [1, 2, 3.14, 4.1212121, 'ever12', 144, NaN, null, undefined];

const getParsedIntegers = arr => arr.map(elem => Number.parseInt(elem));

const getParsedIntegersV2 = arr => arr.map(elem => parseInt(elem));

const getParsedFloats = arr => arr.filter(elem => Number.parseFloat(elem));
const getParsedFloatsV2 = arr => arr.filter(elem => parseFloat(elem));

let result = getParsedFloats(arr);
console.log(result)
let result1 = getParsedFloatsV2(arr);
console.log(result1)


// let result = getFiniteNumbers(arr);
// console.log(result);