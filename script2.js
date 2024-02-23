//Export

const continueButton = document.querySelector("#Sub3");
const player1Input = document.querySelector("#inp1");
const player2Input = document.querySelector("#inp2");
const player1SubmitButton = document.querySelector("#Sub1");
const player2SubmitButton = document.querySelector("#Sub2");

player1SubmitButton.addEventListener("click", (e) => {
  e.preventDefault();
  input1Value = player1Input.value;
});

// let input1Value;
// player1Input.addEventListener("input", (e) => {
//   input1Value = e.target.value;
// });

// console.log(player1Name);
