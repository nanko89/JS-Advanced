function calculator() {
  return {
    init(num1, num2, res) {
      firstNum = document.querySelector(num1);
      secondNum = document.querySelector(num2);
      result = document.querySelector(res);
    },
    add: () => {
      let sum = Number(firstNum.value) + Number(secondNum.value);
      result.value = sum;
    },
    subtract: () => {
      let sub = Number(firstNum.value) - Number(secondNum.value);
      result.value = sub;
    },
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
