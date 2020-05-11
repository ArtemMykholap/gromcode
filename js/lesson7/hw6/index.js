function sum(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((a, b) => a + b);
}
let numbers = [1, 2, 3, 4, 5];
console.log(sum(numbers));