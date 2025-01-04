const fs = require('fs');

// Define the content to be written to the file
const WritingFile = 'This is the content to be written to the file.';

fs.writeFile('output.txt', WritingFile, (err) => {
    if (err) {
        console.log('Error Occurred:', err);
    } else {
        console.log('Data written to file successfully');
    }
});
