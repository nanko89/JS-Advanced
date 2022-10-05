const expect = require("chai").expect;
const isSymmetric = require("./checkForSymmetry");

describe("Test check symmetry", () => {
  it("should take an array as an argument", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });

  it("return false if input is not correct type", () => {
    expect(isSymmetric(3)).to.be.false;
  });

  it("return false if input is string", () => {
    expect(isSymmetric("hello")).to.be.false;
  });

  it("return equals is input is symmetric with odd element", () => {
    expect(isSymmetric([1, 2, 1])).to.be.true;
  });

  it("return equals if input is array of string and symmetric", () => {
    expect(isSymmetric(["a", "b", "b", "a"])).to.be.true;
  });

  it("return false if input is not symmetric", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it("return false if exist mismatched element", () => {
    expect(isSymmetric([1, "1", 2, 2])).to.be.false;
  });
});
