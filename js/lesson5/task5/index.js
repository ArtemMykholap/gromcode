/*function getSum(a, b) {
    let result = 0;

    for (i < a; i < b; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}*/
function simpleNumbers(start, end) {

    for (var i = start, flag = false; i <= end; i++, flag = 0) {
        for (var j = 2; j * 2 <= i; j++) {
            if (i % j == 0) {
                flag = true;
                break;
            }
        }
        if (!flag)
            res[res.length] = i;
    }
    return res;
}
console.log(simpleNumbers(3, 20));