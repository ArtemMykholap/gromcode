export let timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {
        this.timerId = setInterval(() => {
            this.secondsPassed++;
            if (this.secondsPassed === 60) { //if seconds reach 60-nullfy and plus one minut
                this.secondsPassed = 0;
                this.minsPassed++;
            }
        }, 1000); //interval seconds
    },
    getTime() {
        return (`${this.minsPassed}:${this.secondsPassed < 10 ? '0' + this.secondsPassed:this.secondsPassed}`)

        // if (this.secondsPassed < 10) {
        //     console.log('0' + this.secondsPassed);
        // } else {
        //     console.log(this.secondsPassed);
        // }

    },
    stopTimer() {
        clearInterval(this.timerId);
    },
    resetTimer() { //nullfy
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}

// console.log(timer.getTime()
// )
// console.log(timer. stopTimer()
// )