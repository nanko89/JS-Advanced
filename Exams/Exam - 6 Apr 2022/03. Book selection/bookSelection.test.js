const expect = require("chai").expect;
const bookSelection = require("./bookSelection");

describe("Test Book Selection", () => {
  describe("Test isGenreSuitable(genre, age) function", () => {
    it("should genre is equal to 'Thriller' or 'Horror' and the value of age is less or equal to 12", () => {
      expect(bookSelection.isGenreSuitable("Thriller", 10)).to.be.equal(
        `Books with Thriller genre are not suitable for kids at 10 age`
      );
      expect(bookSelection.isGenreSuitable("Horror", 5)).to.be.equal(
        `Books with Horror genre are not suitable for kids at 5 age`
      );
    });
    it("should genre is different to 'Thriller' or 'Horror'", () => {
      expect(bookSelection.isGenreSuitable("Comedy", 10)).to.be.equal(
        `Those books are suitable`
      );
      expect(bookSelection.isGenreSuitable("Horror", 18)).to.be.equal(
        `Those books are suitable`
      );
      expect(bookSelection.isGenreSuitable("Thriller", 16)).to.be.equal(
        `Those books are suitable`
      );
    });
  });
  describe("Test isItAffordable (price, budget) function", () => {
    it("should inputs is invalid throw error", () => {
      expect(bookSelection.isItAffordable.bind("5", 50)).to.throw(
        "Invalid input"
      );
      expect(bookSelection.isItAffordable.bind(5, "50")).to.throw(
        "Invalid input"
      );
    });
    it("should budget is lower than price", () => {
      expect(bookSelection.isItAffordable(100, 90)).to.be.equal(
        "You don't have enough money"
      );
    });
    it("should buy the book", () => {
      expect(bookSelection.isItAffordable(20, 200)).to.be.equal(
        `Book bought. You have 180$ left`
      );
    });
  });

  describe("Test suitableTitles (books, wantedGenre) function", () => {
    it("should inputs is invalid throw error", () => {
      expect(bookSelection.suitableTitles.bind("5", 50)).to.throw(
        "Invalid input"
      );
      expect(bookSelection.suitableTitles.bind([1, 2, 3], [])).to.throw(
        "Invalid input"
      );
      expect(bookSelection.suitableTitles.bind("50", [1, 2])).to.throw(
        "Invalid input"
      );
    });
    it("should add the title of the book that its genre is equal to the wantedGenr", () => {
      expect(
        bookSelection.suitableTitles(
          [
            { title: "The Da Vinci Code", genre: "Thriller" },
            { title: "Angels & Demons", genre: "Mystery" },
          ],
          "Thriller"
        )
      ).to.deep.equal(["The Da Vinci Code"]);
    });
  });
});
