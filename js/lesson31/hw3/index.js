export const delay = (value) => {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log('Done'))
        }, value)
    })
}
delay(3000)