// const user = {
//     name: 'ANdrey',
//     sayHi() {
//         console.log(this);
//         console.log(`Hello ${this.name}`)
//     }
// }
// let func = user.sayHi;

// func()

function printMessage(age, city) {
    console.log(`Hello ${this.name}, email ${this.email}  age:${age}`, )
}

let user = {
    name: 'Alex',
    email: 'gmail.com',
}

// printMessage(50,'Kyiv')
// let bindedPrintMessage = printMessage.bind(user);
// bindedPrintMessage(50, 'Kyiv')


function myBind(func, context) {
    return func.bind(context);
}
// test 
let bindedPrintMessage = myBind(printMessage, user);
bindedPrintMessage(50, 'Kyiv')



// 2
let user = {
    name: 'Alex',
    email: 'gmail.com',
    printMessage(age, city) {
        console.log(`Hello ${this.name}, email ${this.email}  age:${age}`, )
    }

}