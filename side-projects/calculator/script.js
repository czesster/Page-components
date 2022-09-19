"use strict";

const btns = document.querySelectorAll(".btn--number");

const btnResult = document.querySelector(".btn--res");
const btnPlus = document.querySelector(".btn--pl");
const btnMinus = document.querySelector(".btn--min");
const btnMultiply = document.querySelector(".btn--mul");
const btnDivide = document.querySelector(".btn--div");
const btnDelete = document.querySelector(".btn--del");
const btnClear = document.querySelector(".btn--c");

const output = document.querySelector(".output-text");

let outputArray = [];
let action;

const add = function () {
  outputArray.push(output.innerHTML);
  if (output.innerHTML != "0") {
    output.innerHTML = "";
    action = btnPlus.innerHTML;
    console.log(outputArray);
  }
};

const divide = function () {
  outputArray.push(output.innerHTML);
  if (output.innerHTML != "0") {
    output.innerHTML = "";
    action = btnDivide.innerHTML;

    console.log(outputArray);
  }
};

const substract = function () {
  outputArray.push(output.innerHTML);
  if (output.innerHTML != "0") {
    output.innerHTML = "";
    action = btnMinus.innerHTML;

    console.log(outputArray);
  }
};

const multiply = function () {
  outputArray.push(output.innerHTML);
  if (output.innerHTML != "0") {
    output.innerHTML = "";
    action = btnMultiply.innerHTML;

    console.log(outputArray);
  }
};

const displayResult = function () {
  // condition to disable diplaying NaN if accidentaly pressed "=" twice
  if (outputArray.length === 0) return;

  //   add another value to an array
  outputArray.push(output.innerHTML);
  console.log(outputArray);

  //   Depend on what action have been selected during choosing numbers
  // ADD
  if (action === "+") {
    output.innerHTML = outputArray.reduce((acc, cur) => acc * 1 + cur * 1);

    // DIVIDE
  } else if (action === "/") {
    // + in the beggining explaination:
    // https://stackoverflow.com/a/12830454
    output.innerHTML = +outputArray
      .reduce((acc, cur) => ((acc * 1) / cur) * 1)
      .toFixed(2);

    // SUBSTRACT
  } else if (action === "-") {
    output.innerHTML = outputArray.reduce((acc, cur) => acc * 1 - cur * 1);

    // MULTIPLY
  } else if (action === "x") {
    output.innerHTML = outputArray.reduce((acc, cur) => acc * 1 * cur * 1);
  }

  //   clear array for new operations
  outputArray = [];
  console.log(outputArray);
};

// ////////////////////////////////////////////////////////////////////
// EVENT LISTENERS
btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    output.innerHTML === "0"
      ? (output.innerHTML = btn.innerHTML)
      : (output.innerHTML += btn.innerHTML);
    console.log(outputArray);
  })
);

btnPlus.addEventListener("click", add);
btnDivide.addEventListener("click", divide);
btnMinus.addEventListener("click", substract);
btnMultiply.addEventListener("click", multiply);

btnResult.addEventListener("click", displayResult);

btnClear.addEventListener("click", function () {
  output.innerHTML = 0;
  outputArray = [];
});
