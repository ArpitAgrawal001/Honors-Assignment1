// Imported the 'readFileSync' function from the 'fs' module
import { readFileSync } from 'fs';

// Function to print the content of poem.txt synchronously
function printPoemContent() {
    try {
        // Reading the file 'poem.txt' synchronously and store its content in the 'data' variable
        const data = readFileSync('poem.txt', 'utf8');

        // Printing the content of 'data' to the console
        console.log(data);
    } 
    // Catching errors that might occur during file reading
    catch (err) {
        // Printing an error message to the console if an error occurs
        console.error('Error reading the file:', err);
    }
}

// Calling the function to print the poem content
printPoemContent();
