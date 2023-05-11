const video = document.querySelector(".video");
const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
let mouseDown = false;

function changeSpeed(e) {
  const y = e.pageY - e.currentTarget.offsetTop;
  const percent = y / e.currentTarget.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "×";
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousedown", () => (mouseDown = true));
window.addEventListener("mouseup", () => (mouseDown = false));

speed.addEventListener("mousemove", (e) => mouseDown && changeSpeed(e));
