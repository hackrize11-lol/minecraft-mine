// script.js

// Select all elements with IDs starting with 'button'
const buttons = document.querySelectorAll('button');

// Counter initialization
let count = 0;
const counterElement = document.getElementById('counter');

// Update counter function
function updateCounter() {
    count++;
    counterElement.textContent = blocks mined:${count};
}

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Call the updateCounter function when button is clicked
        updateCounter();
        
    });
});
