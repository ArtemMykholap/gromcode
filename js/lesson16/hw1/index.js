// input:number
// output:number




export function createArrayOfFunctions(num) {
    let arr = []
    if (num === undefined) {
        return arr;
    } else if (typeof(num) !== 'number') {
        return null;
    } else {
        for (let i = 0; i < num; i++) {
            arr[i] = function() {

                return i;
            }
        }
        return arr;
    }
}