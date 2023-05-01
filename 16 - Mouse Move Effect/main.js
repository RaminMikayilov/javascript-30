// elements
const container = document.querySelector(".container");
const text = document.querySelector(".text");
const mouseCursor = document.querySelector(".cursor");

const walk = 100; // 100px

// functions
function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = container;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7)
    `;
}

function cursor(e) {
  const { pageX: x, pageY: y } = e;
  mouseCursor.style.top = `${y}px`;
  mouseCursor.style.left = `${x}px`;
}

// event listeners
container.addEventListener("mousemove", shadow);

window.addEventListener("mousemove", cursor);
