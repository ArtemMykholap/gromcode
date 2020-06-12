const tasks = [{
        text: 'Hello',
        done: false,
        id: '1',
        date: new Date('2019, 1,10'),
        doneDate: new Date(),
    },
    {
        text: 'go to the gym',
        done: true,
        id: '2',
        date: new Date('2019, 1,12'),
        doneDate: new Date(),
    },
    {
        text: 'lunch',
        done: true,
        id: '3',
        date: new Date('2019, 1,11'),
        doneDate: new Date(),
    },
    {
        text: 'exit',
        done: false,
        id: '4',
        date: new Date('2019, 1,14'),
        doneDate: new Date(),
    },
    {
        text: 'quit',
        done: false,
        id: '5',
        date: new Date('2019, 2,10'),
        doneDate: new Date(),
    },

];

const listElem = document.querySelector('.list')

const renderTasks = tasksList => {
    const listElem = document.querySelector('.list')


    listElem.innerHTML = '';
    const tasksElems = tasksList
        .slice()
        .sort((a, b) => a.done - b.done)
        .sort((a, b) => {
            if (a.done - b.done !== 0) { return a.done - b.done; }
            if (a.done === true) { return new Date(b.doneDate) - new Date(a.doneDate); }
            return new Date(b.date) - new Date(a.date);
        })
        .map((task) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');


            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');

            checkbox.setAttribute('data-task-id', task.id);
            checkbox.checked = task.done;
            checkbox.classList.add('list__item-checkbox');
            if (task.done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, task.text);
            return listItemElem;
        });
    // localStorage.setItem('tasksList', JSON.stringify(tasksList))

    listElem.append(...tasksElems);
};
renderTasks(tasks)



listElem.addEventListener('click', updateTask);

function updateTask(event) {

    const classes = event.target.classList;
    if (!classes.contains('list__item-checkbox'))
        return;
    const tar = event.target
    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    task.done = tar.checked
    task.doneDate = new Date()

    renderTasks(tasks)

}



const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);

function createTask(event) {

    const input = document.querySelector('.task-input');
    if (!input.value) { return }


    tasks.push({

        text: input.value,
        done: false,
        id: String(tasks.length + 1),
        date: new Date(),
        doneDate: undefined,
    })

    input.value = '';
    renderTasks(tasks)

}
// console.log(tasks)