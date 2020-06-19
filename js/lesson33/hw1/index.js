const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';
export const getTasksList = () =>
    fetch(baseUrl).then(response => response.json())
    // .then(result => console.log(result))

// getTasksList()

export const getTaskById = id =>
    fetch(`${baseUrl}/${id}`)
    .then(response => response.json())
    // .then(result => console.log(result))

// getTaskById(10)