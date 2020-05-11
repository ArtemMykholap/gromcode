const sumNumber = [1, 2, 3, 4];


const sum = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        return sumNumber.reduce(function(a, b) {
            return a + b;
        });


    };


}