let countDisplay = document.getElementById("counter-display");
let incrementButton = document.getElementById("increment-button");
let decrementButton = document.getElementById("decrement-button");
let resetButton = document.getElementById("reset-button");

let count = 0;
countDisplay.innerText = count;

function increase() {
    count++;
    countDisplay.innerText = count;
}
function decrease() {
    count--;
    countDisplay.innerText = count;
}
function reset() {
    count = 0;
    countDisplay.innerText = count;
}