const numbers = [10, 10, 20, 50, 33, 21, 21, 27];

function uniqueCount(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    const unique = [...new Set(numbers)]
    const count = unique.length;
    return count;
}