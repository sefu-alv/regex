// Creating a function that finds URLs in an array of strings
function findURL(textArray) {
    // Regular expression to find URLs
    const regex = /\b(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?\b/g;

    // Array to store found URLs
    const foundURLs = [];
    // Loop through each string in the array
    textArray.forEach(text => {
        // Find URLs in the string
        const URLs = text.match(regex);
        if (URLs) {
            // Pushing the array that are found into the foundURLs array
            foundURLs.push(...URLs);
        }
    });
    // Return the array of found URLs
    return foundURLs;
}

// Example array of strings that will be searched for URLs
const example = [
    'Visit my blog at http://www.example.com/~david',
    'Visit our website at http://www.nike.com',
    'Check out our website at https:www.adidas.com',
    'Visit our website at http://www.medium.com',
    'Contact me at http://sub.domain.co.jp/page?param=value.',
];

// Calling the function and storing the returned array of URLs
const foundURLs = findURL(example);

// Logging the URLs found
console.log("URLs found:");
// loop through the array of found URLs
foundURLs.forEach(url => {
    // logging each URL
    console.log(url);
});
