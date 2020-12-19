const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const min = 1;
const max = colors.length;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector("body");

let isActive = false;
let intervalId = null;
let randomColor;
startRef.addEventListener("click", start);
function start() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    randomColor = colors[randomIntegerFromInterval(min, max) - 1];
    bodyRef.style.backgroundColor = randomColor;
    // console.log(randomColor);
  }, 1000);

  // console.log(`id:${intervalId}`);
}

stopRef.addEventListener("click", stop);
function stop() {
  isActive = false;
  clearInterval(intervalId);
}
