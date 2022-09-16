"use strict";

// const btn0 = document.querySelector(".btn--0");
// const btn1 = document.querySelector(".btn--1");
// const btn2 = document.querySelector(".btn--2");
// const btn4 = document.querySelector(".btn--3");
// const btn3 = document.querySelector(".btn--4");
// const btn5 = document.querySelector(".btn--5");
// const btn6 = document.querySelector(".btn--6");
// const btn7 = document.querySelector(".btn--7");
// const btn8 = document.querySelector(".btn--8");
// const btn9 = document.querySelector(".btn--9");

const btns = document.querySelectorAll(".btn--number");

const btnDot = document.querySelector(".btn--dot");
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

// const displayOutput = function (arr) {
//   outputArray.forEach((el) => {
//     if (output.innerHTML === "0") {
//       output.innerHTML = el;
//     } else {
//       output.innerHTML += el;
//     }
//   });
// };

const add = function (arr) {
  outputArray.push(output.innerHTML);
  if (output.innerHTML != "0") {
    output.innerHTML = "";
    action = btnPlus.innerHTML;

    console.log(outputArray);
  }
};

const displayResult = function () {
  // condition to disable diplaying NaN if accidentaly pressed "=" twice
  if (outputArray.length === 0) return;

  //   add second value to an array
  outputArray.push(output.innerHTML);

  //   Depend on what action have been selected during choosing numbers
  if (action === "+") {
    output.innerHTML = outputArray[0] * 1 + outputArray[1] * 1;
  } else if (action === "/") {
  } else if (action === "-") {
  } else if (action === "x") {
  }

  //   clear array for new operations
  outputArray = [];
  console.log(outputArray);
};

// ////////////////////////////////////////////////////////////////////
// EVENT LISTENERS
btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (output.innerHTML === "0") {
      output.innerHTML = btn.innerHTML;
    } else {
      output.innerHTML += btn.innerHTML;
    }
    console.log(outputArray);
  })
);

// bind used to pass argument without calling function
btnPlus.addEventListener("click", add.bind(outputArray));

btnResult.addEventListener("click", displayResult);

btnClear.addEventListener("click", function () {
  output.innerHTML = 0;
  outputArray = [];
});
