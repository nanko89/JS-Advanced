const expect = require("chai").expect;
const companyAdministration = require("./companyAdministration");
describe("Test Company Administration", () => {
  describe("Test hiringEmployee (name, position, yearsExperience) function", () => {
    it("should position is different from 'Programmer', throw an error", () => {
      expect(() => {
        companyAdministration.hiringEmployee("Gosho", "Engeener", 10);
      }).to.throw("We are not looking for workers for this position.");
    });

    it("should hired employee for position", () => {
      expect(
        companyAdministration.hiringEmployee("Gosho", "Programmer", 3)
      ).to.be.equal(
        `Gosho was successfully hired for the position Programmer.`
      );
    });

    it("should NOT hired employee for this position", () => {
      expect(
        companyAdministration.hiringEmployee("Gosho", "Programmer", 1)
      ).to.be.equal(`Gosho is not approved for this position.`);
    });
  });

  describe("Test calculateSalary (hours) function", () => {
    it("should recive invalid input and throw error", () => {
      expect(() => {
        companyAdministration.calculateSalary("1000");
      }).to.throw("Invalid hours");
      expect(() => {
        companyAdministration.calculateSalary(-50);
      }).to.throw("Invalid hours");
    });
    it("should recive salary if hours are valid", () => {
      expect(companyAdministration.calculateSalary(10)).to.be.equal(150);
      expect(companyAdministration.calculateSalary(165)).to.be.equal(3475);
    });
  });

  describe("Test firedEmployee (employees, index)", () => {
    it("should throw if input is invalid", () => {
      expect(() => {
        companyAdministration.firedEmployee("", 5);
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee(10, 5);
      }).to.throw("Invalid input");

      expect(() => {
        companyAdministration.firedEmployee([], "");
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee([], []);
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee([], {});
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee([], undefined);
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee([], true);
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee([], 1.4);
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee([], -1);
      }).to.throw("Invalid input");
      expect(() => {
        companyAdministration.firedEmployee(["1", "2", "3"], 3);
      }).to.throw("Invalid input");
    });

    it("should remove employees if input is vallid", () => {
      expect(
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)
      ).to.be.equal("Petar, George");
    });
  });
});
