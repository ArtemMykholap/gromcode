const obj = {
    'Tom': 19,
    'John Doe': 21,
    'Eddy': 17,
};


const getAdults = obj => {
    let searchPerson = {};
    for (key in obj) {
        if (obj[key] >= 18) {
            searchPerson[key] = obj[key]
        }
    }
    return searchPerson;
}