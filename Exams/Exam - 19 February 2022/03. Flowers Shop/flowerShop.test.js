const expect = require("chai").expect;
const flowerShop = require("./flowerShop");

describe("Test Flower Shop", () => {
  describe("Test function calcPriceOfFlowers(flower, price, quantity)", () => {
    it("should invalid input and throw an error", () => {
      expect(() => {
        flowerShop.calcPriceOfFlowers(1, 10, 20);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.calcPriceOfFlowers("Rose", "10", 20);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.calcPriceOfFlowers("Rose", 10, "20");
      }).to.throw("Invalid input!");
    });

    it("should returns the multiplies price and quantity and message", () => {
      expect(flowerShop.calcPriceOfFlowers("Rose", 5, 2)).to.be.equal(
        `You need $10.00 to buy Rose!`
      );
    });
  });
  describe("Test function checkFlowersAvailable(flower, gardenArr)", () => {
    it("should check is flower exist in garden and return message", () => {
      expect(
        flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])
      ).to.be.equal("The Rose are available!");
    });
    it("should check is flower NOT exist in garden and return message", () => {
      expect(
        flowerShop.checkFlowersAvailable("Cactus", ["Rose", "Lily", "Orchid"])
      ).to.be.equal("The Cactus are sold! You need to purchase more!");
    });
  });
  describe("Test function sellFlowers(gardenArr, space)", () => {
    it("should invalid input and throw an error", () => {
      expect(() => {
        flowerShop.sellFlowers("Rose", 100);
      }).to.throw("Invalid input!");

      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "100");
      }).to.throw("Invalid input!");

      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -5);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3);
      }).to.throw("Invalid input!");
    });

    it("should return the changed array of flowers as a string", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.be.equal(
        "Rose / Lily"
      );
    });
  });
});
