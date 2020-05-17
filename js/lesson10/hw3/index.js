//input:number
//output:number

// задаем требуемые методы
// умножаем на 10 возведенную в степень n и поделенную на 10 возведенную в степень n


let number = 15.711227;
let n = 3;

const superRound = (number, n) => [
    Math.floor(number * 10 ** n) / 10 ** n,
    Math.round(number * 10 ** n) / 10 ** n,
    Math.ceil(number * 10 ** n) / 10 ** n,
    Math.trunc(number * 10 ** n) / 10 ** n, +number.toFixed(n)
]

console.log(superRound(number, n));