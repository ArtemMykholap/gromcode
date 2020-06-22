// import { tasks } from './tasks.js';
import { renderTasks, listElem } from './render.js';
import { setTasks, getTasks } from './storage.js'
import { createTask, getTasksList } from './tasksGateway';
// export const createBtn = document.querySelector('.btn');


function createTask(event) {
    const tasks = getTasks();

    const input = document.querySelector('.task-input');
    if (!input.value) { return }

    const newTask = {

        text: input.value,
        done: false,
        id: String(tasks.length + 1),
        date: new Date(),
        doneDate: undefined,
    }

    tasks.push()

    createTask(newTask)
        .then(() => getTasksList)
        .then(newTasksList => {
            setTasks(tasks)
        })

    input.value = '';

    renderTasks()

}

export { createTask }