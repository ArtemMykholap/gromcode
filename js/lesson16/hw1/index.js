// input:number
// output:number


let arr = []

function createArrayOfFunctions(num) {
    if (typeof num === NaN) {
        return null;
    } else if (!num) {
        return arr;
    }
    for (let i = 0; i < num; i++) {
        arr[i] = function() {

            return i
        }
    }
    return arr
}


console.log(createArrayOfFunctions(100)[20]());