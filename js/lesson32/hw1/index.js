export const makePromise = number => new Promise((resolve) =>
        resolve(number))
    .then(number => {
        console.log(number);
    });