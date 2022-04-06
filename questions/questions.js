let myVid = document.querySelector(".video");
let question1 = document.querySelector(".question-1");
let question2 = document.querySelector(".question-2");
let question3 = document.querySelector(".question-3");

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
    console.log("60 second is passed");
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
