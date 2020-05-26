// input: function
// output: func



function saveCalls(memoryFunction) {

    withMemory.calls = [];

    function withMemory(...argums) {
        withMemory.calls.push(argums);
        // console.log( withMemory.calls.push(args))
        return memoryFunction.call(this, arguments);
    }



    return withMemory;
};


function test(a, b) {
    return Math.sqrt(a * a + b * b);
};
const testWithMemory = saveCalls(test);
testWithMemory(32, 7);
testWithMemory(4, 'ae');
testWithMemory(4, NaN);
testWithMemory(9, 1);
console.table(testWithMemory.calls);

const user = {
    name: 'John',
    sayHi() {
        return this.name;
    }
};

const methodWithMemory = saveCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'

console.log(methodWithMemory.calls) // [ [] ]