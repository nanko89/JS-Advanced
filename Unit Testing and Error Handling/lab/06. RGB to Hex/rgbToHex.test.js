const { expect } = require("chai");
const rgbToHexColor = require("./rgbToHex");

describe("Test to rgb to hex color", () => {
  it("should return undefined if one of input is string", () => {
    expect(rgbToHexColor("one", 2, 10)).to.be.undefined;
    expect(rgbToHexColor(2, "two", 10)).to.be.undefined;
    expect(rgbToHexColor(20, 5, "20")).to.be.undefined;
  });

  it("should return undefined if one of input is array", () => {
    expect(rgbToHexColor([1], 2, 10)).to.be.undefined;
    expect(rgbToHexColor(2, [2], 10)).to.be.undefined;
    expect(rgbToHexColor(20, 5, [3])).to.be.undefined;
  });

  it("should return undefined if red input is out of range", () => {
    expect(rgbToHexColor(-5, 2, 10)).to.be.undefined;
    expect(rgbToHexColor(350, 20, 10)).to.be.undefined;
    expect(rgbToHexColor(2.5, 10, 5)).to.be.undefined;
  });

  it("should return undefined if green input is out of range", () => {
    expect(rgbToHexColor(5, -2, 10)).to.be.undefined;
    expect(rgbToHexColor(5, 350, 10)).to.be.undefined;
    expect(rgbToHexColor(2, 3.8, 4)).to.be.undefined;
  });

  it("should return undefined if blue input is out of range", () => {
    expect(rgbToHexColor(5, 2, -10)).to.be.undefined;
    expect(rgbToHexColor(5, 50, 310)).to.be.undefined;
    expect(rgbToHexColor(2, 8, 4.5)).to.be.undefined;
  });

  it("should return color if three inputs are correct", () => {
    expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    expect(rgbToHexColor(255, 0, 0)).to.be.equal("#FF0000");
    expect(rgbToHexColor(0, 255, 0)).to.be.equal("#00FF00");
    expect(rgbToHexColor(0, 0, 255)).to.be.equal("#0000FF");
  });
});
