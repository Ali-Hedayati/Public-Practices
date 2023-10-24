const statusDisplay = document.querySelector(".game--status");

let currentPlayer = "X";

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//setting an array in local storage
let XO = ["", "", "", "", "", "", "", "", ""];
let string = JSON.stringify(XO);
localStorage.setItem("XO", string);

statusDisplay.innerHTML = currentPlayerTurn();

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  let data = clickedCell.getAttribute("data-cell-index");

  let checkstring = localStorage.getItem("XO");
  let checkarray = JSON.parse(checkstring);

  if (checkarray[data] === "X" || checkarray[data] == "O") {
    return;
  } else {
    clickedCell.innerHTML = currentPlayer;

    // store in local
    let retString = localStorage.getItem("XO");
    let retArray = JSON.parse(retString);

    retArray[data] = currentPlayer;
    let string = JSON.stringify(retArray);
    localStorage.setItem("XO", string);

    handlePlayerChange();
  }
}

function handleRestClick(event) {
  document.querySelectorAll(".cell").forEach((cell) => {
    (cell.innerHTML = ""), (cell.style.pointerEvents = "auto");
  });

  //reset local storage
  let resetlocal = localStorage.getItem("XO");
  resetlocal = ["", "", "", "", "", "", "", "", ""];
  let resetedstring = JSON.stringify(resetlocal);
  localStorage.setItem("XO", resetedstring);
  console.log(localStorage.getItem("XO"));

  currentPlayer = "O";
  handlePlayerChange();
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));

document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestClick);


  //another aproach
//   const statusDisplay = document.querySelector('.game--status');

// let currentPlayer = 'X';
// let gameState = ['', '', '', '', '', '', '', '', ''];
// let gameActive = true;

// const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// statusDisplay.innerHTML = currentPlayerTurn();

// function handleCellPlayed(clickedCell, clickedCellIndex) {
//   gameState[clickedCellIndex] = currentPlayer;
//   clickedCell.innerHTML = currentPlayer;
// }

// function handlePlayerChange() {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   statusDisplay.innerHTML = currentPlayerTurn();
// }

// function handleCellClick(clickedCellEvent) {
//   const clickedCell = clickedCellEvent.target;
//   const clickedCellIndex = parseInt(
//     clickedCell.getAttribute('data-cell-index')
//   );

//   if (gameState[clickedCellIndex] !== '') {
//     return;
//   }

//   handleCellPlayed(clickedCell, clickedCellIndex);
//   handlePlayerChange();
// }

// function handleRestartGame() {
//   currentPlayer = 'X';
//   gameState = ['', '', '', '', '', '', '', '', ''];
//   statusDisplay.innerHTML = currentPlayerTurn();
//   document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
// }

// document
//   .querySelectorAll('.cell')
//   .forEach(cell => cell.addEventListener('click', handleCellClick));
// document
//   .querySelector('.game--restart')
//   .addEventListener('click', handleRestartGame);

