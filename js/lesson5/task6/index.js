function getPrime(n) {
    for (let i = 1; i <= n; i++) {
        for (let k = 2; k < i; k++) {

            if (i % k === 0) { continue; } else {

                console.log(i);

            }


        }
    }
}