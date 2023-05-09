const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation();
}

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    capture: true, // true: capture, false: bubbling
  })
);

const button = document.querySelector("button");
button.addEventListener(
  "click",
  () => {
    console.log("Click");
  },
  {
    once: true, // once: true, remove event after click
  }
);
