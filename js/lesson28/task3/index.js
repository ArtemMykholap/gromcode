// const sum = (a, b) => a + b;

const mult = a => b => a * b;

// const result = mult(5)(4)
// console.log(result);

const twice = (a) => mult(a)(2);
// const result = twice(7)
// console.log(result);



const triple = (a) => mult(a)(3);
// const result = triple(9)
// console.log(result);
export { triple, twice, mult }