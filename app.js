const boxes = document.querySelectorAll(".box");
const time = document.querySelector("#time");
let score = document.querySelector("#score");
const body = document.querySelector("body");

let result = 0;
let interval;

let currentTime = time.textContent;

function startgame() {
  interval = setInterval(countdown, 1000);

  function moveDuck() {
    setInterval(randomBox, 1000);
  }
  moveDuck();
}

function randomBox() {
  boxes.forEach((box) => {
    box.classList.remove("duck");
    box.classList.remove("thunder");
  });

  let randomPos = boxes[Math.floor(Math.random() * 9)];
  randomPos.classList.add("duck");
}

boxes.forEach((box) => box.addEventListener("click", hit));
function hit() {
  if (this.classList.contains("duck")) {
    this.classList.add("thunder");
    result++;
    score.textContent = result;
  } else {
    console.log("miss");
  }
}

function countdown() {
  currentTime--;
  time.textContent = currentTime;

  if (currentTime === 0) {
    alert(`game over. twoj wynik to ${result}`);
    body.style.display = "none";
    clearInterval(interval);
  }
}
