export const delay = value => new Promise((resolve) =>
        setTimeout(() => resolve(), value))
    .then(() => console.log('Done'))


// delay(3000)