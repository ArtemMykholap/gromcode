// input: array of objects
// output: sorted array; 


let persons = [{
        name: 'John',
        phoneNumber: 333 - 33 - 33,
    },
    {
        name: 'Tom',
        phoneNumber: 444 - 33 - 33,
    },
    {
        name: 'Ed',
        phoneNumber: 777 - 33 - 33,
    },
    {
        name: 'Bed',
        phoneNumber: 666 - 33 - 33,
    },
]
const sortContacts = (persons, inquiry = true) => {
    if (!Array.isArray(persons)) { //если входящие данные-не массив
        return null;
    }
    if (!inquiry)
        return persons.sort((a, b) => b.name.localeCompare(a.name)); //при запросе фэилс- сортировка по убыванию


    return persons.sort((a, b) => a.name.localeCompare(b.name)); //сортировка по возрастанию

}
console.table(sortContacts(persons));