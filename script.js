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


function updateClickedButtons(buttonId) {
    const buttonIdNum = parseInt(buttonId.replace('button', ''), 10);
    const buttonIdsToCheck = [
        buttonIdNum,
        buttonIdNum + 20,
        buttonIdNum - 1,
        buttonIdNum + 1,
        buttonIdNum - 20
    ];

    buttonIdsToCheck.forEach(id => {
        const newButtonId = `button${id}`;
        if (!clickedButtons.includes(newButtonId)) {
            clickedButtons.push(newButtonId);
            checkedBlocks++;
            console.log(`Button with ID ${newButtonId} clicked. Current state of clickedButtons:`, clickedButtons);
            console.log(`Checked Blocks: ${buttonIdsToCheck}`);
        }
    });
}
// Add event listener to each button
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        updateClickedButtons(button.id);
        updateCounters();
        updateCheckedCounters()
        button.disable= true;
        
    });
});
