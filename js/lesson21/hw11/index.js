// 1.находим обїекті намбер
// 2.извелкаем данніе из атрибута
// возводим в квадрат
// создаем новій атрибут
// кладем туда вічесленное значение


const squaredNumbers = () => {
    const elementLi = [...document.querySelectorAll('.number')];
    let dataNumbers = elementLi.map(el => el.dataset.number);
    let sqrtNumbers = dataNumbers.map(el => el ** 2);
    return elementLi.map((el, index) => el.dataset.squaredNumber = sqrtNumbers[index]);



}

squaredNumbers();