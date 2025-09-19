// 🎮 Latoya's first JavaScript
let xp = 0;

function gainXP(amount) {
  xp += amount;
  console.log("XP:", xp);
  document.getElementById("status").textContent = `Status: XP ${xp}`;
}

