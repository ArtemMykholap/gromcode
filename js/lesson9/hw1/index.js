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
    let keysCustomers = Object.assign({}, customers);
    keysCustomers = Object.entries(customers);
    const arr = [];

    for (let customer in keysCustomers) {
        const object = keysCustomers[customer][1];

        object.id = keysCustomers[customer][0];
        arr.push(object);
    }

    return arr.sort((a, b) => a.age - b.age);

}
console.log(getCustomersList(customers));