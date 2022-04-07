const text = document.querySelector(".text");
const shapesContainer = document.querySelector(".shapes-container");
const svgs = document.querySelectorAll(".svgs");
const randomShape = document.querySelector(".random-shape");
const numbers = document.querySelector(".numbers");
// let direction = "right";
let levelTime = 0.2;
let time = 15000;
let i = 1;
let flag = true;
let result = [];
let points = 0;

// const randomNumber = Math.floor(Math.random() * 8);

const fillColors = [
  "#ffa041",
  "#378c18",
  "#d13010",
  "#74e6e2",
  "#3661fc",
  "#efd9ff",
  "#a953db",
  "#f0ed25",
];
/* Shapes data */
let shapes = [
  {
    id: 1,
    title: "shape-1",
    viewBox: "0 0 253 135",
    fill: "none",
    d: "M252.254 11.5883C252.255 11.5885 252.255 11.5887 252 12.5556L252.255 11.5887L253 11.7853V121.416L251.701 121.01L252 120.056C251.701 121.01 251.702 121.01 251.701 121.01L251.685 121.005L251.634 120.989C251.588 120.975 251.518 120.953 251.427 120.925C251.243 120.869 250.969 120.786 250.61 120.679C249.891 120.464 248.83 120.153 247.465 119.767C244.736 118.995 240.792 117.926 235.942 116.738C226.239 114.361 212.917 111.51 198.432 109.61C183.942 107.709 168.322 106.764 154.013 108.183C139.687 109.604 126.788 113.384 117.631 120.831C108.059 128.617 95.9167 132.474 83.1671 133.916C70.4152 135.36 56.9912 134.395 44.7826 132.481C32.5693 130.566 21.5391 127.694 13.5643 125.302C9.57578 124.106 6.34875 123.029 4.11688 122.251C3.00089 121.861 2.13352 121.547 1.54399 121.329C1.24922 121.22 1.02389 121.135 0.87165 121.077C0.795531 121.048 0.737684 121.026 0.698564 121.011L0.653986 120.994L0.642338 120.989L0.639192 120.988C0.638367 120.988 0.63784 120.988 1 120.056L0.63784 120.988L0 120.74V11.1764L1.31084 11.6051L1 12.5556C1.31084 11.6051 1.31044 11.605 1.31084 11.6051L1.32373 11.6093L1.36536 11.6228C1.40261 11.6348 1.45879 11.6529 1.53343 11.6768C1.68271 11.7245 1.90582 11.7951 2.19903 11.8864C2.78545 12.069 3.65221 12.3341 4.7694 12.6626C7.0039 13.3196 10.2396 14.2303 14.2376 15.2424C22.2354 17.2672 33.2742 19.6958 45.4443 21.3143C57.6188 22.9334 70.8963 23.7378 83.3802 22.529C95.8731 21.3192 107.492 18.1007 116.42 11.7411C125.761 5.087 138.974 1.81477 153.408 0.590389C167.864 -0.635951 183.67 0.182835 198.298 1.8117C212.932 3.44113 226.417 5.88464 236.242 7.92011C241.155 8.93802 245.155 9.85432 247.929 10.5165C249.315 10.8476 250.395 11.1152 251.129 11.3002C251.496 11.3928 251.777 11.4647 251.966 11.5135C252.026 11.529 252.077 11.5422 252.119 11.553L252.181 11.5693L252.236 11.5836L252.254 11.5883ZM2 13.9185C2.56513 14.0926 3.30527 14.3167 4.20521 14.5814C6.46094 15.2446 9.72129 16.1621 13.7468 17.1812C21.7958 19.219 32.9133 21.6654 45.1807 23.2968C57.4437 24.9277 70.8849 25.7483 83.5729 24.5197C96.2519 23.2919 108.258 20.0104 117.58 13.3701C126.489 7.02413 139.276 3.79635 153.577 2.58323C167.854 1.37207 183.518 2.17828 198.077 3.79942C212.631 5.41999 226.052 7.85149 235.836 9.87852C240.728 10.8919 244.708 11.8037 247.464 12.4618C248.842 12.7909 249.914 13.0565 250.64 13.2396C250.772 13.2727 250.892 13.303 251 13.3306V118.708C250.28 118.494 249.274 118.2 248.009 117.842C245.26 117.065 241.294 115.99 236.418 114.795C226.667 112.407 213.271 109.539 198.693 107.627C184.12 105.715 168.334 104.753 153.815 106.193C139.313 107.632 125.962 111.477 116.369 119.28C107.191 126.745 95.4583 130.513 82.9422 131.929C70.4286 133.345 57.1963 132.403 45.0924 130.505C32.9932 128.608 22.0546 125.761 14.1388 123.387C10.182 122.2 6.98328 121.133 4.7757 120.362C3.67197 119.977 2.81619 119.667 2.23751 119.453C2.1523 119.421 2.0731 119.392 2 119.365V13.9185Z",
  },
  {
    id: 2,
    title: "shape-2",
    viewBox: "0 0 101 98",
    fill: "none",
    d: "M1 50.5L49 1L99.5 50.5L49 96.5L1 50.5Z",
  },
  {
    id: 3,
    title: "shape-3",
    viewBox: "0 0 93 83",
    fill: "none",
    d: "M46.5 3.05558L56.444 31.767L56.677 32.4397L57.3889 32.4397H89.3836L63.5554 50.0442L62.9234 50.475L63.1737 51.1978L73.0736 79.7819L47.0632 62.0531L46.5 61.6693L45.9368 62.0531L19.9264 79.7819L29.8263 51.1978L30.0766 50.475L29.4446 50.0442L3.61641 32.4397H35.6111L36.323 32.4397L36.556 31.767L46.5 3.05558Z",
  },
  {
    id: 4,
    title: "shape-4",
    viewBox: "0 0 142 115",
    fill: "none",
    d: "M1.5 50L68 2L140.5 50L114.5 113.5H27.5L1.5 50Z",
  },
  {
    id: 5,
    title: "shape-5",
    viewBox: "0 0 147 79",
    fill: "none",
    d: "M1.5 39L27.5 1.5H132C153.396 33.7367 147.448 49.83 132 78H27.5L1.5 39Z",
  },
  {
    id: 6,
    title: "shape-6",
    viewBox: "0 0 129 97",
    fill: "none",
    d: "M42 50.5L3 1.5H81.5L127.5 50.5L81.5 95.5H3L42 50.5Z",
  },
  {
    id: 7,
    title: "shape-7",
    viewBox: "0 0 90 90",
    fill: "none",
    d: "M88 1H2L24.3677 89H68.7175L88 1Z",
  },
  {
    id: 8,
    title: "shape-8",
    viewBox: "0 0 94 79",
    fill: "none",
    d: "M93 39.5C93 60.6071 72.575 78 47 78C21.425 78 1 60.6071 1 39.5C1 18.3929 21.425 1 47 1C72.575 1 93 18.3929 93 39.5Z",
  },
];

