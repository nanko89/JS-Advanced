const { assert } = require("chai");
const sum = require("./sumOfNumbers");

describe("Test sum of numbers", () => {
  it("should take an array of Numbers as an argument", () => {
    let arrgument = [1, 2, 3];
    // expect(arrgument).to.be.an("array");
    assert.isArray(arrgument, "is take an array");
  });

  it("should return NaN if array contains invalid data", () => {
    let arrgument = ["one", "two", "three"];
    // expect(sum(arrgument)).to.be.NaN;
    assert.isNaN(sum(arrgument), "when contains invalid data return NaN");
  });

  it("should return sum of all arrays elements", () => {
    assert.equal(sum([1, 2, "3", -5]), 1, "return 1 result");
  });
});
