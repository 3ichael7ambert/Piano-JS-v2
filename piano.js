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