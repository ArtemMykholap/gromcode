const numbers = [10, 21, 50, 113, 115, 1122];

function checker(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        let minNumber = Math.min.apply(null, numbers);
        let maxNumber = Math.max.apply(null, numbers);
        let sum = minNumber + maxNumber;
        let check = sum > 1000;

        console.log(check);

    }
}