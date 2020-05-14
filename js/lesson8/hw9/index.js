const arr = ['name', 'student'];
const object = {
    name: 'Tom',
    student: true,
    age: 17,
};

const pickProps = (object, arr) => {
    let newObject = {};
    for (let key in object) {
        for (let j in arr) {
            if (j === key) {
                newObject[key] = object[key];
            }
        }

    }
    return newObject;
}