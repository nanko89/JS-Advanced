const expect = require('chai').expect;
const testNumbers = require('./testNumbers');

describe("Test Numbers", () => {
    describe("Test sumNumber(num1, num2)", () => {
        it("should input is invalid throw an exception", () => {
            expect(testNumbers.sumNumbers("1", 2)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(undefined, 2)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers([], 2)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers({}, 2)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(true, 2)).to.be.equal(undefined);

            expect(testNumbers.sumNumbers(2, "2")).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(2, undefined)).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(2, [])).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(2, {})).to.be.equal(undefined);
            expect(testNumbers.sumNumbers(2, false)).to.be.equal(undefined);
        });
        it("should return sum of number if input is valid", () => {
            expect(testNumbers.sumNumbers(2,2)).to.be.equal('4.00');
            expect(testNumbers.sumNumbers(2.5,2)).to.be.equal('4.50');
            expect(testNumbers.sumNumbers(-2,2)).to.be.equal('0.00');
            expect(testNumbers.sumNumbers(2,2.1)).to.be.equal('4.10');
            expect(testNumbers.sumNumbers(2,-2)).to.be.equal('0.00');
            expect(testNumbers.sumNumbers(-2,-2)).to.be.equal('-4.00');
            expect(testNumbers.sumNumbers(2.5,2.5)).to.be.equal('5.00');
        })
    });

    describe("Test numberChecker(input) function", () => {
        it("should throw an error if input can not parse to number", () => {
            expect(testNumbers.numberChecker.bind("")).to.throw("The input is not a number!");
            expect(testNumbers.numberChecker.bind([])).to.throw("The input is not a number!");
            expect(testNumbers.numberChecker.bind({})).to.throw("The input is not a number!");
            expect(testNumbers.numberChecker.bind(undefined)).to.throw("The input is not a number!")
        });

        it("should check if number is even", () => {
            expect(testNumbers.numberChecker(4)).to.be.equal("The number is even!")
            expect(testNumbers.numberChecker("-4")).to.be.equal("The number is even!")
            expect(testNumbers.numberChecker("4")).to.be.equal("The number is even!")
            expect(testNumbers.numberChecker(-4)).to.be.equal("The number is even!")
        });

        it("should check if number is odd", () => {
            expect(testNumbers.numberChecker(5)).to.be.equal("The number is odd!")
            expect(testNumbers.numberChecker("5")).to.be.equal("The number is odd!")
            expect(testNumbers.numberChecker("-5")).to.be.equal("The number is odd!")
            expect(testNumbers.numberChecker(-5)).to.be.equal("The number is odd!")
        });
    });

    describe("Test averageSumArray(arr) function", () => {
        it("should return average sum of array", () => {
            expect(testNumbers.averageSumArray([1,2,3])).to.be.equal(2)
            expect(testNumbers.averageSumArray([5,2,11])).to.be.equal(6)
        })
    })
});