// input:object
// output:array

// algo
// 1.преобразуем объект в массив в массив объектов
// 2. сделаем плоским
// 3. переберем объекты массива для вывода значения нэйм



const rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },

    ],
    room2: [
        { name: 'room2 name1' },

    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },

    ],

};

const getPeople = object => {
    let arr = Object.values(object).flat().map(object => object.name);
    return arr;
}
let result = getPeople(rooms);
console.log(result);