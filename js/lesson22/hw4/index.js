const textElem = document.querySelector('.search__btn');

const textElem2 = document.querySelector('.search__input')
textElem.addEventListener('click', () => {
    console.log(textElem2.value)
})