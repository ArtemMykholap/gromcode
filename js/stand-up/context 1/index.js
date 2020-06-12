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

// printMessage(50, 'Kyiv')
// let bindedPrintMessage = printMessage.bind(user);
// bindedPrintMessage(50, 'Kyiv')


// function myBind(func, context) {
//     return func.bind(context);
// }
// // test 
// let bindedPrintMessage = myBind(printMessage, user);
// bindedPrintMessage(50, 'Kyiv')



// // 2
// let user = {
//     name: 'Alex',
//     email: 'gmail.com',
//     printMessage(age, city) {
//         console.log(`Hello ${this.name}, email ${this.email}  age:${age}`, )
//     }

// }

// const bind = function(func, context, [arg1], [arg2]) {
//     var bindedArgs = [].slice.call(arguments, 2);
//     return function() {
//         var fnArgs = [].slice.call(arguments);
//         return fn.apply(context, bindedArgs.concat(funcnArgs));
//     };
// };
// var bindedSum = bind(sum, { sum: 10 }, 20, 30);
// bindedSum(40, 50, 60);

// input obj,func
// output func

// 1. add func into contex
// 2.return func
function myBind2(func, context) {
    return function(...args) {
        let copyContext = Object.assign({}, context);
        context.tempFunc = func;

        console.log(context);
        return context.tempFunc(...args);
    }
}

let bindedPrintMessage = myBind2(printMessage, user);

bindedPrintMessage(50, 'Kyiv')



// 2.return func
function myBindWithApply(func, context) {
    return function(...args) {
        const funcResult = func.apply(context, [...args]);
        return funcResult;
    }
}

let bindedPrintMessage = myBind2(printMessage, user);

bindedPrintMessage(50, 'Kyiv')

// const bind = (func, context, [...args]) =>
//     func.apply(context, [...args]);