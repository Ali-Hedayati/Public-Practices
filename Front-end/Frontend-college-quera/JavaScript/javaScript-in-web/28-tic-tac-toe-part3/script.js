const statusDisplay = document.querySelector(".game--status");
let won = 0;
let currentPlayer = "X";
let draw = 0;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

//setting an array in local storage
let XO = ["", "", "", "", "", "", "", "", ""];
let string = JSON.stringify(XO);
localStorage.setItem("XO", string);

statusDisplay.innerHTML = currentPlayerTurn();

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
  draw++;
  if (draw === 9) return (statusDisplay.innerHTML = " Game ended in a draw");
}

function handleCellClick(clickedCellEvent) {
  console.log(draw);
  const clickedCell = clickedCellEvent.target;
  let data = clickedCell.getAttribute("data-cell-index");

  let checkstring = localStorage.getItem("XO");
  let checkarray = JSON.parse(checkstring);

  //check if a cell is full or not
  if (checkarray[data] === "X" || checkarray[data] == "O" || won === 1) {
    return;
  } else {
    clickedCell.innerHTML = currentPlayer;

    // store in local
    let retString = localStorage.getItem("XO");
    let retArray = JSON.parse(retString);

    retArray[data] = currentPlayer;
    let string = JSON.stringify(retArray);
    localStorage.setItem("XO", string);

    // check winner
    whoWin();
  }
}

//check who is winner function
function whoWin() {
  let winnerString = localStorage.getItem("XO");
  let winnerArray = JSON.parse(winnerString);
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      winnerArray[a] &&
      winnerArray[a] === winnerArray[b] &&
      winnerArray[a] === winnerArray[c]
    ) {
      console.log(won);
      won = 1;
      return (statusDisplay.innerHTML = `Player ${winnerArray[a]}'has won`);
    }
  }

  if (won === 0) handlePlayerChange();
}

//reset function
function handleRestClick(event) {
  document.querySelectorAll(".cell").forEach((cell) => {
    (cell.innerHTML = ""), (cell.style.pointerEvents = "auto");
  });

  //reset local storage
  let resetlocal = localStorage.getItem("XO");
  resetlocal = ["", "", "", "", "", "", "", "", ""];
  let resetedstring = JSON.stringify(resetlocal);
  localStorage.setItem("XO", resetedstring);

  currentPlayer = "O";

  won = 0;
  handlePlayerChange();
  draw = 0;
}

document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));

document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestClick);

//another aproach
