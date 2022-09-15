//01. Echo Function

function echo(string) {
  console.log(string.length);
  console.log(string);
}

//02. String Length
function stringLength(first, second, third) {
  let sumChar = first.length + second.length + third.length;
  let avgLength = Math.floor(sumChar / 3);
  console.log(sumChar);
  console.log(avgLength);
}

//03. Largest Number
function largestNum(first, second, third) {
  let maxNum;
  if (first > second && first > third) {
    maxNum = first;
  }

  if (second > first && second > third) {
    maxNum = second;
  }

  if (third > first && third > second) {
    maxNum = third;
  }

  console.log(`The largest number is ${maxNum}.`);
}

//04. Circle Area
function circleArea(input) {
  let type = typeof input;
  if (type === "number") {
    let result = Math.pow(input, 2) * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}

//05. Math Operations

function mathOperation(num1, num2, oper) {
  switch (oper) {
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    case "%":
      console.log(num1 % num2);
      break;
    case "**":
      console.log(num1 ** num2);
      break;
  }
}

//06. Sum of Numbers N…M
function sumOfNumber(num1, num2) {
  let sum = 0;
  let startNum = Number(num1);
  let endNumber = Number(num2);

  for (let i = startNum; i <= endNumber; i++) {
    sum += i;
  }

  console.log(sum);
}

//07. Day of Week
function dayOfWeek(day) {
  let num;
  switch (day) {
    case "Monday":
      num = 1;
      break;
    case "Tuesday":
      num = 2;
      break;
    case "Wednesday":
      num = 3;
      break;
    case "Thursday":
      num = 4;
      break;
    case "Friday":
      num = 5;
      break;
    case "Saturday":
      num = 6;
      break;
    case "Sunday":
      num = 7;
      break;
    default:
      num = "error";
  }
  console.log(num);
}

//08. Days in a month
function getDaysInMonth(month, year) {
  let days = new Date(year, month, 0).getDate();
  console.log(days);
}

//09. Square of Stars
function squareOfStars(num) {
  for (let i = 0; i < num; i++) {
    console.log("* ".repeat(num));
  }
}

//10. Aggregate Elements
function aggregateElements(input) {
  let sum = 0;
  let inversSum = 0;
  let concat = "";

  for (const item of input) {
    sum += Number(item);
    inversSum += 1 / Number(item);
    concat += item;
  }

  console.log(sum);
  console.log(inversSum);
  console.log(concat);
}
aggregateElements([1, 2, 3]);
