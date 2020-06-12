// import { tasks } from './tasks.js';
import { renderTasks, listElem } from './render.js';
import { setTasks, getTasks } from './storage.js'
// import { createTask } from './createTask.js';


function updateTask(event) {
    const tasks = getTasks();
    const classes = event.target.classList;
    if (!classes.contains('list__item-checkbox'))
        return;
    const tar = event.target
    const task = tasks.find(task => task.id === event.target.dataset.taskId);
    task.done = tar.checked
    task.doneDate = new Date()
    setTasks(tasks)
    renderTasks()
}
export { updateTask };