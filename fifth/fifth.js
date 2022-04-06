gsap.registerPlugin(MotionPathPlugin);
const circles = document.querySelectorAll(".circle > path");
const circle1 = document.querySelector(".path-1");
const circle2 = document.querySelector(".path-2");
const circle3 = document.querySelector(".path-3");
const circle4 = document.querySelector(".path-4");
const circle5 = document.querySelector(".path-5");
const circle6 = document.querySelector(".path-6");
const circle7 = document.querySelector(".path-7");
const circle8 = document.querySelector(".path-8");

const numbers = document.querySelectorAll(".number");
const numbersContainer = document.querySelector(".numbers-container");
let randomRounds = Math.floor(Math.random() * (10 - 5) + 5);

let speed = 3;
let interval = 2000;
let totalTime = randomRounds * interval;
let delay = interval / 1000;

const fills = [
  "rgb(218, 61, 37)",
  "rgb(51, 82, 204)",
  "rgb(218, 61, 37)",
  "rgb(31, 224, 68)",
  "rgb(51, 82, 204)",
  "rgb(209, 15, 57)",
  "rgb(51, 82, 204)",
  "rgb(209, 15, 57)",
];
const backFills = [
  "rgb(218, 61, 37)",
  "rgb(51, 82, 204)",
  "rgb(209, 15, 57)",
  "rgb(31, 224, 68)",
];
const classes = [
  ".path-1",
  ".path-2",
  ".path-3",
  ".path-4",
  ".path-5",
  ".path-6",
  ".path-7",
  ".path-8",
];
const dots = [
  ".dot-1",
  ".dot-2",
  ".dot-3",
  ".dot-4",
  ".dot-5",
  ".dot-6",
  ".dot-7",
  ".dot-8",
];
let i = 0;
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const shuffledFill = shuffle(fills);
const shuffledClasses = shuffle(classes);
const shuffledDots = shuffle(dots);
const shuffledBack = shuffle(backFills);

for (let i = 0; i < 4; i++) {
  numbers[i].style.backgroundColor = shuffledBack[i];
}

circles.forEach((circle) => {
  circle.setAttribute("stroke", shuffledFill[i++]);
});

window.addEventListener("load", () => {
  let i = 0;
  gsap.to(".dot-1", { duration: speed, motionPath: ".path-1", repeat: -1 });
  gsap.to(".dot-2", { duration: speed, motionPath: ".path-2", repeat: -1 });
  gsap.to(".dot-3", { duration: speed, motionPath: ".path-3", repeat: -1 });
  gsap.to(".dot-4", { duration: speed, motionPath: ".path-4", repeat: -1 });
  gsap.to(".dot-5", { duration: speed, motionPath: ".path-5", repeat: -1 });
  gsap.to(".dot-6", { duration: speed, motionPath: ".path-6", repeat: -1 });
  gsap.to(".dot-7", { duration: speed, motionPath: ".path-7", repeat: -1 });
  gsap.to(".dot-8", { duration: speed, motionPath: ".path-8", repeat: -1 });
  setInterval(() => {
    setTimeout(() => {
      if (i < randomRounds) {
        const tl = gsap.timeline();
        tl.to(".dot-1", { opacity: 0 })
          .to(shuffledDots[i], {
            opacity: 1,
          })
          .to(shuffledDots[i], { opacity: 0, delay: 1 });
      }
      i++;
    }, delay);
  }, interval);
  setTimeout(() => {
    check();
  }, totalTime + 3000);
});

const check = () => {
  let result = [];
  numbersContainer.style.opacity = 1;
  let lastDot = document.querySelector(shuffledDots[randomRounds - 1]);
  let lastClass = lastDot.getAttribute("class");
  let lastClassNum = lastClass.charAt(lastClass.length - 1);
  let pathColor = document
    .querySelector(`.path-${lastClassNum}`)
    .getAttribute("stroke");

  window.addEventListener("keydown", (e) => {
    key = e.key;
    if (key < 5) {
      let numberContainer = numbers[key - 1];
      let style = window.getComputedStyle(numberContainer);
      let numberColor = style.getPropertyValue("background-color");
      if (pathColor === numberColor) {
        if (result.length < 1) {
          result.push(true);
        }
      } else {
        if (result.length < 1) {
          result.push(false);
        }
      }
      console.log(result);
    }
  });
  return result;
};
