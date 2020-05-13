const transaction = {
    currency: 'USD',
    value: 170,
    operation: 'sale',
    agent: {
        country: 'Ukraine',
        company: 'NYSE'
    },
    'operation time': 1584029990001
};
console.log(transaction.currency);
console.log(transaction['value']);
console.log(transaction['operation']);
console.log(transaction['agent']['company']);
console.log(transaction.agent.country);
console.log(transaction['operation time']);





/* выведите в консоль значение свойства 'currency' с помощью точки */

/* выведите в консоль значение свойства 'value' с помощью квадратных скобок */

const key = 'operation';
/* выведите в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */

/* выведите в консоль значение свойства 'company' используя квадратные скобки */

/* выведите в консоль значение свойства 'country' используя точку */

/* выведите в консоль значение свойства 'operation time' используя квадратные скобки */