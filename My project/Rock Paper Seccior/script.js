let userBtn = document.querySelectorAll(".child");
let winner = document.querySelector("#winner");
let arr = ["Rock", "Paper", "Seccior"];

userBtn.forEach((val) => {
    val.addEventListener("click", () => {
        let ramdomIndex = Math.floor(Math.random() * arr.length);
        let computer = arr[ramdomIndex];

        if (val.textContent == "Rock" && computer == "Paper") {
            winner.textContent = "computer won";
        } else if (val.textContent == "Rock" && computer == "Seccior") {
            winner.textContent = "you won";
        } else if (val.textContent == "Seccior" && computer == "Paper") {
            winner.textContent = "you won";
        } else if (val.textContent == "Seccior" && computer == "Rock") {
            winner.textContent = "computer won";
        } else if (val.textContent == "Paper" && computer == "Seccior") {
            winner.textContent = "computer won";
        } else if (val.textContent == "Paper" && computer == "Rock") {
            winner.textContent = "you won";
        }
        if (val.textContent === computer) {
            winner.textContent = "its a draw";
        }
    });
});
