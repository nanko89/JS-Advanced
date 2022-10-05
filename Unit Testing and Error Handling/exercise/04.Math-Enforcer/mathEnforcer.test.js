const expect = require("chai").expect;

const mathEnforcer = require("./mathEnforcer");

describe("Test math enforcer", () => {
  describe("addFive", () => {
    it("should return undefined when non-number input", () => {
      expect(mathEnforcer.addFive([5])).to.be.undefined;
      expect(mathEnforcer.addFive("5")).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });

    it("should return correct result when input is correct", () => {
      expect(mathEnforcer.addFive(10)).to.be.equal(15);
      expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
      expect(mathEnforcer.addFive(10.5)).to.be.equal(15.5);
      expect(mathEnforcer.addFive(10.5)).to.be.closeTo(15.5, 0.01);
    });
  });
  describe("subtractTen", () => {
    it("should return undefined when non-number input", () => {
      expect(mathEnforcer.subtractTen([5])).to.be.undefined;
      expect(mathEnforcer.subtractTen("5")).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });

    it("should return correct result when input is correct", () => {
      expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
      expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
      expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
      expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
    });
  });
  describe("sum", () => {
    it("should return undefined when non-number input", () => {
      expect(mathEnforcer.sum([5], 1)).to.be.undefined;
      expect(mathEnforcer.sum("5", 1)).to.be.undefined;
      expect(mathEnforcer.sum({}), 1).to.be.undefined;
      expect(mathEnforcer.sum(1, [5])).to.be.undefined;
      expect(mathEnforcer.sum(1, "5")).to.be.undefined;
      expect(mathEnforcer.sum(1, {})).to.be.undefined;
      expect(mathEnforcer.sum("1", "2")).to.be.undefined;
    });

    it("should return correct result when input is correct", () => {
      expect(mathEnforcer.sum(10, 10)).to.be.equal(20);
      expect(mathEnforcer.sum(-10, 10)).to.be.equal(0);
      expect(mathEnforcer.sum(10, -5)).to.be.equal(5);
      expect(mathEnforcer.sum(10.5, 4.5)).to.be.closeTo(15, 0.01);
    });
  });
});
