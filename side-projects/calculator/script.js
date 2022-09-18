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

const displayResult = function () {
  // condition to disable diplaying NaN if accidentaly pressed "=" twice
  if (outputArray.length === 0) return;

  //   add another value to an array
  outputArray.push(output.innerHTML);
  console.log(outputArray);

  //   Depend on what action have been selected during choosing numbers

  // ADD
  if (action === "+") {
    let sum = 0;
    for (let i = 0; i < outputArray.length; i++) {
      sum += outputArray[i] * 1;
      console.log(sum);
    }
    output.innerHTML = sum;

    // DIVIDE
  } else if (action === "/") {
    // round to 2 places after coma
    // fix to work on few divide btn clicks
    output.innerHTML = ((outputArray[0] * 1) / outputArray[1]) * 1;

    // SUBSTRACT
  } else if (action === "-") {
    let sub = outputArray[0];
    console.log(sub);
    for (let i = 1; i < outputArray.length; i++) {
      sub -= outputArray[i] * 1;
    }
    output.innerHTML = sub;

    // MULTIPLY
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

btnPlus.addEventListener("click", add);
btnDivide.addEventListener("click", divide);
btnMinus.addEventListener("click", substract);

btnResult.addEventListener("click", displayResult);

btnClear.addEventListener("click", function () {
  output.innerHTML = 0;
  outputArray = [];
});
