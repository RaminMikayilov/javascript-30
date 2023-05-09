// elements
const msg = new SpeechSynthesisUtterance();
let voices = [];
const dropDown = document.getElementById("voices");
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector(".speak");
const stopButton = document.querySelector(".stop");
msg.text = document.querySelector('[name="text"]').value;

// functions
function populateVoices() {
  voices = this.getVoices();
  dropDown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(start = true) {
  speechSynthesis.cancel();
  if (start) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle();
}

// event listeners
speechSynthesis.addEventListener("voiceschanged", populateVoices);
dropDown.addEventListener("change", setVoice);

options.forEach((option) => option.addEventListener("change", setOption));

speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
