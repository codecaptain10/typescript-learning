let message1: string = 'Hello World TypeScript in Web Browser';

//Create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message1;

//add the heading the document
document.body.appendChild(heading);