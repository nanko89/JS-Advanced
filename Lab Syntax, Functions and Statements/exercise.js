//01. Fruit

function fruit(fruit, grams, price) {
  let weight = grams / 1000;
  let result = weight * price;
  console.log(
    `I need $${result.toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

//02. Greatest Common Divisor – GCD
function greatestDivisor(num1, num2) {
  let maxNum = 1;
  let endNum = Math.min(num1, num2);
  for (let i = 2; i <= endNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      maxNum = i;
    }
  }
  console.log(maxNum);
}

//03. Same Numbers
function sameNumber(num) {
  let firstChar = String(num).split("")[0];
  let isSame = true;
  let sum = 0;
  for (const item of String(num)) {
    sum += Number(item);
    if (item !== firstChar) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}

//04. Previous Day

previousDay(2016, 10, 1);
