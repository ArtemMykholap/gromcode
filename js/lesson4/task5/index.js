let m = 10;
let n = 50;
let result = 0;
for (let i = 10; i <= 50; i++) {
    if (i % 4 !== 0 && i % 2 === 0) {
        result += i;
        i++;
    }
    if (i % 3 === 0) {
        result -= i;
        i++;
    }
    if (i % 4 === 0) {
        result *= i;
        i++;
    }

    if (i % 5 === 0) {
        continue;
    }
}
console.log(result);





/*let m = 10;
let n = 50;
let result = 0;
for (let i = 10; i <= 50; i++) {
    if (i % 4 !== 0 && i % 2 === 0);
        result += i;

}
console.log(result);*/