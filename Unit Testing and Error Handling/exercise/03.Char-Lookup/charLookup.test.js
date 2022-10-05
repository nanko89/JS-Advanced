const expect = require("chai").expect;
const lookupChar = require("./charLookup");

describe("Test char look function", () => {
  it("should first parameter is NOT a string", () => {
    expect(lookupChar(1, 2)).to.be.undefined;
    expect(lookupChar(["array"], "2")).to.be.undefined;
    expect(lookupChar(5.5, "2")).to.be.undefined;
  });

  it("should the second parameter is NOT a number", () => {
    expect(lookupChar("hello", "2")).to.be.undefined;
    expect(lookupChar(10, ["to"])).to.be.undefined;
    expect(lookupChar("hello", 5.5)).to.be.undefined;
  });

  it("should incorrect index", () => {
    expect(lookupChar("hello", -2)).to.be.equal("Incorrect index");
    expect(lookupChar("hello", 5)).to.be.equal("Incorrect index");
    expect(lookupChar("hello", 7)).to.be.equal("Incorrect index");
  });

  it("should return the character at the specified index in the string", () => {
    expect(lookupChar("hello", 2)).to.be.equal("l");
    expect(lookupChar("hello", 0)).to.be.equal("h");
    expect(lookupChar("hello", 4)).to.be.equal("o");
  });
});
