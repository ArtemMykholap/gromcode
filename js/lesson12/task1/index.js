let str = 1 + 2

const calc = expression => {
    const [a, operator, b] = expression.split(' ');
    let result;

    switch (operator) {
        case '+':
            result = Number(a) + +b;
            break

        case '-':
            result = a - b;
            break;

        case '*':
            result = a * b;
            break;

        case '/':
            result = a / b;
            break;
    }
    return `${expression}=${result}`;
};

console.log(calc('6 - 9'));