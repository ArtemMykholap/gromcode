const reverseArray = numbers => {
    if (!Array.isArray(numbers)) {
        return null;
    } else {
        return numbers.slice().reverse();


    };


}