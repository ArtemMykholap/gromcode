const len = [1, 2, 3, 4, 5, 6];


function createEmptyArray(len) {
    var newArray = [];
    for (var i = 0; i < len.length; i++) {
        newArray.push("");
    }
    return newArray;
}