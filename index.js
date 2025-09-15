const soundMap = {
  a: "sounds/crash.mp3",
  w: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3",
};

Object.keys(soundMap).forEach((key) => {
  const btn = document.querySelector(`.${key}`);
  if (btn) {
    btn.addEventListener("click", () => {
      new Audio(soundMap[key]).play();
    });
  }
});

// Create visualizer animation
document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".bar");

  function animateBars() {
    bars.forEach((bar) => {
      const randomHeight = Math.floor(Math.random() * 80) + 5;
      bar.style.height = `${randomHeight}px`;
    });
  }

  setInterval(animateBars, 100);

  // Add drum functionality
  document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", function () {
      // Add playing class for visual feedback
      this.classList.add("playing");

      // Remove playing class after animation completes
      setTimeout(() => {
        this.classList.remove("playing");
      }, 100);
    });
  });
});
