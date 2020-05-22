// input:number
// output:number




export function createArrayOfFunctions(num) {
    let arr = []
    if (typeof(num) !== 'number') {
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