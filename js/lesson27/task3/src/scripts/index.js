import { tasks } from './tasks.js';
import { renderTasks, listElem } from './render.js';
import { updateTask } from './update.js';
import { createTask } from './createTask.js';


listElem.addEventListener('click', updateTask);
const createBtn = document.querySelector('.btn');
createBtn.addEventListener('click', createTask);