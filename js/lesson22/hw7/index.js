const elem = document.querySelector('.text-input');

elem.addEventListener('click', () => {
    console.log(event.target.value);
});