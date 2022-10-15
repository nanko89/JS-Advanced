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
      expect(() => {
        flowerShop.calcPriceOfFlowers("Rose", "10", "20");
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.calcPriceOfFlowers("Rose", 10, 10.5);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.calcPriceOfFlowers("Rose", 10.5, 2);
      }).to.throw("Invalid input!");
    });

    it("should returns the multiplies price and quantity and message", () => {
      expect(flowerShop.calcPriceOfFlowers("Roses", 10, 10)).to.be.equal(
        `You need $100.00 to buy Roses!`
      );
      expect(flowerShop.calcPriceOfFlowers("Roses", 0, 10)).to.be.equal(
        `You need $0.00 to buy Roses!`
      );
      expect(flowerShop.calcPriceOfFlowers("Lily", 3, 2)).to.be.equal(
        `You need $6.00 to buy Lily!`
      );
    });
  });
  describe("Test function checkFlowersAvailable(flower, gardenArr)", () => {
    it("should check is flower exist in garden and return message", () => {
      expect(
        flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])
      ).to.be.equal(`The Rose are available!`);
    });
    it("should check is flower NOT exist in garden and return message", () => {
      expect(flowerShop.checkFlowersAvailable("Rose", [])).to.be.equal(
        `The Rose are sold! You need to purchase more!`
      );
      expect(flowerShop.checkFlowersAvailable("", ["Rose"])).to.be.equal(
        `The  are sold! You need to purchase more!`
      );
      expect(
        flowerShop.checkFlowersAvailable("Rose", ["Lily", "Orchid"])
      ).to.be.equal(`The Rose are sold! You need to purchase more!`);
    });
  });
  describe("Test function sellFlowers(gardenArr, space)", () => {
    it("should invalid input and throw an error", () => {
      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], "10");
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], true);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], []);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], {});
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(["Rose", "Lily", "Orchid"]);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers("Rose", 10);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers({}, 10);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(true, 10);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(undefined, 10);
      }).to.throw("Invalid input!");
      expect(() => {
        flowerShop.sellFlowers(10, 15);
      }).to.throw("Invalid input!");
    });

    it("should return the changed array of flowers as a string", () => {
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal(
        "Lily / Orchid"
      );
      expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal(
        "Rose / Lily"
      );
    });
  });
});
