export const user = {
    name: 'Tom',
    age: 17,
};

user.hobby = 'football';
user['married'] = false;
user['favorite music'] = 'rock';
user.address = {};
user.address.country = 'Ukraine';
user.address.building = '17';


console.log(user);

/* присвойте объекту свойство hobby со значением 'football' с помощью точки */

const anotherKey = 'married';
/* название свойства хранится в переменной anotherKey. Присвойте объекту такое свойство со значением false */

/* присвойте объекту свойство 'favorite music' со значением 'rock' */

/* присвойте объекту свойство 'address', которое будет пустым объкетом */

/* присвойте объекту в 'address' свойство 'country', со значением 'Ukraine' */

/* присвойте объекту в 'address' свойство 'building', со значением 17 */

/* выведите в консоль объект user */