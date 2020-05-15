// input:Object
// output:array

// 1.преобразуем объект в массив массивов
// 2.создать новый объект
// 3. деструктурировать и присвоить значения полю айди сортировать
// 4. сортировать массив и вернуть




let customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17,
    },
    'customer-id-3': {
        name: 'Tom',
        age: 20,
    }
};

function getCustomersList(users) {
    // console.log(users);

    return Object.entries(users)
        .map(([id, customer]) => ({ id, ...customer }))
        .sort((fisrt, second) => fisrt.age - second.age)
}

console.log(getCustomersList(customers));