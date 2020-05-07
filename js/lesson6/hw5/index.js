const numbers = [10, 21, 50, 113, 115, 122];

function reverseArray(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    let reverse = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reverse.push(numbers[i]);
    }
    console.log(reverse);

}