const text = 'I want to ride my bicycle, bicycle, bicycle';
const part = 'bi';
const countOccurences = (text, part) => {
    if (part.length === 0) { return null }

    return text.split(part).length - 1
}
console.log(countOccurences(text, part));