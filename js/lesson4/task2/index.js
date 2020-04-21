let m = 10;
const n = 20;
let result = 1;
for (let i = 10; i <= n; i++) {
    if (i % 2 === 1) {
        result *= i;

    }
}
console.log('Result: ' + result);