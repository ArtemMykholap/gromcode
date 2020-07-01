import { createTask, getTasks } from './gateway.js'
import { renderTasks } from './render.js'


export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;
    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';
    const newTask = {
        text,
        done: false,
        createdDate: new Date().toISOString(),
    };
    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            renderTasks(newTasksList)
        })


}