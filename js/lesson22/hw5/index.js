const click = document.querySelector('.single-use-btn');

const handler = () => {
    console.log('clicked')
    click.removeEventListener('click', handler);
};
click.addEventListener('click', handler);