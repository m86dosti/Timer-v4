function startCountdown() {
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    const timerDisplay = document.getElementById('timerDisplay');
    const refreshButton = document.querySelector('.refresh-button');

    const hours = Number(hoursInput.value);
    const minutes = Number(minutesInput.value);
    const seconds = Number(secondsInput.value);

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    let remainingSeconds = totalSeconds;

    refreshButton.style.display = 'inline';

    const countdownInterval = setInterval(() => {
        const hoursLeft = Math.floor(remainingSeconds / 3600);
        const minutesLeft = Math.floor((remainingSeconds % 3600) / 60);
        const secondsLeft = remainingSeconds % 60;

        timerDisplay.textContent = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;

        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = 'Countdown Complete!';
            refreshButton.classList.remove('pulse-button');
            refreshButton.textContent = 'Refresh';
        }

        remainingSeconds--;
    }, 1000);
}

function refreshPage() {
    location.reload();
}