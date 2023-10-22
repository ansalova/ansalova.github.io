const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');

    if (guess === secretNumber) {
        message.textContent = `¡Adivinaste! El número era ${secretNumber}.`;
        message.style.color = 'green';
        document.getElementById('guess').disabled = true;
    } else {
        attempts--;
        if (attempts === 0) {
            message.textContent = `¡Perdiste! El número era ${secretNumber}.`;
            message.style.color = 'red';
            document.getElementById('guess').disabled = true;
        } else {
            message.textContent = `Intentos restantes: ${attempts}`;
            message.style.color = 'red';
        }
    }
}
