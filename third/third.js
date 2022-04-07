//Global Values
let itemIndex = 0;
let duration = 500;
let randomDuration = 1500;
const ballsContainer = document.querySelector(".balls-container");
const balls = document.querySelector(".balls");

const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let xMoves = [];
let yMoves = [];
let finalResult = new Set();
let points = 0;

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

//Random Balls movement
function makeNewPosition() {
  const h = 600;
  const w = ballsContainer.getBoundingClientRect().width - 50;
  const nh = Math.floor(Math.random() * h);
  const nw = Math.floor(Math.random() * w);
  return [nh, nw];
}
function animateDiv(myclass) {
  var newq = makeNewPosition();
  $(myclass).animate(
    { top: newq[0], left: newq[1] },
    randomDuration,
    function () {
      animateDiv(myclass);
    }
  );
}
function makeNewX() {
  const w = ballsContainer.getBoundingClientRect().width - 50;
  const nw = Math.floor(Math.random() * w);
  return nw;
}
function animateX(myclass, i, movesNum) {
  let x = makeNewX();
  xMoves.push(x);
  let x1 = xMoves[xMoves.length - 1];
  let x2 = xMoves[xMoves.length - 2];
  let xTotal = x1 - x2;
  $(myclass).animate({ left: x }, duration, function () {
    if (i === movesNum) {
      check(movesNum, xTotal, 0);
      console.log(xTotal);
    }
  });
  return x;
}
function makeNewY() {
  const h = 600;
  const nh = Math.floor(Math.random() * h);
  return nh;
}
function animateY(myclass, i, movesNum) {
  let y = makeNewY();
  yMoves.push(y);
  let y1 = yMoves[yMoves.length - 1];
  let y2 = yMoves[yMoves.length - 2];
  let yTotal = y1 - y2;
  $(myclass).animate({ top: y }, duration, function () {
    if (i === movesNum) {
      check(movesNum, 0, yTotal);
    }
  });
  return y;
}

//Tracking Function
const tracking = (itemIndex) => {
  $(animateDiv(`.ball-${itemIndex}`)).stop();
  let movesNum = Math.floor(Math.random() * (15 - 10) + 10);
  for (let i = 0; i <= movesNum; i++) {
    if (i % 2 === 0) {
      animateX(`.ball-${itemIndex}`, i, movesNum);
    } else {
      animateY(`.ball-${itemIndex}`, i, movesNum);
    }
  }
  return;
};

const check = (movesNum, x, y) => {
  let result = [];
  const el = document.querySelector(`.ball-${itemIndex} span`);
  el.style.opacity = 0;

  let direction = "";

  if (movesNum % 2 === 0) {
    if (x > 0) {
      direction = "ArrowRight";
    } else {
      direction = "ArrowLeft";
    }
  } else if (movesNum % 2 === 1) {
    if (y > 0) {
      direction = "ArrowDown";
    } else {
      direction = "ArrowUp";
    }
  }
  console.log(direction);
  if (itemIndex < 20) {
    if (itemIndex != 20) {
      window.addEventListener("keydown", (e) => {
        let key = e.key;
        if (key.toString() === direction) {
          if (result.length < 1) {
            result.push(true);
            finalResult.add({ name: `${itemIndex}`, result: true });
            // calculateResult(finalResult);
          }
          console.log("result is true.");
        } else {
          if (result.length < 1) {
            result.push(false);
            finalResult.add({ name: `${itemIndex}`, result: false });
            // calculateResult(finalResult);
          }
          console.log("result is false.");
        }
        console.log(result);
        return;
      });
    }
    itemIndex++;
    if (itemIndex != 20) {
      tracking(itemIndex);
    }
  }
};

// const calculateResult = (finalResult) => {
//   finalResult.map();
// };

window.addEventListener("load", () => {
  for (let i = 0; i < 20; i++) {
    const ball = document.createElement("div");
    const span = document.createElement("span");
    ball.classList.add("ball");
    ball.classList.add(`ball-${i}`);
    ball.appendChild(span);
    balls.appendChild(ball);
    span.innerHTML = i + 1;
  }
  tracking(itemIndex);
  for (let i = 0; i < 20; i++) {
    animateDiv(`.ball-${i}`);
  }
});
