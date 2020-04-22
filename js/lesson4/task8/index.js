let sum = 0;
for (let i = 0; i <= 1000; i++) {

    sum += i;
}
let j = sum / 1234;
let k = (j + '').split('.');
let result = Number(k[0]) > Number(k[1]) ? 'true' : 'false';
console.log(result);