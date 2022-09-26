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
let action = "";

const operation = function (op) {
  if (action && action !== op.path[0].innerHTML) {
    action = op.path[0].innerHTML;
    console.log(`this is different ${action}`);
  } else {
    outputArray.push(output.innerHTML);

    output.innerHTML = "";
    action = op.path[0].innerHTML;
    console.log(outputArray);
    console.log(action);
  }
};

const add = function () {
  // condition needed to change action you want to execute after selecting another action
  if (action) {
    action = btnPlus.innerHTML;
  } else {
    outputArray.push(output.innerHTML);

    output.innerHTML = "";
    action = btnPlus.innerHTML;

    console.log(outputArray);
    console.log(action);
  }
};

const divide = function () {
  if (action) {
    action = btnDivide.innerHTML;
  } else {
    outputArray.push(output.innerHTML);

    output.innerHTML = "";
    action = btnDivide.innerHTML;

    console.log(outputArray);
    console.log(action);
  }
};

const substract = function () {
  if (action) {
    action = btnMinus.innerHTML;
  } else {
    outputArray.push(output.innerHTML);

    output.innerHTML = "";
    action = btnMinus.innerHTML;

    console.log(outputArray);
    console.log(action);
  }
};

const multiply = function () {
  if (action) {
    action = btnMultiply.innerHTML;
  } else {
    outputArray.push(output.innerHTML);
    output.innerHTML = "";
    action = btnMultiply.innerHTML;

    console.log(outputArray);
    console.log(action);
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
    // + in the beginning explaination:
    // https://stackoverflow.com/a/12830454
    output.innerHTML = +outputArray
      .reduce((acc, cur) => ((acc * 1) / cur) * 1)
      .toFixed(2);

    // SUBSTRACT
  } else if (action === "-") {
    output.innerHTML = outputArray.reduce((acc, cur) => acc * 1 - cur * 1);

    // MULTIPLY
  } else if (action === "x") {
    output.innerHTML = +outputArray
      .reduce((acc, cur) => acc * 1 * cur * 1)
      .toFixed(2);
  }

  //   clear array and action for new operations
  action = "";
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

btnPlus.addEventListener("click", operation.bind(btnPlus));
btnDivide.addEventListener("click", operation.bind(btnDivide));
btnMinus.addEventListener("click", operation.bind(btnMinus));
btnMultiply.addEventListener("click", operation.bind(btnMultiply));

btnResult.addEventListener("click", displayResult);

btnClear.addEventListener("click", function () {
  output.innerHTML = 0;
  outputArray = [];
});

btnDelete.addEventListener("click", function () {
  if (output.innerHTML.slice(0, -1) === "") {
    output.innerHTML = 0;
  } else {
    output.innerHTML = output.innerHTML.slice(0, -1);
  }
});
