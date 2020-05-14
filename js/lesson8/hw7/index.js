const obj1 = {
    name: 'T1om',
    student: true,
};
const obj2 = {
    name: 'Tom',
    student: true,
};

let compareObjects = (obj1, obj2) => {
    const entriesArr1 = Object.entries(obj1).flat();
    const entriesArr2 = Object.entries(obj2).flat();
    // if (entriesArr1.length !== entriesArr2.length) {
    //     return false;
    // };
    return entriesArr1.toString() === entriesArr2.toString();

}