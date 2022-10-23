const expect = require("chai").expect;
const chooseYourCar = require("./chooseYourCar");

describe("Test Choose Your Car", () => {
  describe("Test choosingType (type, color, year)  function", () => {
    it("should throw an error if year is less 1900 or is more than 2022 ", () => {
      expect(() => {
        chooseYourCar.choosingType("Sedan", "Black", 1899);
      }).to.throw("Invalid Year!");
      expect(() => {
        chooseYourCar.choosingType("Van", "Black", 1899);
      }).to.throw("Invalid Year!");
      expect(() => {
        chooseYourCar.choosingType("Sedan", "Black", 2023);
      }).to.throw("Invalid Year!");
      expect(() => {
        chooseYourCar.choosingType("Van", "Black", 2023);
      }).to.throw("Invalid Year!");
    });

    it("should throw an error if string type is different from 'Sedan'", () => {
      expect(() => {
        chooseYourCar.choosingType("Van", "Black", 2012);
      }).to.throw("This type of car is not what you are looking for.");
    });

    it("should return message if string type is 'Sedan' and year is correct", () => {
      expect(chooseYourCar.choosingType("Sedan", "Black", 2012)).to.be.equal(
        "This Black Sedan meets the requirements, that you have."
      );
      expect(chooseYourCar.choosingType("Sedan", "Black", 2022)).to.be.equal(
        "This Black Sedan meets the requirements, that you have."
      );
      expect(chooseYourCar.choosingType("Sedan", "Black", 2010)).to.be.equal(
        "This Black Sedan meets the requirements, that you have."
      );
      expect(chooseYourCar.choosingType("Sedan", "Black", 2009)).to.be.equal(
        "This Sedan is too old for you, especially with that Black color."
      );
      expect(chooseYourCar.choosingType("Sedan", "Black", 1900)).to.be.equal(
        "This Sedan is too old for you, especially with that Black color."
      );
    });
  });

  describe("Test brandName (brands, brandIndex) function", () => {
    it("should invalid input and throw an error", () => {
      expect(() => {
        chooseYourCar.brandName("", 20);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName(["Audi"], -1);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName("", -2);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName(["Audi", "BMW"], 2);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName(["Audi", "BMW"], 10);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName(["Audi", "BMW"], "2");
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName(["Audi", "BMW"], 2.2);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName([], true);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName([], {});
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName(50, []);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.brandName({}, []);
      }).to.throw("Invalid Information!");
    });

    it("should return message if input is valid", () => {
      expect(chooseYourCar.brandName(["BMW", "Audi", "Opel"], 1)).to.be.equal(
        "BMW, Opel"
      );
      expect(chooseYourCar.brandName(["Audi"], 0)).to.be.equal("");
    });
  });

  describe("Test carFuelConsumption (distanceInKilometers, consumptedFuelInLitres) functions", () => {
    it("should invalid input and throw an error", () => {
      expect(() => {
        chooseYourCar.carFuelConsumption("5", 20);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption(5, "20");
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption(-5, 20);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption(5, -20);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption(5, 0);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption(0, 20);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption("0", "20");
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption([-5], []);
      }).to.throw("Invalid Information!");
      expect(() => {
        chooseYourCar.carFuelConsumption({}, true);
      }).to.throw("Invalid Information!");
    });
    it("should return message if input is valid", () => {
      expect(chooseYourCar.carFuelConsumption(500, 50)).to.be.equal(
        "The car burns too much fuel - 10.00 liters!"
      );
      expect(chooseYourCar.carFuelConsumption(500, 30)).to.be.equal(
        "The car is efficient enough, it burns 6.00 liters/100 km."
      );
      expect(chooseYourCar.carFuelConsumption(500, 35)).to.be.equal(
        "The car is efficient enough, it burns 7.00 liters/100 km."
      );
    });
  });
});
