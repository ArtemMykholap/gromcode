export const getTitleElement = () => {
        export const titleElem = document.querySelector('.title'); //ищем селектор по классу
        console.dir(titleElem); //выводим в консоль
        return titleElem;
    }
    // getTitleElement()

export const getInputElement = () => {
        const inputElem = document.querySelector('input[type="text"]'); //ищем селектор по типу
        console.dir(inputElem);
        return inputElem;
    }
    // getInputElement()