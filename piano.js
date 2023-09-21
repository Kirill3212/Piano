const pianoKeys = Array.from(document.querySelectorAll(".piano-keys .key"));
const volumeSlider = document.querySelector(".volume-slider input");

const availableKeys = [
  65, 87, 83, 69, 68, 70, 84, 71, 89, 72, 85, 74, 75, 79, 76, 80, 186,
];

let audio = new Audio("./tunes/a.wav");

function playTune(e) {
  console.log(e.keyCode);

  if (availableKeys.includes(e.keyCode)) {
    // Play the pressed key
    audio.src = `./tunes/${e.keyCode}.wav`;
    audio.play();

    // Color the pressed key
    const clickedKey = document.querySelector(`[data-key="${e.keyCode}"]`);
    clickedKey.classList.add("active");
    console.log(e.key);
    setTimeout(() => clickedKey.classList.remove("active"), 100);
  }
}

function handleVolume(e) {
  audio.volume = e.target.value;
}

document.addEventListener("keydown", playTune);
volumeSlider.addEventListener("input", handleVolume);
