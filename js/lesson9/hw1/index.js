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


const getCustomersList = customers => {

    let keysCustomers = Object.entries(customers);
    let keysCustomersArr = [...keysCustomers];

    const arr = [];

    for (let customer in keysCustomersArr) {
        // let object = Object.assign({}, keysCustomers);
        object = keysCustomersArr[customer][1];

        object.id = keysCustomersArr[customer][0];
        arr.push(object);
    }

    return arr.sort((a, b) => a.age - b.age);

}
console.log(getCustomersList(customers));