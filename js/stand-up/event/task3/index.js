const list = document.querySelector('.list');
clickHandler = (event) => {
    if (!event.target.classList.contains('list-item')) return;
    console.log(event.target.innerHTML)
};
list.addEventListener('click', clickHandler)