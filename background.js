
const urlPatternRegex = [
    "*unsplash.com",
    "*google.com",
    "www.facebook.com*",
    "*flipcart.com*"
];

function isURLMatchPatter(url) {
    let result = false;
    for (let i = 0; i < urlPatternRegex.length; i++) {
        const regex = '/' + urlPatternRegex[i] + '/'
        const urlPattern = new RegExp(regex)
        result = urlPattern.test(url);
        if (result) {
            return result;
        }
    }
    return result;
}


chrome.downloads.onDeterminingFilename.addListener(
    (data) => {

        console.log('Downlod-file-data', data);
        if (isURLMatchPatter(data['url'])) { // referrer
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => console.log('json-data', json))
        }

    }
)
