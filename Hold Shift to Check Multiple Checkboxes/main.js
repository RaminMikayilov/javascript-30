const container = document.querySelector(".container");
const data = [
  "Task 1",
  "Task 2",
  "Task 3",
  "Task 4",
  "Task 5",
  "Task 6",
  "Task 7",
  "Task 8",
];

container.innerHTML = data
  .map((item) => {
    return `
    <div class="item">
      <input type="checkbox" id="${item}" />
      <label for="${item}">${item}</label>
    </div>`;
  })
  .join("");

const checkboxes = document.querySelectorAll("input[type='checkbox']");

let lastChecked;
function handleClick(e) {
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) checkbox.checked = true;
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleClick)
);
