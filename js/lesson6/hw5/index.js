const numbers = [10, 21, 50, 113, 115, 122];

function reverseArray(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        let reverse = [];
        reverse = numbers.reverse();
        console.log(reverse);
    }
}