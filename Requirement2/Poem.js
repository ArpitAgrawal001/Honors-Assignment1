// Imported the 'fs' module for working with the file system
const fs = require('fs');

// Defined a function that reads the content of a poem from a file and prints it
function printPoemContent() {
    fs.readFile('poem.txt', 'utf8', // The 'utf8' argument indicates that the file contains text data
    (err, data) => { // This is a callback function that will be called when the file is read
        if (err) {// If there's an error while reading the file
            console.error('Error reading the file:', err);// Print the error message
            return; // Exit the function
        }
        // If the file is read successfully
        console.log(data); // Print the content of the file
    });
}

// Call the 'printPoemContent' function to print the content of 'poem.txt'
printPoemContent();
