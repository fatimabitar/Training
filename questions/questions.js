let myVid = document.querySelector(".video");
let question1 = document.querySelector(".question-1");
let question2 = document.querySelector(".question-2");
let question3 = document.querySelector(".question-3");

const submit1 = document.querySelector(".submit-1");
const submit2 = document.querySelector(".submit-2");
const submit3 = document.querySelector(".submit-3");


const answers = ["2", "1", "4"];
let points = 0;

window.addEventListener("load", () => {
  let start = 4;
  let startTimer = setInterval(function () {
    start--;
    document.querySelector(".seconds").textContent = start;
    if (start <= 0) {
      clearInterval(startTimer);
      document.querySelector(".countdown").style.display = "none";
    }
  }, 1000);

  setTimeout(() => {
    // myVid.play();
  }, start);

  setTimeout(() => {
    myVid.style.display = "none";
    question1.style.display = "block";
    let timeleft = 10;
    let downloadTimer = setInterval(function () {
      timeleft--;
      document.querySelector("#seconds").textContent = timeleft;
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        question1.style.display = "none";
      }
    }, 1000);
  }, 65000);

  setTimeout(() => {
    question2.style.display = "block";
    let timeleft2 = 10;
    let downloadTimer2 = setInterval(function () {
      timeleft2--;
      document.querySelector("#seconds-1").textContent = timeleft2;

      if (timeleft2 <= 0) {
        clearInterval(downloadTimer2);
        question2.style.display = "none";
      }
    }, 1000);
  }, 75000);

  setTimeout(() => {
    question3.style.display = "block";
    let timeleft2 = 10;
    let downloadTimer2 = setInterval(function () {
      timeleft2--;

      document.querySelector("#seconds-2").textContent = timeleft2;
      if (timeleft2 <= 0) {
        clearInterval(downloadTimer2);
        question3.style.display = "none";
      }
    }, 1000);
  }, 85000);
});

submit1.addEventListener("click", (e) => {
  e.preventDefault();
  const in1 = document.querySelector(".input-1 input").value;
  if (in1 === answers[0]) {
    points += 1;
    document.querySelector(".input-1 input").disabled = true;
  }
});

submit2.addEventListener("click", (e) => {
  e.preventDefault();
  const in2 = document.querySelector(".input-2 input").value;
  if (in2 === answers[1]) {
    points += 1;
    document.querySelector(".input-2 input").disabled = true;
  }
});

submit3.addEventListener("click", (e) => {
  e.preventDefault();
  const in3 = document.querySelector(".input-3 input").value;
  if (in3 === answers[2]) {
    points += 1;
    document.querySelector(".input-3 input").disabled = true;
  }
});
