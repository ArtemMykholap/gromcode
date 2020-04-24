function getPrimes(n) {


    for (let i = 1; i <= n; i++) {
        let primeNumber = true;

        for (let j = 2; j * 2 <= i; j++) {

            if (i % j === 0) {
                primeNumber = false;
                break;
            }

        }
        if (primeNumber && i > 1) {

            console.log(i);

        }


    }
}