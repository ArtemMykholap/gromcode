var arr = [1, 2, 3, 4, 5, 6, 7, 8];
let delta = 20;


const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) return null;

    let star = arr.map((even) => {

        if (even % 2 == 0) {

            return even + delta;
        }
        return even;

    });
    return star;

}