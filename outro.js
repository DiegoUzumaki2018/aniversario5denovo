

const rocket = document.getElementById("rocket");
const scene = document.querySelector(".scene");
const mensagem = document.getElementById("mensagem");

let launched = false;

function createSmoke() {
  if (launched || !scene || !rocket) return;

  const smoke = document.createElement("span");
  smoke.className = "smoke";
  smoke.style.left = rocket.offsetLeft + 30 + "px";
  smoke.style.top = rocket.offsetTop + 190 + "px";
  smoke.style.setProperty(
    "--x",
    (Math.random() * 80 - 40) + "px"
  );

  scene.appendChild(smoke);

  setTimeout(() => {
    smoke.remove();
  }, 1200);
}

setInterval(createSmoke, 120);

if (rocket) {
  rocket.addEventListener("click", () => {
    launched = true;
    rocket.classList.add("launch");

    if (mensagem) {
      mensagem.classList.add("mostrar");
    }

    // Cria estrelinhas coloridas ao redor da mensagem
    for (let i = 0; i < 20; i++) {
      const estrela = document.createElement("span");
      const emojis = ["✨", "⭐", "💖", "🎆"];
      estrela.className = "estrela";
      estrela.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      if (scene) {
        estrela.style.left = Math.random() * scene.clientWidth + "px";
        estrela.style.top = "180px";
        scene.appendChild(estrela);
      }

      estrela.addEventListener("animationend", () => {
        estrela.remove();
      });
    }
  });
}