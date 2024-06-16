// script.js

// Select all buttons
const buttons = document.querySelectorAll('button');

// Counter initialization
let countMined = 0;
let countChecked = 0;
const counterMinedElement = document.getElementById('counterMined');
const counterCheckedElement = document.getElementById('counterChecked');
const clickedButtonsElement = document.getElementById('clickedButtons');

// Array to store clicked button IDs
let clickedButtons = [];

// Object to store check counts for each button
let checkCounts = {};

// Update counters function
function updateCounters() {
    countMined++;
    counterMinedElement.textContent = `Blocks Mined: ${countMined}`;
}

function updateCheckedCounter() {
    countChecked++;
    counterCheckedElement.textContent = `Blocks Checked: ${countChecked}`;
}

function updateClickedButtons(buttonId) {
    clickedButtons.push(buttonId);
    clickedButtonsElement.textContent = `Clicked Buttons: ${clickedButtons.join(', ')}`;
}

function checkNearbyButtons(buttonId) {
    const buttonIndex = parseInt(buttonId.replace('button', ''));
    const gridSize = 20; // Adjust based on your actual grid size
    const nearbyIndices = [
        buttonIndex - gridSize, // up
        buttonIndex + gridSize, // down
        buttonIndex - 1,  // left
        buttonIndex + 1   // right
    ];

    nearbyIndices.forEach(index => {
        const nearbyButton = document.getElementById(`button${index}`);
        if (nearbyButton && !nearbyButton.disabled) {
            // Update check count for the nearby button
            checkCounts[index] = (checkCounts[index] || 0) + 1;

            // Disable button if it has been checked twice
            if (checkCounts[index] >= 2) {
                nearbyButton.disabled = true;
            }

            updateCheckedCounter();
        }
    });
}

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = button.id;

        // Call the updateCounters function when button is clicked
        updateCounters();
        updateCheckedCounter();
        updateClickedButtons(buttonId);
        
        // Disable the clicked button
        button.disabled = true;

        // Check nearby buttons
        checkNearbyButtons(buttonId);
    });
});
