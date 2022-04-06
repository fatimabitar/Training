//Global Values
const balls = document.querySelector(".balls");
let duration = 4000; /* Balls Speed */
let levelTime = 30000;

//A function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
const bottomArrows = ["up", "down", "right", "left"];
const shuffeledArrows = shuffle(bottomArrows);
let result1 = [];
let result2 = [];
let result3 = [];
let result4 = [];

//Random arrow picker
const newArrow = (shuffeledArrows) => {
  let randomIndex = Math.floor(Math.random() * bottomArrows.length);
  const nextArrow = bottomArrows[randomIndex];
  bottomArrows.splice(randomIndex, 1);
  const nextArrowNode = document.querySelector(`.arrow > .${nextArrow}`);
  nextArrowNode.parentElement.style.background = "#28D755";
  return [shuffeledArrows, nextArrow, nextArrowNode];
};

//Generate Balls
const generate = () => {
  //arrow left
  for (let i = 0; i < 5; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.classList.add("left");
    ball.classList.add(`ball-${i}`);
    /* s class represents the arrow size */
    ball.classList.add(`s${i}`);
    balls.appendChild(ball);
    ball.innerHTML = "&#xe802";
  }
  //arrow right
  for (let i = 0; i < 5; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.classList.add("right");
    ball.classList.add(`ball-${i + 5}`);
    ball.classList.add(`s${i}`);
    balls.appendChild(ball);
    ball.innerHTML = "&#xe800";
  }
  //arrow up
  for (let i = 0; i < 5; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.classList.add("up");
    ball.classList.add(`ball-${i + 10}`);
    ball.classList.add(`s${i}`);
    balls.appendChild(ball);
    ball.innerHTML = "&#xe803";
  }
  //arrow down
  for (let i = 0; i < 5; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.classList.add("down");
    ball.classList.add(`ball-${i + 15}`);
    ball.classList.add(`s${i}`);
    balls.appendChild(ball);
    ball.innerHTML = "&#xe801";
  }
};

//Random Balls movement
function makeNewPosition() {
  const w = 1400;
  const h = 550;
  const nh = Math.floor(Math.random() * h);
  const nw = Math.floor(Math.random() * w);
  return [nh, nw];
}
function animateDiv(myclass) {
  const newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, duration, function () {
    animateDiv(myclass);
  });
}

