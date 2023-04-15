const inputs = document.querySelectorAll(".inputs input");

function handleUpdate() {
  let r = document.querySelector(":root");
  if (this.name == "spacing")
    r.style.setProperty("--spacing", `${this.value}px`);
  else if (this.name == "blur")
    r.style.setProperty("--blur", `${this.value}px`);
  else r.style.setProperty("--base", `${this.value}`);
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));

// The getComputedStyle() method gives an object which includes all the styles applied to the target element.
// getPropertyValue() method is used to obtain the desired property from the computed styles.
// setProperty() is used to change the value of CSS variable.
