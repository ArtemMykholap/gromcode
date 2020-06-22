const baseUrl = 'https://crudcrud.com/api/c03b4e97369f4177a7fb6233244c6406/tasks';
export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
};

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
};