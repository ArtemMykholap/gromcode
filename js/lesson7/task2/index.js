const sortDec = numbers => {
    numbers.sort((a, b) => b - a);
    return numbers;
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sortDec(arr));