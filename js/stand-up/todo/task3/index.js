import { renderTasks } from './render.js'
import { getTasks } from './gateway.js'
import { onCreateTask } from './createTask.js'

// renderTasks()

getTasks()
    .then(tasks => renderTasks(tasks));

const createBtnElem = document.querySelector('.btn');
createBtnElem.addEventListener('click', onCreateTask);