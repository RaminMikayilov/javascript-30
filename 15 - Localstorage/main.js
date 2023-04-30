const form = document.querySelector("form");
const addForm = document.querySelector(".add");
const input = document.querySelector("input[type='text']");
const list = document.querySelector(".list");
const items = [];

// add todos
const addTodo = (items) => {
  list.innerHTML = items
    .map((todo) => {
      return `
    <li class="list-item">
        <span>${todo}</span>
    </li>`;
    })
    .join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();

  if (text.length) {
    items.push(text);
    addTodo(items);
    localStorage.setItem("items", JSON.stringify(items));
    form.reset();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  input.focus();
  const todos = JSON.parse(localStorage.getItem("items"));
  if (todos.length) {
    todos.forEach((todo) => {
      addTodo(todos);
    });
  }
});
