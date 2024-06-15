document.addEventListener('DOMContentLoaded', function() {
    const buttonGrid = document.getElementById('buttonGrid');
    const numberOfButtons = 391; // Number of buttons to generate

    for (let i = 1; i <= numberOfButtons; i++) {
        const button = document.createElement('button');
        button.textContent = 'Button ' + i;
        button.className = 'grid-item';
        button.id = 'button' + i;

        // Optionally, add a click event listener to each button
        button.addEventListener('click', function() {
            alert('Button ' + i + ' clicked!');
        });

        buttonGrid.appendChild(button);
    }
});

