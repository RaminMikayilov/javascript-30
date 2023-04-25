// elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// functions
function playVideo() {
  if (video.paused) {
    video.play();
    toggle.textContent = "❚❚";
  } else {
    video.pause();
    toggle.textContent = "►";
  }
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function handleChange(e) {
  const time = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = time;
}

// event listeners
toggle.addEventListener("click", playVideo);
video.addEventListener("click", playVideo);

skipButtons.forEach((button) => button.addEventListener("click", skip));

// input instead of change because we want to update the volume and playback rate as we drag the slider
ranges.forEach((range) => range.addEventListener("input", handleRangeUpdate));

video.addEventListener("timeupdate", handleProgress);

let mouseDown = false;
progress.addEventListener("click", handleChange);
progress.addEventListener("mousemove", (e) => mouseDown && handleChange(e));
progress.addEventListener("mousedown", () => (mouseDown = true));
progress.addEventListener("mouseup", () => (mouseDown = false));
