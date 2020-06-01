// convert the object to array of array
// 2. map.entries to the array object
function getCustomersList(obj) {
    return Object.entries(obj)
        .map(([id, customer]) => ({ id, ...customer }))
        .sort((a, b) => a.age - b.age)
        // console.log(entries)
        // entries.map(entry => {
        //     let id = entry[0];
        //     let object = entry[1];
        //     console.log(id);

    //     let res = {...object, id };
    //     console.log(res);
    //     return res
}




const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
};


getCustomersList(customers);