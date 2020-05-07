function getSpecialNumbers(from, to) {
    let specialNumbers = [];
    for (i = from; i <= to; i++) {
        if (i % 3 === 0) {
            specialNumbers.push(i);
        }
    }
    return specialNumbers
}
const specialNumbers = getSpecialNumbers(10, 40);
console.log(specialNumbers);