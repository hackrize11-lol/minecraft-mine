// Counter initialization
let blocksMined = 0;
let blocksChecked = 0;

// Function to update counters
function updateCounters() {
    document.getElementById('blocksMined').textContent = `Blocks Mined: ${blocksMined}`;
}

function updateCheckedCounter() {
    document.getElementById('blocksChecked').textContent = `Blocks Checked: ${blocksChecked}`;
}

// Function to handle mining a block
function mineBlock(buttonId) {
    const buttonIndex = parseInt(buttonId.replace('button', ''), 10);
    const gridSize = 20; // Adjust based on your grid size

    // Simulate mining the block (for demonstration)
    console.log(`Mining block ${buttonId}`);

    // Update counters
    blocksMined++;
    updateCounters();

    // Check adjacent blocks
    checkAdjacentBlocks(buttonIndex);
}

// Function to check adjacent blocks
function checkAdjacentBlocks(index) {
    const gridColumns = 20; // Adjust based on your grid columns
    const upIndex = index - gridColumns;
    const downIndex = index + gridColumns;
    const leftIndex = index - 1;
    const rightIndex = index + 1;

    const adjacentButtonIndices = [upIndex, downIndex, leftIndex, rightIndex];

    adjacentButtonIndices.forEach(adjIndex => {
        const adjacentButtonId = `button${adjIndex}`;
        const adjacentButtonElement = document.getElementById(adjacentButtonId);

        // Check if the adjacent button exists and hasn't been checked yet
        if (adjacentButtonElement && !adjacentButtonElement.classList.contains('checked')) {
            console.log(`Checking adjacent button ${adjacentButtonId}`);
            adjacentButtonElement.classList.add('checked');

            // Simulate interaction with the adjacent button (for demonstration)
            console.log(`Interacting with adjacent button ${adjacentButtonId}`);

            // Update counters
            blocksChecked++;
            updateCheckedCounter();

            // Recursively check its adjacent blocks if needed
            checkAdjacentBlocks(adjIndex);
        }
    });
}

// Add event listener to each block button
document.querySelectorAll('button.grid-item').forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = button.id;
        mineBlock(buttonId);
        button.disabled = true; // Disable the button after mining (for demonstration)
    });
});
