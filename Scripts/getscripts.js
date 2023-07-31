// Function to handle button click event
function handleButtonClick() {
    // Get the selected value from the select input
    const selectElement = document.getElementById('scripts');
    const selectedValue = selectElement.value;

    // Define the mapping of values to alerts
    const alertMessages = {
        '1. játék - Szókitalálás süketen': 'A',
        '2. játék - Bingó': 'B',
        '3. játék - Murder Mystery': 'C',
        'Nyeremény kiosztás': 'WINNER'
    };

    // Show the alert based on the selected value
    if (alertMessages.hasOwnProperty(selectedValue)) {
        alert(alertMessages[selectedValue]);
    } else {
        alert('Invalid selection!');
    }
}

// Attach the click event listener to the button
const buttonElement = document.getElementById('scriptget');
buttonElement.addEventListener('click', handleButtonClick);