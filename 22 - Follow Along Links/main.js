const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

const links = document.querySelectorAll("a");

function highlightLink() {
  const el = this.getBoundingClientRect();
  highlight.style.width = `${el.width}px`;
  highlight.style.height = `${el.height}px`;
  highlight.style.top = `${el.top + window.scrollY}px`;
  highlight.style.left = `${el.left}px`;
}

links.forEach((link) => link.addEventListener("mouseenter", highlightLink));
