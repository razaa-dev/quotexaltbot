const btn = document.getElementById("getSignalBtn");
const dir = document.getElementById("directionBox");
const timer = document.getElementById("timerBox");
let running = false;

btn.addEventListener("click", () => {
  if (running) return;

  const asset = document.getElementById("assetSelect").value;
  if (!asset || asset === "Select an asset") {
    alert("Please select an asset");
    return;
  }

  running = true;
  const directions = ["UP", "DOWN"];
  const chosen = directions[Math.floor(Math.random() * directions.length)];

  dir.textContent = chosen;
  dir.className = chosen === "UP" ? "output direction-up" : "output direction-down";

  let time = 60;
  timer.textContent = `${time}s`;
  const interval = setInterval(() => {
    time--;
    timer.textContent = `${time}s`;
    if (time === 0) {
      clearInterval(interval);
      running = false;
      dir.textContent = "--";
      timer.textContent = "--";
    }
  }, 1000);
});