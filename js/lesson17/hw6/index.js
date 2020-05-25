export function calculator(a, b) {
    switch (this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return NaN;
    }
}




function multiplier(a, b) {

    const functMult = calculator.bind({ operation: '*' });
    return functMult(a, b)
}
// console.log(multiplier(3, 7))



function summator(a, b) {
    const funcSum = calculator.bind({ operation: '+' });
    return funcSum(a, b)
}
// console.log(summator(3, 7))



function twice(a) {
    //  const funcTwice=calculator.bind({operation:'*'});
    return a * 2
}
// console.log(twice(3))





/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
// ...your code here

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
// ...your code here

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
// ...your code here