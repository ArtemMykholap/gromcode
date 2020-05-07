const numbers = [5, 7, 8, 10, 13];

function swap(numbers) {
    const [start, ...rest] = numbers;
    return [...rest, start];

}
console.log(swap(numbers));