const commitsUrl = 'https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository';

const getCommits = () =>
    fetch(commitsUrl).then(response => response.json())
    .then(console.log());

getCommits()