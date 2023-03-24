document.addEventListener("keydown", function(event) {
  const audio = document.getElementById(event.code + "-sound");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
});

const keys = document.querySelectorAll(".white-key, .black-key");
keys.forEach(key => {
  key.addEventListener("click", function() {
    const note = this.id;
    const audio = document.getElementById(note + "-sound");
    audio.currentTime = 0;
    audio.play();
  });
});



///KEYS
document.addEventListener('keydown', (e) => {
  const kc = String.fromCharCode(e.keyCode);

  const key = document.querySelector(`div[data-key='${kc}']`);
  if (!key) return;

  key.classList.add("active");

  const allowed_keys = [
      "A", "W", "S", "D",
      "R", "F", "G", "T",
      "H", "J", "K", "E"
  ];
  if (allowed_keys.includes(kc)) play(allowed_keys.indexOf(kc) + 1);
});

document.addEventListener('keyup', (e) => {
  const kc = String.fromCharCode(e.keyCode);
  const box = document.querySelector(`div[data-key='${kc}']`);
  if (!box) return;

  key.classList.remove("active");
  key.classList.remove("active");
});