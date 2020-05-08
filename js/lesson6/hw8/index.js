let numbers = [15, 27, 18, 24, 13];









function sortDesc(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    for (let i = 0,
            len = numbers.length - 1; i < len; i++) {
        for (let j = 0, lenJ = len - i; j < lenJ; j++) {
            if (numbers[j] > numbers[j - 1]) {
                let trim = numbers[j];
                numbers[j] = numbers[j - 1];
                numbers[j - 1] = trim;
            }
        }
    }
    return numbers;
}

function sortAsc(numbers) {
    if (!Array.isArray(numbers)) {
        return null;
    }
    for (let i = 0,
            len = numbers.length - 1; i < len; i++) {
        for (let j = 0, lenJ = len - i; j < lenJ; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let trim = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = trim;

            }
        }
    }

    return numbers;
}