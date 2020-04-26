function sum(from, to) {
    let result = 0;
    for (i = from; i <= to; i++) {
        result += i;
    }
    return result;
}


function compareSums(a, b, c, d) {
    let compare = sum(a, b) > sum(c, d) ? true : false;
    return compare;
}