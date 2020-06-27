const serverUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks'


export const createTask = taskData => {
    return fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}



const updateTask = taskData => {

}



const deleteTask = (taskId) => {

}



export const getTasks = () => {
    return fetch(serverUrl)
        .then(response => response.json())
        // .then(data => console.log(data))
}