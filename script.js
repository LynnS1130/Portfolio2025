// 🎮 Latoya's JavaScript Playground

// =====================
// XP Tracker
// =====================
let xp = 0;

function gainXP(amount) {
  xp += amount;
  console.log("XP:", xp);
  document.getElementById("status").textContent = `Status: XP ${xp}`;
}

// =====================
// Reset XP Button
// =====================
document.getElementById("resetBtn").addEventListener("click", function () {
  xp = 0;
  document.getElementById("status").textContent = `Status: XP ${xp}`;
  console.log("XP reset to 0");
});

// =====================
// Quote Generator
// =====================
const quotes = [
  "Future you is proud of present you.",
  "One line of code at a time.",
  "Progress > perfection.",
  "You are building stability step by step.",
  "Coding is just talking to computers in your own style."
];

document.getElementById("qBtn").addEventListener("click", function() {
  const idx = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[idx];
  gainXP(15); // reward extra XP for clicking!
});
