const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

function setDate() {
  const now = new Date();
  // second hand
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsDegree}deg)`;

  // minute hand
  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minute.style.transform = `rotate(${minutesDegree}deg)`;

  // hour hand
  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hour.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
