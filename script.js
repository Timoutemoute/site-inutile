const button = document.getElementById("runawayButton");
const controlPanel = document.getElementById("controlPanel");
const speedInput = document.getElementById("speedInput");

let speedMultiplier = 1; // Par défaut, la vitesse normale
let elapsedTime = 0;

// Déplace le bouton si la souris s'approche
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const buttonX = button.offsetLeft + button.offsetWidth / 2;
  const buttonY = button.offsetTop + button.offsetHeight / 2;

  const distanceX = mouseX - buttonX;
  const distanceY = mouseY - buttonY;

  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  if (distance < 150) {
    const offsetX = (Math.random() * 300 - 150) * speedMultiplier;
    const offsetY = (Math.random() * 300 - 150) * speedMultiplier;

    let newX = button.offsetLeft + offsetX;
    let newY = button.offsetTop + offsetY;

    // S'assurer que le bouton reste dans la fenêtre
    if (newX < 0) newX = 0;
    if (newX > window.innerWidth - button.offsetWidth) newX = window.innerWidth - button.offsetWidth;
    if (newY < 0) newY = 0;
    if (newY > window.innerHeight - button.offsetHeight) newY = window.innerHeight - button.offsetHeight;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
  }
});

// Affiche le contrôle de vitesse après 30 secondes
setTimeout(() => {
  controlPanel.style.display = "block";
}, 30000);

// Met à jour la vitesse en fonction du slider
speedInput.addEventListener("input", (e) => {
  speedMultiplier = parseFloat(e.target.value);
});

// Redirection vers Rick Roll si le bouton est cliqué
button.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
