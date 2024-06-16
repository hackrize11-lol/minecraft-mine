// script.js

// Select all buttons
const buttons = document.querySelectorAll('button');

// Counter initialization
let count = 0;
const counterElement = document.getElementById('counter');


function updateCounter() {
    count++;
    counterElement.textContent = `Blocks Mined: ${count}`;
}


buttons.forEach(button => {
    button.addEventListener('click', function() {
       
        updateCounter();

    });
});
