class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = Number(innerLength);
  }

  decrease(num) {
    let result = this.innerLength - Number(num);
    this.innerLength = result < 0 ? 0 : result;
  }

  increase(num) {
    this.innerLength += Number(num);
  }

  toString() {
    if (this.innerLength === 0) {
      return "...";
    }
    return this.innerLength >= this.innerString.length
      ? this.innerString
      : this.innerString.slice(0, this.innerLength) + "...";
  }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
