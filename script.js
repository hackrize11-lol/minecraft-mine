// Select all buttons
const buttons = document.querySelectorAll('button.grid-item');

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
    const gridColumns = 20; // Adjust based on your grid columns

    const upIndex = buttonIndex - gridColumns;
    const downIndex = buttonIndex + gridColumns;
    const leftIndex = buttonIndex - 1;
    const rightIndex = buttonIndex + 1;

    // Check and disable nearby buttons
    disableIfChecked(upIndex);
    disableIfChecked(downIndex);
    disableIfChecked(leftIndex);
    disableIfChecked(rightIndex);

    function disableIfChecked(index) {
        const nearbyButton = document.getElementById(`button${index}`);
        if (nearbyButton && !nearbyButton.disabled) {
            checkCounts[index] = (checkCounts[index] || 0) + 1;
            if (checkCounts[index] >= 2) {
                nearbyButton.disabled = true;
            }
            updateCheckedCounter();
        }
    }
}

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = button.id;

        // Update counters and clicked buttons list
        updateCounters();
        updateCheckedCounter();
        updateClickedButtons(buttonId);

        // Disable the clicked button
        button.disabled = true;

        // Check nearby buttons
        checkNearbyButtons(buttonId);
    });
});
