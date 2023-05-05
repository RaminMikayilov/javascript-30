const words = document.querySelector(".words");
let p = document.createElement("p");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerHTML = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }

  console.log(transcript);
});

recognition.addEventListener("end", recognition.start);

recognition.start();
