const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  adjustFontSize();
}

function adjustFontSize() {
  const screenWidth = window.innerWidth;
  fontSize = screenWidth < 768 ? 12 : 16; // Adjust font size for smaller screens
  columns = canvas.width / fontSize;
  drops.length = Math.ceil(columns);
  drops.fill(1);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let fontSize;
let columns;
const drops = [];

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 33);

let alertCount = 0;

function showAlert() {
  alert("YOU HAVE BEEN HACKED! EXIT NOW! OR CALL THE GOOFY GOOBERS!");
  alertCount++;
  if (alertCount >= 3) {
    document.getElementById("welcome-message").classList.remove("hidden");
  }
}

function startAlerts() {
  const alertInterval = setInterval(() => {
    if (alertCount >= 3) {
      clearInterval(alertInterval);
    } else {
      showAlert();
    }
  }, 5000);
}

startAlerts();
