function solution(num) {
  function add(num1, num2) {
    return num1 + num2;
  }
  return add.bind(this, num);
}
