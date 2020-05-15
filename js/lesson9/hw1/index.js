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

    const keysCustomers = Object.entries(customers);
    const arr = [];

    for (let customer in keysCustomers) {
        let object = Object.assign({}, keysCustomers);

        let objectNew = object[customer][1];

        objectNew.id = object[customer][0];
        arr.push(objectNew);
    }

    return arr.sort((a, b) => a.age - b.age);

}
console.log(getCustomersList(customers));