//a fnction to shuffle an array
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

const generateText = (direction) => {
  text.innerHTML = `Please cover your ${direction} eye with your hand and focus on the middle figure that will appear on the screen now.`;
};
const randomNumber = Math.floor(Math.random() * 8);
let shuffeledShapes = shuffle(shapes);
let shuffeledFill = shuffle(fillColors);

const generate = () => {
  //Generate Random Shapes
  shuffeledShapes.forEach((item) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    shapesContainer.appendChild(svg);
    svg.setAttribute("width", "40");
    svg.setAttribute("height", "40");
    svg.setAttribute("id", item.id);
    svg.setAttribute("viewBox", item.viewBox);
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("fill", shuffeledFill[item.id - 1]);
    svg.appendChild(path);
    path.setAttribute("d", item.d);
    path.setAttribute("stroke", "#000");
    path.setAttribute("strokeWidth", "2");
  });

  //Generate the random shape in the middle
  const randomSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const randomPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  randomShape.appendChild(randomSvg);
  randomSvg.setAttribute("width", "40");
  randomSvg.setAttribute("height", "40");
  randomSvg.setAttribute("id", shuffeledShapes[randomNumber].id);
  randomSvg.setAttribute("viewBox", shuffeledShapes[randomNumber].viewBox);
  randomSvg.setAttribute("xmlns", "http://www.w3.org/2000/randomSvg");
  randomSvg.setAttribute("fill", "none");
  randomSvg.appendChild(randomPath);
  randomPath.setAttribute("d", shuffeledShapes[randomNumber].d);
  randomPath.setAttribute("stroke", "#000");
  randomPath.setAttribute("strokeWidth", "2");

  //Generate Numbers Interface
  shuffeledShapes.map((item, index) => {
    const itemdiv = document.createElement("div");
    itemdiv.classList.add("number__item");
    numbers.appendChild(itemdiv);
    itemdiv.setAttribute("id", item.id);
    itemdiv.innerHTML = i++;
    return itemdiv;
  });
};

//Detecate user Input and get the result
const check = (shuffeledShapes, randomNumber) => {
  const randomId = shuffeledShapes[randomNumber].id;

  window.addEventListener("keydown", (e) => {
    try {
      let key = e.key;
      let userInput = shuffeledShapes[key - 1].id;
      if (randomId === userInput) {
        if (result.length < 1) {
          result.push(true);
        }
      } else {
        if (result.length < 1) {
          result.push(false);
        }
      }
      console.log(result);
    } catch (error) {
      console.error("error");
    }
  });
};

window.addEventListener("load", () => {
  generateText("right");
  generate();
  //gsap
  const tl = gsap.timeline();
  tl.to(".text", { display: "none", duration: 3 })
    .from(".shapes-container", { opacity: 1, duration: levelTime })
    .to(".shapes-container", {
      display: "none",
      duration: 0.5,
    })
    .from(".numbers", {
      display: "none",
      duration: 0.1,
      onComplete: check(shuffeledShapes, randomNumber),
    });
  let timeleft = time / 1000;
  let downloadTimer = setInterval(function () {
    timeleft--;
    document.querySelector("#seconds").textContent = timeleft;
    if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);

  setTimeout(() => {
    window.location = "left.html";
  }, time);
});
