const expect = require("chai").expect;
const bookSelection = require("./bookSelection");

describe("Test Book Selection", () => {
  describe("Test isGenreSuitable(genre, age) function", () => {
    it("should genre is equal to 'Thriller' or 'Horror' and the value of age is less or equal to 12", () => {
      expect(bookSelection.isGenreSuitable("Thriller", 12)).to.be.equal(
        `Books with Thriller genre are not suitable for kids at 12 age`
      );
      expect(bookSelection.isGenreSuitable("Horror", 5)).to.be.equal(
        `Books with Horror genre are not suitable for kids at 5 age`
      );
    });
    it("should genre is different to 'Thriller' or 'Horror'", () => {
      expect(bookSelection.isGenreSuitable("Ice Age", 5)).to.be.equal(
        `Those books are suitable`
      );
    });
  });
  describe("Test isItAffordable (price, budget) function", () => {
    it("should inputs is invalid throw error", () => {
      expect(() => {
        bookSelection.isItAffordable("1", 100);
      }).to.throw("Invalid input");
      expect(() => {
        bookSelection.isItAffordable(1, "100");
      }).to.throw("Invalid input");
    });
    it("should budget is lower than price", () => {
      expect(bookSelection.isItAffordable(101, 100)).to.be.equal(
        "You don't have enough money"
      );
    });
    it("should buy the book", () => {
      expect(bookSelection.isItAffordable(100, 150)).to.be.equal(
        `Book bought. You have 50$ left`
      );
    });
  });

  describe("Test suitableTitles (books, wantedGenre) function", () => {
    it("should inputs is invalid throw error", () => {
      expect(() => {
        bookSelection.suitableTitles("1", "Action");
      }).to.throw("Invalid input");
      expect(() => {
        bookSelection.suitableTitles(
          [{ title: "The Da Vinci Code", genre: "Thriller" }],
          5
        );
      }).to.throw("Invalid input");
    });
    it("should add the title of the book that its genre is equal to the wantedGenr", () => {
      expect(
        bookSelection.suitableTitles(
          [{ title: "The Da Vinci Code", genre: "Thriller" }],
          "Thriller"
        )
      ).to.deep.equal(["The Da Vinci Code"]);
    });
  });
});
