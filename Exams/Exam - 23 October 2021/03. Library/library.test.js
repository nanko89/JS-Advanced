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
      }).to.throw("No books currently available");
    });
    it("should return message if desired book exist", () => {
      expect(
        library.findBook(["Troy", "Life Style", "Torronto"], "Troy")
      ).to.be.equal("We found the book you want.");
    });

    it("should return messsage if desired book NOT exist", () => {
      expect(
        library.findBook(["Troy", "Life Style", "Torronto"], "The Book")
      ).to.be.equal("The book you are looking for is not here!");
    });
  });

  describe("Test arrangeTheBooks (countBooks) functions", () => {
    it("should invalid input and throw an error", () => {
      expect(() => {
        library.arrangeTheBooks();
      }).to.throw("Invalid input");
      expect(() => {
        library.arrangeTheBooks("5");
      }).to.throw("Invalid input");
      expect(() => {
        library.arrangeTheBooks(-50);
      }).to.throw("Invalid input");
      expect(() => {
        library.arrangeTheBooks(5.5);
      }).to.throw("Invalid input");
    });
    it("should all the books are arranged on the shelves", () => {
      expect(library.arrangeTheBooks(0)).to.be.equal(
        "Great job, the books are arranged."
      );
      expect(library.arrangeTheBooks(40)).to.be.equal(
        "Great job, the books are arranged."
      );
    });

    it("should have no space in library", () => {
      expect(library.arrangeTheBooks(45)).to.be.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
