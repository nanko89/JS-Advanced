const expect = require("chai").expect;
const numberOperations = require("./numberOperations");

describe("Test Number Operations", () => {
  describe("Test powNumber(num) functions", () => {
    it("should return the power of num", () => {
      expect(numberOperations.powNumber(4)).to.be.equal(16);
      expect(numberOperations.powNumber(2)).to.be.equal(4);
      expect(numberOperations.powNumber(-5)).to.be.equal(25);
      expect(numberOperations.powNumber("2")).to.be.equal(4);
    });
  });
  describe("Test numberChecker(input) function", () => {
    it("should throw error if input is not parse to number", () => {
      expect(numberOperations.numberChecker.bind("")).to.throw(
        "The input is not a number!"
      );
      expect(numberOperations.numberChecker.bind({})).to.throw(
        "The input is not a number!"
      );
      expect(numberOperations.numberChecker.bind([])).to.throw(
        "The input is not a number!"
      );
      expect(numberOperations.numberChecker.bind(true)).to.throw(
        "The input is not a number!"
      );
    });
    it("should chech if number is lower than 100", () => {
      expect(numberOperations.numberChecker("50")).to.be.equal(
        "The number is lower than 100!"
      );
      expect(numberOperations.numberChecker(50)).to.be.equal(
        "The number is lower than 100!"
      );
      expect(numberOperations.numberChecker(-50)).to.be.equal(
        "The number is lower than 100!"
      );
      expect(numberOperations.numberChecker("-50")).to.be.equal(
        "The number is lower than 100!"
      );
      expect(numberOperations.numberChecker(50.5)).to.be.equal(
        "The number is lower than 100!"
      );
    });

    it("should chech if number is higher than 100", () => {
      expect(numberOperations.numberChecker("150")).to.be.equal(
        "The number is greater or equal to 100!"
      );
      expect(numberOperations.numberChecker(150)).to.be.equal(
        "The number is greater or equal to 100!"
      );
      expect(numberOperations.numberChecker(100)).to.be.equal(
        "The number is greater or equal to 100!"
      );
      expect(numberOperations.numberChecker(110.5)).to.be.equal(
        "The number is greater or equal to 100!"
      );
    });
  });

  describe("Test sumArrays(array1, array2) function", () => {
    it("should returns new array, which represents the sum of the two arrays", () => {
      expect(numberOperations.sumArrays([1, 2, 3], [2, 3, 4])).to.deep.equal([
        3, 5, 7,
      ]);
      expect(numberOperations.sumArrays([1, 2, 3], [2])).to.deep.equal([
        3, 2, 3,
      ]);
      expect(numberOperations.sumArrays([1], [2, 3, 4])).to.deep.equal([
        3, 3, 4,
      ]);
      expect(numberOperations.sumArrays([], [2, 3, 4])).to.deep.equal([
        2, 3, 4,
      ]);
      expect(numberOperations.sumArrays([1, 2, 3], [])).to.deep.equal([
        1, 2, 3,
      ]);
    });
  });
});
