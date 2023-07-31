let countdownInterval;
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');
    let timerDisplay = document.getElementById('timer');
    let startBtn = document.getElementById('startBtn');
    let resetBtn = document.getElementById('resetBtn');

    function updateTimerDisplay(minutes, seconds) {
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function startCountdown() {
      let totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);

      if (isNaN(totalSeconds) || totalSeconds <= 0) {
        alert('Please enter a valid time greater than 0.');
        return;
      }

      startBtn.disabled = true;
      minutesInput.disabled = true;
      secondsInput.disabled = true;

      countdownInterval = setInterval(() => {
        totalSeconds--;

        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        updateTimerDisplay(minutes, seconds);

        if (totalSeconds <= 0) {
          clearInterval(countdownInterval);
          startBtn.disabled = false;
          minutesInput.disabled = false;
          secondsInput.disabled = false;
        }
      }, 1000);
    }

    function resetCountdown() {
      clearInterval(countdownInterval);
      updateTimerDisplay(0, 0);
      minutesInput.value = 0;
      secondsInput.value = 0;
      startBtn.disabled = false;
      minutesInput.disabled = false;
      secondsInput.disabled = false;
    }

    startBtn.addEventListener('click', startCountdown);
    resetBtn.addEventListener('click', resetCountdown);