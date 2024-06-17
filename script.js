// Counter initialization
let blocksMined = 0;
let blocksChecked = 0;

// Function to update counters
function updateCounters() {
    blocksMined++;
    document.getElementById('blocksMined').textContent = `Blocks Mined: ${blocksMined}`;
}

function updateCheckedCounter() {
    blocksChecked++;
    document.getElementById('blocksChecked').textContent = `Blocks Checked: ${blocksChecked}`;
}

// Function to handle mining a block
function mineBlock(blockId) {
    const blockIndex = parseInt(blockId.replace('block', ''), 10);
    const gridSize = 20; // Adjust based on your grid size

    // Mine the block (simulate the action)
    console.log(`Mining block ${blockId}`);

    // Update counters
    updateCounters();

    // Check adjacent blocks
    checkAdjacentBlocks(blockIndex);
}

// Function to check adjacent blocks
function checkAdjacentBlocks(index) {
    const gridColumns = 20; // Adjust based on your grid columns
    const upIndex = index - gridColumns;
    const downIndex = index + gridColumns;
    const leftIndex = index - 1;
    const rightIndex = index + 1;

    const adjacentBlockIndices = [upIndex, downIndex, leftIndex, rightIndex];

    adjacentBlockIndices.forEach(adjIndex => {
        const adjacentBlockId = `block${adjIndex}`;
        const adjacentBlockElement = document.getElementById(adjacentBlockId);

        // Check if the adjacent block exists and hasn't been checked yet
        if (adjacentBlockElement && !adjacentBlockElement.classList.contains('checked')) {
            console.log(`Checking adjacent block ${adjacentBlockId}`);
            adjacentBlockElement.classList.add('checked');

            // Perform actions on the adjacent block (simulated)
            console.log(`Interacting with adjacent block ${adjacentBlockId}`);

            // Update counters
            updateCheckedCounter();

            // Recursively check its adjacent blocks if needed
            checkAdjacentBlocks(adjIndex);
        }
    });
}

// Add event listener to each block
document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('click', function() {
        const blockId = block.id;
        mineBlock(blockId);
    });
});
