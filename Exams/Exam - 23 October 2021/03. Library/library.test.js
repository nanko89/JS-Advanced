const { expect } = require("chai");
const library = require("./library");

describe("Test Library", () => {
  describe("Test calcPriceOfBook (nameOfBook, year) functions", () => {
    it("should invalid input and throw an error", () => {
      expect(() => {
        library.calcPriceOfBook([], 2000);
      }).to.throw("Invalid input");
      expect(() => {
        library.calcPriceOfBook(20, 2000);
      }).to.throw("Invalid input");
      expect(() => {
        library.calcPriceOfBook(true, 2000);
      }).to.throw("Invalid input");
      expect(() => {
        library.calcPriceOfBook("Book", "2000");
      }).to.throw("Invalid input");
      expect(() => {
        library.calcPriceOfBook("Book", []);
      }).to.throw("Invalid input");
      expect(() => {
        library.calcPriceOfBook("Book", 20.02);
      }).to.throw("Invalid input");
    });

    it("should return price of the book", () => {
      expect(library.calcPriceOfBook("Book", 1980)).to.be.equal(
        `Price of Book is 10.00`
      );
      expect(library.calcPriceOfBook("Book", 1960)).to.be.equal(
        `Price of Book is 10.00`
      );
      expect(library.calcPriceOfBook("Book", 1990)).to.be.equal(
        `Price of Book is 20.00`
      );
    });
  });
  describe("Test findBook (booksArr, desiredBook) function", () => {
    it("should throw error if booksArr length is 0", () => {
      expect(() => {
        library.findBook([], "Book");
      }).to.throw("");
    });
  });
});
