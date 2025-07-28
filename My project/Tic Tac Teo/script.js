let cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
cells.forEach(cell => {
    cell.addEventListener("click", function() {
        if (currentPlayer === 'X' && cell.textContent === '') {
            cell.textContent = 'X';
            currentPlayer = 'O';
        } if (currentPlayer === 'O' && cell.textContent === '') {
            cell.textContent = 'O';
            currentPlayer = 'X';
        }
        
        cell.ariaDisabled = true;
        checkWinner();
    });
});

function checkWinner() {
    if (cells[0].textContent && cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent) {
        alert(cells[0].textContent + ' wins!');
        resetGame();
    }else if (cells[3].textContent && cells[3].textContent === cells[4].textContent && cells[4].textContent === cells[5].textContent){
        alert(cells[3].textContent + ' wins!');
        resetGame();
    }else if (cells[6].textContent && cells[6].textContent === cells[7].textContent && cells[7].textContent === cells[8].textContent){
        alert(cells[6].textContent + ' wins!');
        resetGame();
    }else if (cells[0].textContent && cells[0].textContent === cells[3].textContent && cells[3].textContent === cells[6].textContent){
        alert(cells[0].textContent + ' wins!');
        resetGame();
    }else if (cells[1].textContent && cells[1].textContent === cells[4].textContent && cells[4].textContent === cells[7].textContent){
        alert(cells[1].textContent + ' wins!');
        resetGame();
    }else if (cells[2].textContent && cells[2].textContent === cells[5].textContent && cells[5].textContent === cells[8].textContent){
        alert(cells[2].textContent + ' wins!');
        resetGame();
    } else if (cells[0].textContent && cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent){
        alert(cells[0].textContent + ' wins!');
        resetGame();
    } else if (cells[2].textContent && cells[2].textContent === cells[4].textContent && cells[4].textContent === cells[6].textContent){
        alert(cells[2].textContent + ' wins!');
        resetGame();
    }if(Array.from(cells).every(cell => cell.textContent !== '')) {
        alert("It's a draw!");
        resetGame();
    }
}
function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.ariaDisabled = false;
    });
    currentPlayer = 'X';
}

document.querySelector("#reset").addEventListener("click", resetGame);