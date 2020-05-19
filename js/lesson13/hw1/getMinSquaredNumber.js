// input:array;
// output:number;
// приведем каждый элемент массива к модулю
//возведем в квадрат
// выберем минимальный элемент посредством деструктуризации.



// arr = [1, -3, 2.5, 4];
// console.log(arr.map(el=>Math.abs(el*el)))
export const getMinSquaredNumber = arr => {
        if (!Array.isArray(arr) || arr.length === 0) { return null }
        let a = arr.map(el => Math.abs(el * el));
        // console.log(a)
        let b = Math.min(...a);
        // console.log(b)
        return b;
    }
    // console.log( getMinSquaredNumber(arr))