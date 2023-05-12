const displayTime = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");

const buttons = document.querySelectorAll("[data-time]");
const form = document.querySelector("#custom");
const input = document.querySelector("input");

let interval;

displayTime.textContent = "00:00";
endTime.textContent = "00:00";

function timer(seconds) {
  clearInterval(interval);
  interval = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(interval);
      return;
    }
    seconds--;
    displayTimeLeft(seconds);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  displayTime.textContent = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
}

function displayCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  endTime.textContent = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function displayEndTime(seconds) {
  const currentTime = Date.now();
  const endingTime = currentTime + seconds * 1000;
  const hours = new Date(endingTime).getHours();
  const minutes = new Date(endingTime).getMinutes();

  endTime.textContent = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
  displayEndTime(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const seconds = parseInt(input.value) * 60;
  timer(seconds);
  displayEndTime(seconds);
});

displayCurrentTime();
