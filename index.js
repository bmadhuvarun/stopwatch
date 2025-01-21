const display = document.getElementById("display");
let t = null; // Timer interval
let startTime = 0; // Start time in milliseconds
let elapsedTime = 0; // Elapsed time in milliseconds
let isRunning = false; // Boolean to check if the stopwatch is running

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime; // Adjust start time to resume
    t = setInterval(update, 10); // Update every 10ms
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(t); // Stop the timer
    elapsedTime = Date.now() - startTime; // Save elapsed time
    isRunning = false;
  }
}

function restart() {
  clearInterval(t); // Stop the timer if running
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:000"; // Reset display
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let h = Math.floor(elapsedTime / (1000 * 60 * 60)); // Hours
  let m = Math.floor((elapsedTime / (1000 * 60)) % 60); // Minutes
  let sec = Math.floor((elapsedTime / 1000) % 60); // Seconds
  let ms = Math.floor((elapsedTime % 1000) / 10); // Milliseconds

  // Format values to always display two or three digits
  h = String(h).padStart(2, "0");
  m = String(m).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  ms = String(ms).padStart(2, "0");

  display.textContent = `${h}:${m}:${sec}:${ms}`; // Update display
}
