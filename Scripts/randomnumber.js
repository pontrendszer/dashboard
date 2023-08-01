function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        alert("Please enter valid minimum and maximum numbers.");
        return;
    }

    if (min >= max) {
        alert("Minimum value should be less than the maximum value.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = randomNumber;
}