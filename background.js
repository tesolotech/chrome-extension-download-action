// Helpful detaild to generate and verify url patter with regex

// # To generate regex of url pattern
// ------ https://regex-generator.olafneumann.org/?sampleText=*.sharepoint.com&flags=i&onlyPatterns=false&matchWholeLine=true&selection=

// To do tesing only 
// ------ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test


// Testing url
// --- -- https://unsplash.com/photos/FLRgERkP1j0

// related URL
// ------ https://www.regextester.com/20

// URL pROPERTIES
// ------ https://www.techtarget.com/searchnetworking/definition/URL




const urlPatternRegex = [
    "*unsplash.com",
    "*google.com",
    "www.facebook.com*",
    "*flipcart.com*"
];

const domainRegex = [
    '^\*unsplash\.com$'
]

// { "*.sharepoint.com": '/^\*\.sharepoint\.com$/i' },
//     { "*unsplash.com": '^\*unsplash\.com$' },
//     { "*flipcart.com*": "^\*flipcart\.com\*$" },


function isURLMatchPatter(url) {
    let result = false;
    for (let i = 0; i < domainRegex.length; i++) {
        const regex = '/' + domainRegex[i] + '/'
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
