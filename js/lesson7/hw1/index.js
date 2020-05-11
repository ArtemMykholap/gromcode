const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let container = [];

const squareArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        container = numbers.map(item => item * item);
        return container
    };


}