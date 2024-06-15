
const buttons = document.querySelectorAll('button');

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Button ${button.id} clicked!`);
    });
});
