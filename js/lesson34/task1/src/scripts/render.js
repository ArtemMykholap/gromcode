// import { tasks } from './tasks.js';
import { getTasks } from './storage.js'



export const listElem = document.querySelector('.list')

export const renderTasks = () => {

    const tasksList = getTasks();

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

renderTasks()