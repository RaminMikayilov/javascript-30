const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  try {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((localMediaStream) => {
        video.srcObject = localMediaStream;
        video.play();
      });
  } catch (error) {
    console.log(error);
  }
}

function painToCanvas() {
  const { videoWidth: width, videoHeight: height } = video;
  canvas.width = width;
  canvas.height = height;
  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    let pixels = ctx.getImageData(0, 0, width, height);
    // pixels = redEffect(pixels);
    pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 20);
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  // take the data out of the canvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "picture");
  link.innerHTML = `<img src="${data}" alt="picture" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] += 100; // red
    pixels.data[i + 1] -= 150; // green
    pixels.data[i + 2] *= 0.5; // blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.data.length; i += 4) {
    const red = pixels.data[i];
    const green = pixels.data[i + 1];
    const blue = pixels.data[i + 2];

    if(red+green+blue < 300) continue;
    pixels.data[i] += levels.red; // red
    pixels.data[i + 1] -= levels.green; // green
    pixels.data[i + 2] += levels.blue; // blue
    pixels.data[i + 3] -= levels.alpha; // alpha
  }

  return pixels;
}

getVideo();

video.addEventListener("canplay", painToCanvas);
