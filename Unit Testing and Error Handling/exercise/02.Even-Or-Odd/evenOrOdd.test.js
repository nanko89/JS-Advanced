const expect = require("chai").expect;
const isOddOrEven = require("./everOrOdd");

describe("Test even or odd function", () => {
  it("should return undefined if input is invalid", () => {
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
    expect(isOddOrEven(5)).to.be.undefined;
    expect(isOddOrEven(true)).to.be.undefined;
  });
  it("should return even if input is valid", () => {
    let input = "Even";
    expect(isOddOrEven("Even")).has.lengthOf(4);
    expect(isOddOrEven("Even")).to.be.equal("even");
  });
  it("should reyurn odd if input is valid", () => {
    expect(isOddOrEven("odd")).to.be.equal("odd");
  });
});
