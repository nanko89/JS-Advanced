const expect = require("chai").expect;
const cinema = require("./cinema");

describe("Test Object Cinema", () => {
  describe("Test Show Movies function", () => {
    let movieArray = ["King Kong", "The Tomorrow War", "Joker"];
    it("function accept an array with string", () => {
      expect(cinema.showMovies(movieArray)).to.equal(
        "King Kong, The Tomorrow War, Joker"
      );
    });

    it("function accept an empty array", () => {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });
  });

  describe("Test Ticket Price function", () => {
    it("projectionType is exist in the schedule with the types of projections", () => {
      expect(cinema.ticketPrice("Premiere")).to.equal(12.0);
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
      expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    });

    it("projectionType is NOT exist in the schedule with the types of projections", () => {
      expect(cinema.ticketPrice.bind("Ticket")).to.throw(
        "Invalid projection type."
      );
    });
  });
  describe("Test Swap Seats In Hall function", () => {
    it("should one of the two numbers do not exist", () => {
      expect(cinema.swapSeatsInHall(10)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(undefined, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should the numbers are not integers", () => {
      expect(cinema.swapSeatsInHall(10, "5")).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall("10", 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(10, 5.5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(10.5, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should one of the numbers is greater than the capacity of the hall ", () => {
      expect(cinema.swapSeatsInHall(10, 50)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(30, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should seats are less or equal of 0 ", () => {
      expect(cinema.swapSeatsInHall(-3, 10)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(10, -5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(0, 5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(5, 0)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(-8, -5)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should seats are equal", () => {
      expect(cinema.swapSeatsInHall(10, 10)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });

    it("should exchange is successful", () => {
      expect(cinema.swapSeatsInHall(1, 20)).to.equal(
        "Successful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(3, 10)).to.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
