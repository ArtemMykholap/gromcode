import { tasks } from './tasks.js';
// import { renderTasks, listElem } from './render.js';
function getTasks() {
    const localTasks = localStorage.getItem('tasksList');
    return localTasks ? JSON.parse(localTasks) : tasks;
}

function setTasks(tasks) {
    localStorage.setItem('tasksList', JSON.stringify(tasks))

}
export { getTasks, setTasks }