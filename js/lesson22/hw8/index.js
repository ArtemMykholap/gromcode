const elem = document.querySelector('.task-status');

elem.addEventListener('change', (event) => {
    console.log(event.target.checked);
});