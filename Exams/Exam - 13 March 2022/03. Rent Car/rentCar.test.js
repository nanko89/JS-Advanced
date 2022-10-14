const expect = require("chai").expect;
const rentCar = require("./rentCar");

describe("Test Rent Car", () => {
  describe("Test searchCar(shop, model) function", () => {
    it("should accept invalid input", () => {
      expect(rentCar.searchCar.bind("Audi", "Audi")).to.throw("Invalid input!");
      expect(rentCar.searchCar.bind(["Volkswagen", "BMW", "Audi"], 5)).to.throw(
        "Invalid input!"
      );
      expect(rentCar.searchCar.bind("Audi", 5)).to.throw("Invalid input!");
    });

    it("should return error message if have no matching in the shop", () => {
      expect(() => {
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Ford");
      }).to.throw("There are no such models in the catalog!");
      expect(() => {
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "");
      }).to.throw("There are no such models in the catalog!");
      expect(() => {
        rentCar.searchCar([], "Ford");
      }).to.throw("There are no such models in the catalog!");
    });

    it("should return correct message when find a model", () => {
      expect(
        rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi")
      ).to.be.equal(`There is 1 car of model Audi in the catalog!`);
      expect(
        rentCar.searchCar(["Volkswagen", "BMW", "Audi", "Audi"], "Audi")
      ).to.be.equal(`There is 2 car of model Audi in the catalog!`);
    });
  });

  describe("Test calculatePriceOfCar(model, days) function", () => {
    it("should throw error if accept invalid input", () => {
      expect(rentCar.calculatePriceOfCar.bind("Audi", "Audi")).to.throw(
        "Invalid input!"
      );
      expect(rentCar.calculatePriceOfCar.bind(10, "10")).to.throw(
        "Invalid input!"
      );
      expect(rentCar.calculatePriceOfCar.bind(10, "Audi")).to.throw(
        "Invalid input!"
      );
    });

    it("should return correct message when model exist in catalogue", () => {
      expect(rentCar.calculatePriceOfCar("Audi", 5)).to.be.equal(
        "You choose Audi and it will cost $180!"
      );
      expect(rentCar.calculatePriceOfCar("BMW", 10)).to.be.equal(
        "You choose BMW and it will cost $450!"
      );
    });

    it("should throw an error when model not exist in catalogue", () => {
      expect(() => {
        rentCar.calculatePriceOfCar("Ford", 10);
      }).to.throw("No such model in the catalog!");
    });
  });

  describe("Test checkBudget(costPerDay, days, budget) function", () => {
    it("should throw error if accept invalid input", () => {
      expect(rentCar.checkBudget.bind("Audi", 5, 1000)).to.throw(
        "Invalid input!"
      );
      expect(rentCar.checkBudget.bind(10, "10", 1000)).to.throw(
        "Invalid input!"
      );
      expect(rentCar.checkBudget.bind(10, 10, "1000")).to.throw(
        "Invalid input!"
      );
    });

    it("should rent a car if budget is biggerr than cost per day", () => {
      expect(rentCar.checkBudget(10, 10, 1000)).to.be.equal("You rent a car!");
      expect(rentCar.checkBudget(20, 10, 200)).to.be.equal("You rent a car!");
    });

    it("should return messsage if your budget is not enough for rent a car", () => {
      expect(rentCar.checkBudget(200, 10, 1000)).to.be.equal(
        "You need a bigger budget!"
      );
    });
  });
});
