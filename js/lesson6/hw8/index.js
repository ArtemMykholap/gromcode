let numbers = [15, 27, 18, 24, 13];


function sortAsc(numbers) {
    const sort = a => {
        let len = a.length - 1;

        for (let i = 0; i < len; i++)

            for (let e = 0; e < len - i; e++)

        if (a[e] > a[e + 1])

            [a[e], a[e + 1]] = [a[e + 1], a[e]];

        return a;
    };

    console.log(sort(numbers));
}