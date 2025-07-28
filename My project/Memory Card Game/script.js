const container = document.getElementById("container");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const restartButton = document.getElementById("restart");

let emojis = ["🍎", "🍌", "🍇", "🍓", "🍉", "🍊", "🍍", "🍒"];
let cardsArray = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedCount = 0;
let score = 0;
let time = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    time++;
    timeElement.textContent = time;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetGame() {
  container.innerHTML = "";
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  matchedCount = 0;
  score = 0;
  time = 0;
  scoreElement.textContent = 0;
  timeElement.textContent = 0;
  stopTimer();
  setupGame();
}

function setupGame() {
  cardsArray = [...emojis, ...emojis];
  cardsArray.sort(() => 0.5 - Math.random());

  cardsArray.forEach((emoji) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.emoji = emoji;
    card.innerHTML = "";
    container.appendChild(card);
  });

  container.addEventListener("click", handleCardClick);
  startTimer();
}

function handleCardClick(e) {
  const clicked = e.target;

  if (
    !clicked.classList.contains("card") ||
    clicked.classList.contains("flipped") ||
    lockBoard
  ) return;

  clicked.classList.add("flipped");
  clicked.innerHTML = clicked.dataset.emoji;

  if (!firstCard) {
    firstCard = clicked;
    return;
  }

  secondCard = clicked;
  lockBoard = true;

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    score += 10;
    matchedCount += 2;
    scoreElement.textContent = score;
    resetTurn();

    if (matchedCount === cardsArray.length) {
      stopTimer();
      alert(`🎉 Game completed in ${time} seconds with score ${score}!`);
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard.innerHTML = "";
      secondCard.innerHTML = "";
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

// Restart game on button click
restartButton.addEventListener("click", resetGame);

// Start the game on first load
setupGame();
