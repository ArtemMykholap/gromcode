const numbers = 1;

function removeDuplicates(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const uniqArray = [...new Set(numbers)];


    return uniqArray;


}