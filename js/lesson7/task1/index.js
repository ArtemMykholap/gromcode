const getSpecialNumbers = numbers => {
        let SpecialNumbers = [];

        function checkIfSpecialNumber(num) {
            if (num % 3 === 0) {
                SpecialNumbers.push(num);
            }
        }
        numbers.forEach(checkIfSpecialNumber);
        return SpecialNumbers;
    }
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // console.log(getSpecialNumbers(arr));