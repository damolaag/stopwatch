
let display = document.getElementById("display");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let themeToggle = document.getElementById("theme-toggle");

// Time variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


let timer = null;
let isRunning = false;

// Update display function
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  let ms;
  if (milliseconds < 10) {
    ms = "00" + milliseconds;
  } else if (milliseconds < 100) {
    ms = "0" + milliseconds;
  } else {
    ms = milliseconds;
  }

  display.innerText = `${h}:${m}:${s}:${ms}`;
}

// Start button
startBtn.addEventListener("click", function() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function() {
      milliseconds += 10;

      if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
      }

      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }, 10);
  }
});

// Stop button
stopBtn.addEventListener("click", function() {
  clearInterval(timer);
  isRunning = false;
});

// Reset button
resetBtn.addEventListener("click", function() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
});

// 🌗 Theme toggle button
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("light");


  if (document.body.classList.contains("light")) {
    themeToggle.textContent = "🌞";
  } else {
    themeToggle.textContent = "🌙";
  }
});
