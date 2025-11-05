let display = document.getElementById("display");
let clickSound = document.getElementById("clickSound");
let modeText = document.getElementById("modeText");

// Ensure sound works after first user click
document.addEventListener("click", () => {
  clickSound.muted = false;
}, { once: true });

function playSound() {
  const sound = clickSound.cloneNode();
  sound.volume = 0.4;
  sound.play().catch(() => {}); // Prevent errors
}

function appendChar(char) {
  playSound();
  display.value += char;
}

function clearDisplay() {
  playSound();
  display.value = "";
}

function deleteChar() {
  playSound();
  display.value = display.value.slice(0, -1);
}

function calculate() {
  playSound();
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  let isDark = document.body.classList.contains("dark");
  modeText.textContent = isDark ? "🌙 Dark Mode" : "🌞 Light Mode";
  playSound();
}