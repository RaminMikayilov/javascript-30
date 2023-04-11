window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-letter='${e.key}']`);
  const letter = document.querySelector(`.box[data-letter='${e.key}']`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  letter.classList.add("playing");
});

document.querySelectorAll(".box").forEach((letter) =>
  letter.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    letter.classList.remove("playing");
  })
);
