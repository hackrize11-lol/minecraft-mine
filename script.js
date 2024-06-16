// script.js

// Select all buttons
const buttons = document.querySelectorAll('button');

// Counter initialization
let count = 0;
const counterElement = document.getElementById('counter');

// Update counter function
function updateCounter() {
    count++;
    counterElement.textContent = `Blocks Mined: ${count}`;
}

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Call the updateCounter function when button is clicked
        updateCounter();
        
        // Disable the clicked button
        button.disabled = true;
    });
});
