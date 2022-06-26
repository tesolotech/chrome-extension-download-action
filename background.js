
chrome.downloads.onCreated.addListener(
    (data) => {

        console.log('Downlod-file-data', data);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log('json-data', json))
    }
)







// let isAllow = false;


// chrome.storage.sync.set({ key: false });

// chrome.storage.sync.get(['key'], function (result) {
//     // console.log('Value currently is ' + result.key);
//     isAllow = result.key;
// });


// if (isAllow) {

// chrome.downloads.onCreated.addListener(
//     (data) => {

//         console.log('Downlod-file-data', data);
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }
// )
// }

