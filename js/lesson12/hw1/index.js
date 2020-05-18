// input:str
// output:str
// деструтктурируем строку.
// делаем реверс массива.
// соединяем


let str = 'abcdef'

// console.log(str)
const reverseString = str => {
        const reverse = [...str].reverse();
        return reverse.join('');
    }
    // console.log(reverseString(str));