const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology')
    console.dir(elementsList);
    return elementsList;
}
getItemsList()

const getItemsArray = () => {
    const elementsArray = Array.from(document.querySelectorAll('.tool')); //находим все селекторы и преобразуем в массив

    console.dir(elementsArray);
    return elementsArray;
}
getItemsArray()
export {
    getItemsArray,
    getItemsList
}