// input:number;
// output:number;


let memory = 0;



function add(number) {
    return memory += number;
}

function decrease(number) {
    return memory -= number;
}

function reset(number) {
    return memory = 0;
}

function getMemo() {
    return memory;
}


// let total = calc();
// total.add(5);

// let totalDec=calc();
// totalDec.decrease(3);

export { add, decrease, reset, getMemo }