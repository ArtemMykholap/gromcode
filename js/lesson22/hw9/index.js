// const elem = document.querySelectorAll('.pagination__page');
// const handleClick = (event) => {
//     console.log(event.target.dataset.pageNumber);
// };
// [...elem].map(el => el.addEventListener('click', handleClick));
const tasks = [
    { text: 'Buy milk', done: false, id: 1 },
    { text: 'Pick up Tom from airport', done: false, id: 2 },
    { text: 'Visit party', done: true, id: 3 },
    { text: 'Visit doctor', done: false, id: 4 },
    { text: 'Buy meat', done: true, id: 5 },
];

const btnCreate = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input')
const listElem = document.querySelector('.list');
const listElements = document.querySelectorAll('.list__item input');

const createHandler = () => {
    if (inputElem.value == '') return;

    tasks.push({
        text: inputElem.value,
        done: false,
        id: tasks.length + 1,
    });

    inputElem.value = '';
    listElem.innerHTML = '';
    renderListItems(tasks);
}

btnCreate.addEventListener('click', createHandler)

const renderListItems = tasks => {

    const listElem = document.querySelector('.list');

    const listItemsElems = tasks
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = '${id}';
            const checkboxElem = document.createElement('input');
            checkboxElem.addEventListener('click', () => {
                if (checkboxElem.checked) {
                    checkboxElem.parentElement.classList.add('list__item_done');
                } else {
                    checkboxElem.parentElement.classList.remove('list__item_done');
                }
            });

            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem
        })


    listElem.append(...listItemsElems);
}

renderListItems(tasks);