const jet = [2, 3, 4];


function squareArray(jet) {
    if (!Array.isArray(jet)) {
        return null;
    } else {
        let square = [];
        for (let i = 0; i < jet.length; i++) {

            square.push(jet[i] * jet[i]);
        }
        console.log(square);
    }

}