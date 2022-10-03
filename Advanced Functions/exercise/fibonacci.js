//03. Fibonacci

function getFibonator() {
  let num1 = 0;
  let num2 = 1;
  return function fib() {
    let result = num1 + num2;
    num1 = num2;
    num2 = result;
    return num1;
  };
}
