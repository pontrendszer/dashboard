// Function to handle button click event
function handleButtonClick() {
    // Get the selected value from the select input
    const selectElement = document.getElementById('scripts');
    const selectedValue = selectElement.value;

    // Define the mapping of values to alerts
    const alertMessages = {
        '1. játék - Szókitaláló': 'Az első játék nem más mint (dobpergés)... név. Lényege. Hogyan fog zajlani. A sorrend: Balról az első talál a mellette lévő jobbra mond. Utána húz a mondó szavat, majd felrakjuk a találóra a fülest és indítjuk a zenét. Ha kitalálja 2 percen bellül, +1 pont, ha nem akkor nem kap pontot. Ez egy saját pontozású játék.',
        '2. játék - Bingó': 'ERROR: NINCS MEGADVA SZÖVEG',
        '3. játék - Murder Mystery': 'ERROR: NINCS MEGADVA SZÖVEG',
        'Nyeremény kiosztás': 'ERROR: NINCS MEGADVA SZÖVEG'
    };

    const alertTitles = {
        '1. játék - Szókitaláló': 'Szókitaláló',
        '2. játék - Bingó': 'Bingó',
        '3. játék - Murder Mystery': 'Murder Mystery',
        'Nyeremény kiosztás': 'Nyeremény kiosztás'
    };

    // Show the alert based on the selected value
    if (alertMessages.hasOwnProperty(selectedValue)) {
        document.querySelector('.fkexport').style.display = 'block';
        document.querySelector('.ftitle').innerHTML = alertTitles[selectedValue]
        document.querySelector('.ftext').innerHTML = alertMessages[selectedValue]
    } else {
        document.querySelector('.fkexport').style.display = 'none';
        alert("Ki kell választanod egy forgatókönyvet a lekérdezéshez!")
    }
}

const buttonElement = document.getElementById('scriptget');
buttonElement.addEventListener('click', handleButtonClick);

function close(){
    document.querySelector('.fkexport').style.display = 'none';
}