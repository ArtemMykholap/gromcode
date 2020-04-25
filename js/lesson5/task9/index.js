function findDivCount(a, b, n) {
    let emptyArray = [];

    for (let i = a; i <= b; i++) {

        if (i % n === 0) {

            emptyArray.push(i);

        }

    }
    console.log(emptyArray.length);

}