//import module

// import {
//   continueButton,
//   player1Input,
//   player2Input,
//   player1SubmitButton,
//   player2SubmitButton,
// } from "./script2.js";
// import * as index from "./script2.js";

// import FirstPersonName from "./script2.js";
//tictak.html:

const items = document.querySelectorAll(".list");
const newGame = document.querySelector("#New_Game");
const buttonPressedContainer = document.querySelector(".Show_Score");
const ScoreButton = document.querySelector("#score");
const closeScoreButton = document.querySelector("#closeScoreButton");
const closeInstructionsButton = document.querySelector(
  "#closeInstructionsButton"
);
const xFirstGame = document.querySelector("#XFirstGame");
const oFirstGame = document.querySelector("#OFirstGame");
const xSecondGame = document.querySelector("#XSecondGame");
const oSecondGame = document.querySelector("#OSecondGame");
const xThirdGame = document.querySelector("#XThirdGame");
const oThirdGame = document.querySelector("#OThirdGame");
const xFourthGame = document.querySelector("#XFourthGame");
const oFourthGame = document.querySelector("#OFourthGame");
const instructionsPopUpWindow = document.querySelector(".Div_Instructions");
const instructionsButton = document.querySelector("#instructions");
//index.html:

const continueButton = document.querySelector("#Sub3");
const player1Input = document.querySelector("#inp1");
const player2Input = document.querySelector("#inp2");
const player1SubmitButton = document.querySelector("#Sub1");
const player2SubmitButton = document.querySelector("#Sub2");

// console.log(index.player2SubmitButton);

// console.log(FirstPersonName());
// const frag = document.createDocumentFragment();
// const theUlContainer = document.querySelector("ul");
// const item1 = document.querySelector("#first")
// const item2 = document.querySelector("#second")
// const item3 = document.querySelector("#third")
// const item4 = document.querySelector("#fourth")
// const item5 = document.querySelector("#fifth")
// const item6 = document.querySelector("#sixth")
// const item7 = document.querySelector("#seventh")
// const item8 = document.querySelector("#eighth")
// const item9 = document.querySelector("#ninth")

let counter = 0;
let limit = 5;
let numOfGames = 0;
const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 4, 6],
  [6, 7, 8],
  [1, 4, 7],
  [3, 4, 5],
  [2, 5, 8],
  [0, 4, 8],
];

const arrayNodeList = Array.from(items);
// console.log(arrayNodeList);
const scoreMassage = document.querySelector(".The_Score");
let XO = 9;
let clickedElement = [];

let player1Name = null;

// player1SubmitButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   player1Name = player1Input.value;
//   FirstPersonName(player1Name);
// });

function FirstPersonName(firstPlayer) {
  return firstPlayer;
}

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (XO % 2 !== 0 && !clickedElement.includes(item)) {
      item.textContent = "X";
      XO--;
      clickedElement.push(item); //item or e.target here are both the same.
    } else if (XO % 2 === 0 && !clickedElement.includes(item)) {
      item.textContent = "O";
      XO--;
      clickedElement.push(item); //item or e.target here are both the same.
    }
    counter++;

    if (counter >= limit) {
      theWinner();
    }
  });
});

// console.log(clickedElement);

// const winnerOfTheGame = () => {
//     [arrayNodeList[0], arrayNodeList[3], arrayNodeList[6]].every((cell) => {
//       return (
//         clickedElement.includes(arrayNodeList[cell]) &&
//         arrayNodeList[cell].textContent === "X"
//       );
//     });
//   };

