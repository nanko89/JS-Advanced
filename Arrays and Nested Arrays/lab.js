//01. Even Position Elements
function printEvenPosition(arr) {
  let buff = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      buff += arr[i] + " ";
    }
  }
  console.log(buff.trim());
}

//02. Last K Numbers Sequence
function lastSequence(n, k) {
  let arr = [1];
  while (arr.length < n) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
      let index = arr.length - 1 - i;
      if (index >= 0) {
        sum += arr[index];
      }
    }
    arr.push(sum);
  }
  return arr;
}

//03. Sum First Last
function sumFirstLast(arr) {
  let firstNum = Number(arr.shift());
  let lastNum = Number(arr.pop());
  console.log(firstNum + lastNum);
}

//04. Negative / Positive Numbers
function numberFunc(arr) {
  let newArr = [];
  for (const item of arr) {
    if (item < 0) {
      newArr.unshift(item);
    } else {
      newArr.push(item);
    }
  }
  for (const item of newArr) {
    console.log(item);
  }
}

//05. Smallest Two Numbers
function smallestNum(arr) {
  arr.sort((a, b) => a - b);
  let smallest = arr.splice(0, 2);
  console.log(smallest.join(" "));
}

//06. Bigger Half
function biggerHalf(arr) {
  arr.sort((a, b) => a - b);
  let newArr = arr.splice(0, arr.length / 2);
  return arr;
}

//07. Piece of Pie
function pieceOfPie(arr, startPie, endPie) {
  let indexOfStart = arr.indexOf(startPie);
  let intexOfEnd = arr.indexOf(endPie);
  let countItem = intexOfEnd - indexOfStart + 1;
  let newPieArr = arr.splice(indexOfStart, countItem);
  return newPieArr;
}

//08. Process Odd Positions
function processOddPosition(arr) {
  arr = arr
    .filter((a, i) => i % 2 !== 0)
    .map((n) => n * 2)
    .reverse();
  console.log(arr.join(" "));
}

//09. Biggest Element
function biggestElement(input) {
  let maxItem = Number.MIN_VALUE;
  for (const array of input) {
    let item = array.sort((a, b) => b - a)[0];
    if (maxItem < item) {
      maxItem = item;
    }
  }
  console.log(maxItem);
}

function biggestElement2(input) {
  let allItem = [];
  for (const array of input) {
    allItem.push(...array);
  }
  allItem.sort((a, b) => b - a);
  console.log(allItem[0]);
}
//10. Diagonal Sums
function diagonalsSum(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let mainIndex = 0;
  let secondIndex = arr.length - 1;
  for (let row = 0; row < arr.length; row++) {
    rightSum += arr[row][mainIndex++];
    leftSum += arr[row][secondIndex--];
  }

  console.log(rightSum + " " + leftSum);
}

//11. Equal Neighbors
function equalNeighbors(matrix) {
  let pair = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      let currentItem = matrix[row][col];
      let downItem;
      let leftItem;
      if (row > 0) {
        downItem = matrix[row - 1][col];
      }
      if (col < matrix.length - 1) {
        leftItem = matrix[row][col + 1];
      }
      if (currentItem === downItem) {
        pair++;
      }
      if (currentItem === leftItem) {
        pair++;
      }
    }
  }
  console.log(pair);
}
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
