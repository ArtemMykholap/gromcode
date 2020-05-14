const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },

}


const getCustomersList = customers => {
    const keysCustomers = Object.keys(customers);


    customers['customer-id-1']['id'] = keysCustomers[1];
    customers['customer-id-2']['id'] = keysCustomers[0];

    const objectGeneral = Object.entries(customers);
    objectGeneral[0].shift();
    objectGeneral[1].shift();
    const objectsMerge = objectGeneral[0].concat(objectGeneral[1]);


    return objectsMerge.sort((a, b) => a.age > b.age ? 1 : -1);


}
getCustomersList(customers)