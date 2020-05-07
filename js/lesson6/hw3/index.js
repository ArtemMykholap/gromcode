const numbers = [10, 20, 50];

function checkSum(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        let sumOfNumbers = 0;
        for (let i = 0; i <= numbers.length - 1; i++) {
            sumOfNumbers += numbers[i];
        }

        let compare = sumOfNumbers > 100;
        return compare;
    }
}