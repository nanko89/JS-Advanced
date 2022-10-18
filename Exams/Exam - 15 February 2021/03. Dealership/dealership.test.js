const expect = require("chai").expect;
const dealership = require("./dealership");

describe("Test Dealership", () => {
  describe("Test newCarCost(oldCarModel, newCarPrice) function", () => {
    it("should returning your old car to the dealers", () => {
      expect(dealership.newCarCost("Audi A4 B8", 30000)).to.be.equal(15000);
      expect(dealership.newCarCost("Audi", 30000)).to.be.equal(30000);
    });
  });

  describe("Test carEquipment(extrasArr, indexArr) function", () => {
    it("should return extras", () => {
      expect(
        dealership.carEquipment(
          ["heated seats", "sliding roof", "sport rims", "navigation"],
          [0, 1]
        )
      ).to.deep.equal(["heated seats", "sliding roof"]);
    });
  });

  describe("Test euroCategory(category) function", () => {
    it("should get 5% discount if number is more or equal 4", () => {
      expect(dealership.euroCategory(4)).to.be.equal(
        "We have added 5% discount to the final price: 14250."
      );
    });
    it("should get no discount if number is less than 4", () => {
      expect(dealership.euroCategory(2)).to.be.equal(
        "Your euro category is low, so there is no discount from the final price!"
      );
    });
  });
});
