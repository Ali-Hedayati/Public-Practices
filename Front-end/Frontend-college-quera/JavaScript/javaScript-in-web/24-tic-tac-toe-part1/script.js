let xy = 0;
let alldivs = document.getElementsByTagName('div');
let role = document.querySelector('h2');
let pinrole = document.createElement('p');
let contain = alldivs[0];
pinrole.innerHTML = "It's X's turn";
role.append(pinrole)
//role.innerHTML = "It's X's turn";
function WhoesTurn(xy) {
    if (xy == 1) {
        pinrole.innerHTML = "It's O's turn";
        xy = 0
        console.log("It's O's turn")
    }
    else {
        pinrole.innerHTML = "It's X's turn";
        xy = 1
    }
    role.append(pinrole)
}

let cells = document.getElementsByClassName('cell')

contain.onclick = function (event) {
    let e = event.target.getAttribute('data-cell-index');
    e = parseInt(e)
    if (cells[e].className == "used") {
        console.log('bos')
    }
    let Span = document.createElement('div');
    if (xy == 0) {
        Span.innerHTML = "X";
        xy = 1;
    }
    else {
        Span.innerHTML = "O";
        xy = 0;
    }
    WhoesTurn(xy)
    cells[e].appendChild(Span);
    cells[e].classList.add("used");
}

//another way to answer:
// const statusDisplay = document.querySelector('.game--status');

// let currentPlayer = 'X';

// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// statusDisplay.innerHTML = currentPlayerTurn();

// function handlePlayerChange() {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   statusDisplay.innerHTML = currentPlayerTurn();
// }

// function handleCellClick(clickedCellEvent) {
//   const clickedCell = clickedCellEvent.target;

//   clickedCell.innerHTML = currentPlayer;
//   handlePlayerChange();
// }

// document
//   .querySelectorAll('.cell')
//   .forEach(cell => cell.addEventListener('click', handleCellClick));
