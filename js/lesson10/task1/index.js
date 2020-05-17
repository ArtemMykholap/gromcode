//input:array
//output:array

let arr = [1, 2, 3.14, 4.12, 'never', 'ever', 144, NaN];


const getFiniteNumbers = arr => arr.filter(elem => Number.isFinite(elem));

const getFiniteNumbersV2 = arr => arr.filter(elem => isFinite(elem));

const getNaN = arr => arr.filter(elem => Number.isNaN(elem));

const getNaNV2 = arr => arr.filter(elem => isNaN(elem));

const getIntegers = arr => arr.filter(elem => Number.isInteger(elem));


let result = getFiniteNumbers(arr);
console.log(result);