const expect = require("chai").expect;
const carService = require("./03. Car Service_Resources");

describe("Test Car Service", () => {
  describe("test is it Expensive (issue)", () => {
    it("should the value of the parameter issue is equal to Engine or Transmission", () => {
      expect(carService.isItExpensive("Engine")).to.be.equal(
        "The issue with the car is more severe and it will cost more money"
      );
      expect(carService.isItExpensive("Transmission")).to.be.equal(
        "The issue with the car is more severe and it will cost more money"
      );
    });

    it("should the value of the parameter issue is NOT equal to Engine or Transmission", () => {
      expect(carService.isItExpensive("Issue")).to.be.equal(
        "The overall price will be a bit cheaper"
      );
    });
  });
  describe("test discount (numberOfParts, totalPrice) ", () => {
    it("should data entered is invalid", () => {
      expect(carService.discount.bind("2", 200)).throw("Invalid input");
      expect(carService.discount.bind("2", "200")).throw("Invalid input");
      expect(carService.discount.bind(2, "200")).throw("Invalid input");
    });

    it("should the numberOfParts is smaller or equal to 2", () => {
      expect(carService.discount(2, 100)).to.be.equal(
        "You cannot apply a discount"
      );
    });
    it("should the numberOfParts is bigger to 2", () => {
      expect(carService.discount(5, 100)).to.be.equal(
        "Discount applied! You saved 15$"
      );
      expect(carService.discount(10, 100)).to.be.equal(
        "Discount applied! You saved 30$"
      );
    });
  });
  describe("test parts to buy (partsCatalog, neededParts) ", () => {
    let partsCatalog = [
      { part: "blowoff valve", price: 145 },
      { part: "coil springs", price: 230 },
    ];

    let neededPart = ["blowoff valve", "injectors"];
    it("should not accept two arrays", () => {
      expect(carService.partsToBuy.bind("", neededPart)).throw("Invalid input");
      expect(carService.partsToBuy.bind(partsCatalog, 5)).throw(
        "Invalid input"
      );
      expect(carService.partsToBuy.bind(10, "")).throw("Invalid input");
    });

    it("should return 0 if partsCatalog is empty", () => {
      expect(carService.partsToBuy([], [])).to.be.equal(0);
    });

    it("should return right result", () => {
      expect(carService.partsToBuy(partsCatalog, neededPart)).to.be.equal(145);
      expect(carService.partsToBuy(partsCatalog, ["injectors"])).to.be.equal(0);
    });
  });
});
