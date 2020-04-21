let m = 10;
let n = 50;
let result = 0;
for (let i = 10; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    } else {
        if (i % 4 !== 0 && i % 2 === 0) {
            result += i;
        }
        if (i % 3 === 0) {
            result -= i;
        }
        if (i % 4 === 0) {
            result *= i;
        }
    }
    result = result;
}