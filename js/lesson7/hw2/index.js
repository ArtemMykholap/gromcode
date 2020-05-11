const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const reverseArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        const container = numbers.reverse();
        return container;
    };


}