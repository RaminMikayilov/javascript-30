const password = "passcode";
const confirmPassword = [];

// first solution
// window.addEventListener("keypress", (e) => {
//   confirmPassword.push(e.key);
//     confirmPassword.splice(-password.length - 1, confirmPassword.length - password.length);
//   if (confirmPassword.join("") == password) {
//     console.log("You have entered the password");
//   }
//   console.log(confirmPassword);
// });

// second solution
window.addEventListener("keypress", (e) => {
  confirmPassword.push(e.key);
  if (confirmPassword.length > password.length) {
    confirmPassword.shift();
  }
  if (confirmPassword.join("") == password) {
    console.log(
      "%c You have entered the password",
      "background: #444; color: #bada55; font-size: 20px;"
    );
  }
  console.log(confirmPassword);
});
