const totalTime = document.querySelector(".total-time");
const times = [...document.querySelectorAll("[data-time]")];

const totalSeconds = times.reduce((acc, curr) => {
  const [mins, secs] = curr.dataset.time.split(":").map(parseFloat);
  return acc + mins * 60 + secs;
}, 0);

console.log(totalSeconds);

const hours = (totalSeconds / 3600).toFixed(1);

totalTime.innerHTML = `Total time: ${hours} hours`;
