import { renderTasks } from './render.js'
import { getTasks } from './gateway.js'

// renderTasks()

getTasks()
    .then(tasks => renderTasks(tasks))