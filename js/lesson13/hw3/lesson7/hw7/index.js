const names = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
const text = 'ya';

export const filterNames = (names, text) => {
    const arr = names.filter((name) => {
        return name.length > 5 && name.includes(text);

    })
    return arr;

}

console.log(filterNames(names, text));