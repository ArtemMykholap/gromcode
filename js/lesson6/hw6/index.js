const numbers = [10, 21, 50, 113, 115, 122];

function cloneArr(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        let clone = [];
        clone = numbers.slice(0);
        // for (let i = 0; i <= numbers.length - 1; i++) {
        //     clone.push(numbers[i]);
        // }
        return clone;
    }