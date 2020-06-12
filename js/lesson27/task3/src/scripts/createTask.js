// import { tasks } from './tasks.js';
import { renderTasks, listElem } from './render.js';
import { setTasks, getTasks } from './storage.js'
// export const createBtn = document.querySelector('.btn');


function createTask(event) {
    const tasks = getTasks();

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
    setTasks(tasks)
    renderTasks()

}
export { createTask }