"use strict";

// TO DO
// Add small window above result to display current array elements and operation between (.join?)
// max 7 characters in output
// max 22 characters in outputMem

const btns = document.querySelectorAll(".btn--number");

const btnResult = document.querySelector(".btn--res");
const btnPlus = document.querySelector(".btn--pl");
const btnMinus = document.querySelector(".btn--min");
const btnMultiply = document.querySelector(".btn--mul");
const btnDivide = document.querySelector(".btn--div");
const btnDelete = document.querySelector(".btn--del");
const btnClear = document.querySelector(".btn--c");

const outputContainer = document.querySelector(".output");
const output = document.querySelector(".output-text");
const outputMem = document.querySelector(".output-mem");

let outputArray, action, result;

// init
const init = function () {
  outputMem.innerHTML = "0";
  output.innerHTML = "0";
  outputArray = [];
  action = "";
};
init();

const operation = function (op) {
  // Condition to make possible change operation after selecting wrong action
  if (action && action !== op.path[0].innerHTML) {
    action = op.path[0].innerHTML;
    console.log(`this is different ${action}`);
    outputMem.innerHTML = outputMem.innerHTML.slice(0, -1) + `${action}`;
  } else {
    outputArray.push(output.innerHTML);

    // condition to display values while using action few times without hitting result btn
    if (outputMem.innerHTML === "0") {
      outputMem.innerHTML = outputArray.join(`${action}`);
    } else {
      outputMem.innerHTML += outputArray.join(`${action}`);
    }

    outputMem.innerHTML = outputArray.join(`${action}`);

    output.innerHTML = "";
    action = op.path[0].innerHTML;
    outputMem.innerHTML += action;

    console.log(outputArray);
    console.log(action);
  }
};

const displayResult = function () {
  // condition to disable diplaying NaN if accidentaly pressed "=" twice
  if (outputArray.length === 0) return;

  //   add another value to an array
  outputArray.push(output.innerHTML);
  outputMem.innerHTML += output.innerHTML;
  console.log(outputArray);

  //   Depend on what action have been selected during choosing numbers
  // ADD
  if (action === "+") {
    result = outputArray.reduce((acc, cur) => acc * 1 + cur * 1);

    // DIVIDE
  } else if (action === "/") {
    // + in the beginning explaination:
    // https://stackoverflow.com/a/12830454
    result = +outputArray
      .reduce((acc, cur) => ((acc * 1) / cur) * 1)
      .toFixed(2);

    // SUBSTRACT
  } else if (action === "-") {
    result = +outputArray.reduce((acc, cur) => acc * 1 - cur * 1).toFixed(5);

    // MULTIPLY
  } else if (action === "x") {
    result = +outputArray.reduce((acc, cur) => acc * 1 * cur * 1).toFixed(5);
  }

  if (String(result).length > 7) {
    result = "Err";
  }

  // need to change display restriction to window width rather than digit count
  // if (
  //   output.getBoundingClientRect.width >
  //   0.8 * outputContainer.getBoundingClientRect.width
  // ) {
  //   result = "Err";
  // }

  output.innerHTML = result;
  //   clear array and action for new operations
  action = "";
  outputArray = [];
  console.log(outputArray);
};

// ////////////////////////////////////////////////////////////////////
// EVENT LISTENERS
btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (output.innerHTML.length < 7 && outputMem.innerHTML.length <= 16) {
      output.innerHTML === "0"
        ? (output.innerHTML = btn.innerHTML)
        : (output.innerHTML += btn.innerHTML);

      console.log(outputArray);
    }
    if (outputMem.innerHTML.length >= 16) {
      displayResult();
    }
  })
);

btnPlus.addEventListener("click", operation.bind(btnPlus));
btnDivide.addEventListener("click", operation.bind(btnDivide));
btnMinus.addEventListener("click", operation.bind(btnMinus));
btnMultiply.addEventListener("click", operation.bind(btnMultiply));

btnResult.addEventListener("click", displayResult);

btnClear.addEventListener("click", function () {
  outputMem.innerHTML = 0;
  output.innerHTML = 0;
  outputArray = [];
});

btnDelete.addEventListener("click", function () {
  // condition to stop user from deleting letters from 'Err'
  if (!Number(output.innerHTML)) return;

  if (output.innerHTML.slice(-1) === "") {
    output.innerHTML = 0;
    outputMem.innerHTML = 0;
    outputArray = [];
  } else {
    output.innerHTML = output.innerHTML.slice(0, -1);
    console.log(`else`);
  }
});
