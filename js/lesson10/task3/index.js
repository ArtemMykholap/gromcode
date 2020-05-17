//input:number
//output:array of numbers

let number = -15.77;
const multiRound = number => [
    Math.floor(number), Math.round(number), Math.ceil(number), Math.trunc(number), +number.toFixed()
];

console.log(multiRound(number));