//Arrow Tracking
const firstTracking = (currentArrow) => {
  const arrowUp = document.querySelectorAll(".up");
  const arrowDown = document.querySelectorAll(".down");
  const arrowLeft = document.querySelectorAll(".left");
  const arrowRight = document.querySelectorAll(".right");
  console.log(currentArrow);
  arrowUp.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result1.length <= 5) {
          result1.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      } else {
        if (result1.length <= 5) {
          result1.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      }
    });
  });
  arrowDown.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result1.length <= 5) {
          result1.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      } else {
        if (result1.length <= 5) {
          result1.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      }
    });
  });
  arrowLeft.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result1.length <= 5) {
          result1.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      } else {
        if (result1.length <= 5) {
          result1.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      }
    });
  });
  arrowRight.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result1.length <= 5) {
          result1.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      } else {
        if (result1.length <= 5) {
          result1.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result1.length === 5) {
          console.log(result1);
          return;
        }
      }
    });
  });
  return result1;
};
const secondTracking = (currentArrow) => {
  const arrowUp1 = document.querySelectorAll(".up");
  const arrowDown1 = document.querySelectorAll(".down");
  const arrowLeft1 = document.querySelectorAll(".left");
  const arrowRight1 = document.querySelectorAll(".right");
  console.log(currentArrow);
  arrowUp1.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result2.length <= 5) {
          result2.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      } else {
        if (result2.length <= 5) {
          result2.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      }
    });
  });
  arrowDown1.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result2.length <= 5) {
          result2.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      } else {
        if (result2.length <= 5) {
          result2.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      }
    });
  });
  arrowLeft1.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result2.length <= 5) {
          result2.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      } else {
        if (result2.length <= 5) {
          result2.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      }
    });
  });
  arrowRight1.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result2.length <= 5) {
          result2.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      } else {
        if (result2.length <= 5) {
          result2.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result2.length === 5) {
          console.log(result2);
          return;
        }
      }
    });
  });
  return result2;
};
const thirdTracking = (currentArrow) => {
  const arrowUp2 = document.querySelectorAll(".up");
  const arrowDown2 = document.querySelectorAll(".down");
  const arrowLeft2 = document.querySelectorAll(".left");
  const arrowRight2 = document.querySelectorAll(".right");
  console.log(currentArrow);
  arrowUp2.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result3.length <= 5) {
          result3.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      } else {
        if (result3.length <= 5) {
          result3.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      }
    });
  });
  arrowDown2.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result3.length <= 5) {
          result3.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      } else {
        if (result3.length <= 5) {
          result3.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      }
    });
  });
  arrowLeft2.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result3.length <= 5) {
          result3.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      } else {
        if (result3.length <= 5) {
          result3.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      }
    });
  });
  arrowRight2.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result3.length <= 5) {
          result3.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      } else {
        if (result3.length <= 5) {
          result3.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result3.length === 5) {
          console.log(result3);
          return;
        }
      }
    });
  });
  return result3;
};
const fourthTracking = (currentArrow) => {
  const arrowUp3 = document.querySelectorAll(".up");
  const arrowDown3 = document.querySelectorAll(".down");
  const arrowLeft3 = document.querySelectorAll(".left");
  const arrowRight3 = document.querySelectorAll(".right");
  console.log(currentArrow);
  arrowUp3.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result4.length <= 5) {
          result4.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      } else {
        if (result4.length <= 5) {
          result4.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      }
    });
  });
  arrowDown3.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result4.length <= 5) {
          result4.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      } else {
        if (result4.length <= 5) {
          result4.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      }
    });
  });
  arrowLeft3.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result4.length <= 5) {
          result4.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      } else {
        if (result4.length <= 5) {
          result4.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      }
    });
  });
  arrowRight3.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains(currentArrow)) {
        if (result4.length <= 5) {
          result4.push(true);
          item.style.background = "#fff";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      } else {
        if (result4.length <= 5) {
          result4.push(false);
          item.style.background = "#f44";
          item.style.pointerEvents = "none";
        }
        if (result4.length === 5) {
          console.log(result4);
          return;
        }
      }
    });
  });
  return result4;
};
const restart = () => {
  try {
    const innerBall = document.querySelectorAll(".arrow");
    innerBall.forEach((item) => {
      item.style.background = "#fff";
    });
    const ball = document.querySelectorAll(".ball");
    ball.forEach((item) => {
      item.style.background = "#5baab4";
      item.style.pointerEvents = "auto";
    });
  } catch (error) {
    console.error();
  }
};

setTimeout(() => {
  let [arrowsList, currentArrow, nextArrowNode] = newArrow(shuffeledArrows);
  firstTracking(currentArrow);
  let timeleft = levelTime / 1000;
  let downloadTimer = setInterval(function () {
    timeleft--;
    document.querySelector("#seconds").textContent = timeleft;
    if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);
}, 500);
setTimeout(() => {
  restart();
  let [arrowsList, currentArrow, nextArrowNode] = newArrow(shuffeledArrows);
  secondTracking(currentArrow);
  let timeleft = levelTime / 1000;
  let downloadTimer = setInterval(function () {
    timeleft--;
    document.querySelector("#seconds").textContent = timeleft;
    if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);
}, levelTime + 500);
setTimeout(() => {
  restart();
  let [arrowsList, currentArrow, nextArrowNode] = newArrow(shuffeledArrows);
  thirdTracking(currentArrow);
  let timeleft = levelTime / 1000;
  let downloadTimer = setInterval(function () {
    timeleft--;
    document.querySelector("#seconds").textContent = timeleft;
    if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);
}, levelTime * 2 + 500);
setTimeout(() => {
  restart();
  let [arrowsList, currentArrow, nextArrowNode] = newArrow(shuffeledArrows);
  fourthTracking(currentArrow);
  let timeleft = levelTime / 1000;
  let downloadTimer = setInterval(function () {
    timeleft--;
    document.querySelector("#seconds").textContent = timeleft;
    if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);
}, levelTime * 3 + 500);
setTimeout(() => {
  restart();
}, levelTime * 4);

window.addEventListener("load", () => {
  generate();
  for (let i = 0; i < 20; i++) {
    animateDiv(`.ball-${i}`);
  }
});
