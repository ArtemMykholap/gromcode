const text = 'abcdefggsdfkdsiuew8372479237uwer';
const n = 2;

const splitText = (text, n = 10) => {
    if (typeof text !== 'string') {
        return null;
    }
    let newArr = [];
    let len = 0;
    let startPosition = 0;
    while (true) {
        let chunk = text.substr(startPosition, n);
        if (chunk.length === 0) {
            break;
        }
        newArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += n;
    }
    return newArr.join('\n');
}
console.log(splitText(text, n));