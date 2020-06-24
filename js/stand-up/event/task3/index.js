// const buttons = document.querySelectorAll('.btn')

// const clickHandler = (event) => {
//     console.log(event.target.textContent)
// };
// buttons.forEach(el => el.addEventListener('click', clickHandler));


// const listItem = document.querySelectorAll('.list-item');
const list = document.querySelector('.list');
clickHandler = (event) => {
    if (event.target.tagName != 'LI') return;
    console.log(event.target.textContent)
};
list.addEventListener('click', clickHandler)
    // listItem.forEach(el => el.addEventListener('click', clickHandler));