const getValueWithDelay = (value, delay) =>
    new Promise(resolve => {
        setTimeout(() => {
            console.log(value)
            resolve(value);
        }, delay)
    });

const asyncNum1 = getValueWithDelay(56, 1000)
const asyncNum3 = getValueWithDelay(undefined, 3000)
const asyncNum2 = getValueWithDelay('2', 2000)




const getSum = numbers =>
    numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0)

export const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Erroro('Can\'t calculate')))
};

asyncSum(asyncNum1, reject(new Error('err')), asyncNum3)
    .then(result => console.log(result))