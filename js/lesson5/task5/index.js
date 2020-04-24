function getSum(a, b) {
    let result = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}