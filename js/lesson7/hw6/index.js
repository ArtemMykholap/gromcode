const sumNumber = [1, 2, 3, 4, 20, 40];


const sum = numbers => {

    if (!Array.isArray(numbers)) {
        return null;
    }

    const result = sumNumber.reduce((a, b) => {
        return a + b;
    });

    return result;
};