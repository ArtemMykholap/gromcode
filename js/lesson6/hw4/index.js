const numbers = [10, 21, 50];
let delta = 7;

function increaseEvenEl(numbers, delta) {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        let increase = [];
        for (let i = 0; i <= numbers.length - 1; i++) {
            if (numbers[i] % 2 === 0) {
                increase.push(numbers[i] + delta);
            }
            if (numbers[i] % 2 === 1) {
                increase.push(numbers[i]);
            }

        }
        return increase;
    }
}