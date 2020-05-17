//input:array
//output:number

let arr = [7, 10, -11, 40, -23, -470];
const getMaxAbsoluteNumber = arr => {
    if ((!Array.isArray(arr)) || (arr.length === 0)) { return null };
    const absoluteValues = arr.map(num => Math.abs(num));
    const max = Math.max(...absoluteValues);
    return max;

}


console.log(getMaxAbsoluteNumber(arr));