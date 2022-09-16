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
function previousDay(year, month, day) {
  let date = new Date(year, month + 1, day);
  date.setDate(date.getDate() - 1);
  console.log(`${date.getFullYear()}-${date.getMonth() - 1}-${date.getDate()}`);
}

//05. Time to Walk
function timeToWalk(steps, meter, speed) {
  let distance = steps * meter;
  let restMinutes = Math.floor(distance / 500);
  let speedInMeter = speed / 3.6;
  let time = Math.round(distance / speedInMeter);

  let second = time % 60;
  let minutes = Math.floor(time / 60) + restMinutes;
  let hours = Math.floor(time / 3600);

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  second = second < 10 ? `0${second}` : second;

  console.log(`${hours}:${minutes}:${second}`);
}

//06. Road Radar
function roadRadar(speed, area) {
  switch (area) {
    case "motorway":
      if (speed > 130) {
        let diff = speed - 130;
        let drivingStatus = "";
        if (diff <= 20) {
          drivingStatus = "speeding";
        } else if (diff <= 40) {
          drivingStatus = "excessive speeding";
        } else {
          drivingStatus = "reckless driving";
        }
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of 130 - ${drivingStatus}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 130 zone`);
      }
      break;
    case "interstate":
      if (speed > 90) {
        let diff = speed - 90;
        let drivingStatus = "";
        if (diff <= 20) {
          drivingStatus = "speeding";
        } else if (diff <= 40) {
          drivingStatus = "excessive speeding";
        } else {
          drivingStatus = "reckless driving";
        }
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of 90 - ${drivingStatus}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 90 zone`);
      }
      break;
    case "city":
      if (speed > 50) {
        let diff = speed - 50;
        let drivingStatus = "";
        if (diff <= 20) {
          drivingStatus = "speeding";
        } else if (diff <= 40) {
          drivingStatus = "excessive speeding";
        } else {
          drivingStatus = "reckless driving";
        }
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of 50 - ${drivingStatus}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 50 zone`);
      }
      break;
    case "residential":
      if (speed > 20) {
        let diff = speed - 20;
        let drivingStatus = "";
        if (diff <= 20) {
          drivingStatus = "speeding";
        } else if (diff <= 40) {
          drivingStatus = "excessive speeding";
        } else {
          drivingStatus = "reckless driving";
        }
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of 20 - ${drivingStatus}`
        );
      } else {
        console.log(`Driving ${speed} km/h in a 20 zone`);
      }
      break;
  }
}

//07. Cooking by Numbers

function cooking(...param) {
  let num = param.shift();
  for (const item of param) {
    switch (item) {
      case "chop":
        console.log((num /= 2));
        break;
      case "dice":
        console.log((num = Math.sqrt(num)));
        break;
      case "spice":
        console.log((num += 1));
        break;
      case "bake":
        console.log((num *= 3));
        break;
      case "fillet":
        console.log((num = num - num * 0.2));
        break;
    }
  }
}

//08. Validity Checker
function validityChecker(x1, y1, x2, y2) {
  const first = Math.sqrt(x1 ** 2 + y1 ** 2);
  const second = Math.sqrt(x2 ** 2 + y2 ** 2);
  const third = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  first % 1 === 0
    ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

  second % 1 === 0
    ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

  third % 1 === 0
    ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

//9.	*Words Uppercase
function replaceToUpperCase(text) {
  let regexp = /[\w]+/g;

  let word = [...text.toUpperCase().match(regexp)];
  console.log(word.join(", "));
}
replaceToUpperCase("Hi, how are you?");
