function solution() {
  let content = "";
  return {
    append: (str) => (content += str),
    removeStart: (n) => (content = content.substring(n)),
    removeEnd: (n) => (content = content.substring(0, content.length - n)),
    print: () => console.log(content),
  };
}

let firstZeroTest = solution();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