const xIsTheWinner = () => {
  let winnerIsX = false;

  winningCombinations.forEach((el) => {
    let [a, b, c] = el;

    if (
      clickedElement.includes(arrayNodeList[a]) &&
      arrayNodeList[a].textContent === "X" &&
      clickedElement.includes(arrayNodeList[b]) &&
      arrayNodeList[b].textContent === "X" &&
      clickedElement.includes(arrayNodeList[c]) &&
      arrayNodeList[c].textContent === "X"
    ) {
      winnerIsX = true;
    }
  });
  return winnerIsX;
};
const oIsTheWinner = () => {
  let winnerIsO = false;
  winningCombinations.forEach((el) => {
    let [a, b, c] = el;

    if (
      clickedElement.includes(arrayNodeList[a]) &&
      arrayNodeList[a].textContent === "O" &&
      clickedElement.includes(arrayNodeList[b]) &&
      arrayNodeList[b].textContent === "O" &&
      clickedElement.includes(arrayNodeList[c]) &&
      arrayNodeList[c].textContent === "O"
    ) {
      winnerIsO = true;
    }
  });
  return winnerIsO;
};
const theWinner = function () {
  let player1IsTheWinner;
  let player2IsTheWinner;
  if (xIsTheWinner() && !oIsTheWinner()) {
    const html = `<h1 style="font-family: cursive; font-size: 40px"> Player Who chose X won </h1>`;
    scoreMassage.innerHTML = html;
    numOfGames++;
    player1IsTheWinner = true;
    player2IsTheWinner = false;
  } else if (oIsTheWinner() && !xIsTheWinner()) {
    const html = `<h1 style="font-family: cursive; font-size: 40px;"> Player Who chose O won </h1>`;
    scoreMassage.innerHTML = html;
    numOfGames++;
    player1IsTheWinner = false;
    player2IsTheWinner = true;
  }
  if (numOfGames === 1) {
    if (player1IsTheWinner) {
      xFirstGame.textContent = "Win";
      oFirstGame.textContent = "Loss";
    } else if (player2IsTheWinner) {
      xFirstGame.textContent = "Loss";
      oFirstGame.textContent = "Win";
    }
  } else if (numOfGames === 2) {
    if (player1IsTheWinner) {
      xSecondGame.textContent = "Win";
      oSecondGame.textContent = "Win";
    } else if (player2IsTheWinner) {
      xSecondGame.textContent = "Loss";
      oSecondGame.textContent = "Win";
    }
  } else if (numOfGames === 3) {
    if (player1IsTheWinner) {
      xThirdGame.textContent = "Win";
      oThirdGame.textContent = "Loss";
    } else if (player2IsTheWinner) {
      xThirdGame.textContent = "Loss";
      oThirdGame.textContent = "Win";
    }
  } else if (numOfGames === 4) {
    if (player1IsTheWinner) {
      xFourthGame.textContent = "Win";
      oFourthGame.textContent = "Loss";
    } else if (player2IsTheWinner) {
      xFourthGame.textContent = "Loss";
      oFourthGame.textContent = "Win";
    }
  }
};

// const fragment = new DocumentFragment();

newGame.addEventListener("click", (e) => {
  scoreMassage.textContent = "";
  items.forEach((item) => {
    item.textContent = "";
    clickedElement = [];
    XO = 9;
  });
});

ScoreButton.addEventListener("click", () => {
  buttonPressedContainer.style.opacity = 1;
  buttonPressedContainer.style.pointerEvents = "visible";
});

instructionsButton.addEventListener("click", () => {
  instructionsPopUpWindow.style.opacity = 1;
  instructionsPopUpWindow.style.pointerEvents = "visible";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    buttonPressedContainer.style.opacity = 0;
    buttonPressedContainer.style.pointerEvents = "none";
    instructionsPopUpWindow.style.opacity = 0;
    instructionsPopUpWindow.style.pointerEvents = "none";
  }
});

closeScoreButton.addEventListener("click", () => {
  buttonPressedContainer.style.opacity = 0;
  buttonPressedContainer.style.pointerEvents = "none";
});
closeInstructionsButton.addEventListener("click", () => {
  instructionsPopUpWindow.style.opacity = 0;
  instructionsPopUpWindow.style.pointerEvents = "none";
});
