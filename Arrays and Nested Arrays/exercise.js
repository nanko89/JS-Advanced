"use strict";
//01. Print an Array with a Given Delimiter

function printArr(arr, delimiter) {
  console.log(arr.join(delimiter));
}

//02. Print every N-th Element from an Array
function printNElement(arr, step) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += step) {
    newArr.push(arr[i]);
  }
  return newArr;
}

//03. Add and Remove Elements
function addAndRemove(arr) {
  let newArr = [];
  let num = 1;
  for (const item of arr) {
    switch (item) {
      case "add":
        newArr.push(num);
        break;
      case "remove":
        newArr.pop();
        break;
    }
    num++;
  }
  newArr.length === 0
    ? console.log("Empty")
    : newArr.forEach((num) => console.log(num));
}

//04. Rotate Array
function rotateArray(arr, rotation) {
  let lastElement;
  for (let rotate = 0; rotate < rotation; rotate++) {
    lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  console.log(arr.join(" "));
}

//05. Extract Increasing Subsequence from Array
function extractSubsequence(arr) {
  let maxNum = arr[0];
  let newArr = [];
  for (const item of arr) {
    if (item >= maxNum) {
      newArr.push(item);
      maxNum = item;
    }
  }
  return newArr;
}

//06. List Of Names
function listOfNames(arr) {
  let sortArr = arr.sort((a, b) => a.localeCompare(b));
  sortArr.forEach((name, index) => console.log(`${++index}.${name}`));
}

//07. Sorting Numbers{
function sortNumber(arr) {
  arr.sort((a, b) => a - b);
  let newArr = [];
  let length = arr.length / 2;
  for (let i = 0; i < length; i++) {
    newArr.push(arr.shift());
    newArr.push(arr.pop());
  }
  return newArr;
}

//08. Sort an Array by 2 Criteria
function sortByTwoCriteria(arr) {
  let sortArr = arr.sort((a, b) => {
    if (a.length - b.length === 0) {
      return a.localeCompare(b);
    } else {
      return a.length - b.length;
    }
  });

  console.log(sortArr.join("\n"));
}

//09. Magic Matrices
function magicMatrices(matrix) {
  let magicSum = matrix[0].reduce(function (acc, curr) {
    return acc + curr;
  });
  let isMagic = true;
  for (let row = 0; row < matrix.length; row++) {
    let rowSum = 0;
    let colSum = 0;

    for (let col = 0; col < matrix.length; col++) {
      rowSum += matrix[row][col];
      colSum += matrix[col][row];
    }
    if (magicSum !== rowSum || magicSum !== colSum) {
      isMagic = false;
      break;
    }
  }
  console.log(isMagic);
}

//10. Tic-Tac-Toe *
function ticTacToe(arr) {
  let fillCell = 0;
  let matrix = [
    ["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"],
  ];
  let hasWinner = false;
  let isFirstPlayer = true;
  for (let i = 0; i < arr.length; i++) {
    if (hasWinner || fillCell === 9) {
      break;
    }

    let rolMove = arr[i].split(" ")[0];
    let colMove = arr[i].split(" ")[1];

    if (matrix[rolMove][colMove] === "false") {
      if (isFirstPlayer) {
        matrix[rolMove][colMove] = "X";
        isFirstPlayer = false;
      } else {
        matrix[rolMove][colMove] = "O";
        isFirstPlayer = true;
      }
      fillCell++;

      hasWinner = checkForWinner();
      if (hasWinner) {
        console.log(`Player ${isFirstPlayer === true ? "O" : "X"} wins!`);
        break;
      } else if (fillCell === 9 && hasWinner === false) {
        console.log("The game ended! Nobody wins :(");
        break;
      }
    } else {
      console.log("This place is already taken. Please choose another!");
    }

    function checkForWinner() {
      let isWinner = false;
      let sign = isFirstPlayer ? "O" : "X";
      for (let i = 0; i < 3; i++) {
        if (
          matrix[i][0] === sign &&
          matrix[i][1] === sign &&
          matrix[i][2] === sign
        ) {
          isWinner = true;
          break;
        }
        if (
          matrix[0][i] === sign &&
          matrix[1][i] === sign &&
          matrix[2][i] === sign
        ) {
          isWinner = true;
          break;
        }
      }
      if (!isWinner) {
        if (
          (matrix[0][0] === sign &&
            matrix[1][1] === sign &&
            matrix[2][2] === sign) ||
          (matrix[2][0] === sign &&
            matrix[1][1] === sign &&
            matrix[0][2] === sign)
        ) {
          isWinner = true;
        }
      }
      return isWinner;
    }
  }

  matrix.forEach((row) => console.log(row.join("\t")));
}

//11. Diagonal Attack (not included in final score)
function diagonalAttack(array) {
  let matrix = [];

  for (const item of array) {
    let array = item.split(" ");
    matrix.push(array);
  }
  let mainDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    mainDiagonal += Number(matrix[i][i]);
    secondDiagonal += Number(matrix[matrix.length - 1 - i][i]);
  }

  if (mainDiagonal === secondDiagonal) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < array.length; col++) {
        if (row != col && row != matrix.length - 1 - col) {
          matrix[row][col] = mainDiagonal;
        }
      }
    }
    matrix.forEach((row) => console.log(row.join(" ")));
  } else {
    matrix.forEach((row) => console.log(row.join(" ")));
  }
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
