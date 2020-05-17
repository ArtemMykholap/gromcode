// input:String
// output:array of String



const text = 'abcdefggsdfkdsiuew8372479237uwer';
let n = 6;

const splitString = (text, n = 10) => {
    if (typeof text !== 'string') {
        return null;
    }
    let newArr = [];
    let startPosition = 0;
    while (true) {
        let chunk = text.substr(startPosition, n);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < n) {
            chunk = chunk + '.'.repeat(n - chunk.length);
        }
        newArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += n;
    }
    return newArr.join('\n');
}
console.log(splitString(text, n));