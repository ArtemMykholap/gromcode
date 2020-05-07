const numbers = [5, 7, 8, 10, 13];

function getSum(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        let sumOfNumbers = 0;
        for (let i = 0; i <= numbers.length - 1; i++) {
            sumOfNumbers += numbers[i];
        }
        return (sumOfNumbers);
    }

}
const sumOfElements = getSum(numbers);
console.log(sumOfElements);