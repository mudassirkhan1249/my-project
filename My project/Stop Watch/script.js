// Variables to store time
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// To store setInterval reference
let timer = null;

// Start function
function startTime() {
  if (timer !== null) return; // Prevent multiple intervals

  timer = setInterval(() => {
    milliseconds += 1;

    if (milliseconds >= 100) {
      milliseconds = 0;
      seconds += 1;
    }

    if (seconds >= 60) {
      seconds = 0;
      minutes += 1;
    }

    // Update display
    document.getElementById("min").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("sec").textContent = seconds.toString().padStart(2, "0");
    document.getElementById("msec").textContent = milliseconds.toString().padStart(2, "0");

  }, 10); // 10ms interval
}

// Stop function
function stopTime() {
  clearInterval(timer);
  timer = null;
}

// Reset function
function resetTime() {
  clearInterval(timer);
  timer = null;

  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  // Reset display
  document.getElementById("min").textContent = "00";
  document.getElementById("sec").textContent = "00";
  document.getElementById("msec").textContent = "00";
}
