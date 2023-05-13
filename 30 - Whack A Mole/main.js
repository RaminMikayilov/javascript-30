const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

let lastHole;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const hole = holes[Math.floor(Math.random() * holes.length)];
  if (lastHole === hole) {
    // recursive function
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
  }, time);
}

function bonk() {
  if (this.classList.contains("up")) {
    scoreBoard.textContent++;
  }
}

holes.forEach((hole) => hole.addEventListener("click", bonk));

function startGame() {
  scoreBoard.textContent = 0;
  setTimeout(() => {
    clearInterval(timer);
  }, 10000);

  const timer = setInterval(() => {
    peep();
  }, 1000);
}
