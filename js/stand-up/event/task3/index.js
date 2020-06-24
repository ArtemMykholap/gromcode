// const buttons = document.querySelectorAll('.btn')

// const clickHandler = (event) => {
//     console.log(event.target.textContent)
// };
// buttons.forEach(el => el.addEventListener('click', clickHandler));


// const listItem = document.querySelectorAll('.list-item');
const list = document.querySelector('.list');
// const listItem = document.querySelector('.list-item');


clickHandler = (event) => {
    if (!event.target.classList.contains('list-item')) return;
    console.log(event.target.textContent)
};
list.addEventListener('click', clickHandler)
    // listItem.forEach(el => el.addEventListener('click', clickHandler));