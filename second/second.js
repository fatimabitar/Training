//Global Values
let itemIndex = 0;
let duration = 1000;
let transition = 1;
const wrapper = document.querySelector(".outer-wrapper");
const balls = document.querySelector(".balls-container");
const ballsFill = ["#DD222C", " #334FCC", "#F0F30C", "#30CF3D"];
let aMoves = [];
let bMoves = [];
let cMoves = [];
let dMoves = [];
let aCount = 0;
let bCount = 0;
let cCount = 0;
let dCount = 0;

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
function makeNewDegree() {
  const deg = 90;
  let newDeg =
    Math.ceil(Math.random() * deg) * (Math.round(Math.random()) ? 1 : -1);
  return newDeg;
}

function animateA(myclass) {
  let d = makeNewDegree();
  aMoves.push(d);
  aCount++;
  $(myclass).animate({ opacity: 1 }, duration, function () {
    animateA(myclass);
    $(this).css({ transform: "rotate(" + d + "deg)" });
    if (aCount === 11) {
      $(myclass).stop();
      let x1 = aMoves[aMoves.length - 2];
      let x2 = aMoves[aMoves.length - 3];
      let xTotal = x1 - x2;
      console.log(xTotal);
      check(xTotal);
      console.log(aMoves);
      aMoves = [];
    }
  });
}

function animateB(myclass) {
  let d = makeNewDegree();
  bMoves.push(d);
  bCount++;
  $(myclass).animate({ opacity: 1 }, duration, function () {
    animateB(myclass);
    $(this).css({ transform: "rotate(" + d + "deg)" });
    if (bCount === 22) {
      let x1 = bMoves[bMoves.length - 2];
      let x2 = bMoves[bMoves.length - 3];
      let xTotal = x1 - x2;
      console.log(xTotal);
      check(xTotal);
      console.log(bMoves);
      bMoves = [];
    }
  });
}

function animateC(myclass) {
  let d = makeNewDegree();
  cMoves.push(d);
  cCount++;
  $(myclass).animate({ opacity: 1 }, duration, function () {
    animateC(myclass);
    $(this).css({ transform: "rotate(" + d + "deg)" });
    if (cCount === 33) {
      let x1 = cMoves[cMoves.length - 2];
      let x2 = cMoves[cMoves.length - 3];
      let xTotal = x1 - x2;
      console.log(xTotal);
      check(xTotal);
      console.log(cMoves);
      cMoves = [];
    }
  });
}

function animateD(myclass) {
  let d = makeNewDegree();
  dMoves.push(d);
  dCount++;
  $(myclass).animate({ opacity: 1 }, duration, function () {
    animateD(myclass);
    $(this).css({ transform: "rotate(" + d + "deg)" });
    if (dCount === 44) {
      let x1 = dMoves[dMoves.length - 2];
      let x2 = dMoves[cMoves.length - 3];
      let xTotal = x1 - x2;
      console.log(xTotal);
      check(xTotal);
      console.log(dMoves);
      dMoves = [];
    }
  });
}

const check = (xTotal) => {
  let result = [];
  const el = document.querySelector(`.ball-${itemIndex}`);
  el.style.background = "#fff";
  el.style.zIndex = "10";

  let direction = "";

  if (xTotal < 0) {
    direction = "ArrowRight";
  } else {
    direction = "ArrowLeft";
  }
  console.log(direction);
  if (itemIndex < 4) {
    if (itemIndex != 4) {
      window.addEventListener("keydown", (e) => {
        let key = e.key;
        if (key.toString() === direction) {
          if (result.length < 1) {
            result.push(true);
            finalResult.add({ name: `${itemIndex}`, result: true });
          }
          console.log("result is true.");
        } else {
          if (result.length < 1) {
            result.push(false);
            finalResult.add({ name: `${itemIndex}`, result: false });
          }
          console.log("result is false.");
        }
        console.log(result);
        return;
      });
    }
    itemIndex++;
  }
};
window.addEventListener("load", () => {
  const colors = shuffle(ballsFill);
  for (let i = 0; i < 4; i++) {
    let ball = document.querySelector(`.ball-${i}`);
    ball.style.background = colors[i];
    ball.style.border = `3px solid ${colors[i]}`;
  }
  // wrapper.style.WebkitTransition = `all linear ${transition}`;
  animateA(".outer-0");
  animateB(".outer-1");
  animateC(".outer-2");
  animateD(".outer-3");
});
