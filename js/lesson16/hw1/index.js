// input:number
// output:number




function createArrayOfFunctions(num) {
    let arr = []
    if (typeof num === NaN) {
        return null;
    } else if (num === undefined) {
        return arr;
    } else {
        for (let i = 0; i < num; i++) {
            arr[i] = function() {

                return i;
            }
        }
        return arr;
    }
}
export { createArrayOfFunctions }

console.log(createArrayOfFunctions(100)[20]());