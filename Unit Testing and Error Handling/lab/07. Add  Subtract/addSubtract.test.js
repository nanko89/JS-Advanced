const expect = require("chai").expect;
const createCalculator = require("./addSubtract");

describe("Test create calculator function", () => {
  it("should return object", () => {
    let calc = createCalculator();
    expect(typeof calc).to.be.equal("object");
  });

  it("should return three parameters", () => {
    let calc = createCalculator();
    expect(calc).has.ownProperty("add");
    expect(calc).has.ownProperty("subtract");
    expect(calc).has.ownProperty("get");
  });

  it("should have three properties", () => {
    let calc = createCalculator();
    let size = Object.keys(calc);
    expect(size).to.have.lengthOf(3);
  });

  it("should add a number to internal sum", () => {
    let calc = createCalculator();
    calc.add(5);
    expect(calc.get()).to.be.equal(5);
  });

  it("should add a number as string to internal sum", () => {
    let calc = createCalculator();
    calc.add("5");
    expect(calc.get()).to.be.equal(5);
  });

  it("should subtract a number to internal sum", () => {
    let calc = createCalculator();
    calc.subtract(5);
    expect(calc.get()).to.be.equal(-5);
  });

  it("should add a number as string to internal sum", () => {
    let calc = createCalculator();
    calc.subtract("5");
    expect(calc.get()).to.be.equal(-5);
  });
});
