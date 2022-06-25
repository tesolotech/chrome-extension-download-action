
chrome.downloads.onCreated.addListener(
    (data) => {

        console.log('Downlod-file-data', data);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }
)