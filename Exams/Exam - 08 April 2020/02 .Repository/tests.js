let { Repository } = require("./solution.js");
let expect = require("chai").expect;

describe("Repository Tests", () => {
  describe("Test constructor(props)", () => {
    it("should constructor work correct", () => {
      let properties = {
        name: "Gosho",
        age: 30,
        birthday: new Date(1990, 10, 10),
      };

      let repository = new Repository(properties);

      expect(repository.props).to.deep.equal({
        name: "Gosho",
        age: 30,
        birthday: new Date(1990, 10, 10),
      });
      expect(typeof repository).to.equal("object");
      expect(repository).instanceOf(Repository);
      expect(repository.count).to.equal(0);
    });
  });

  describe("add(entity) test", () => {
    it("should throw if some data is missing", () => {
      let properties = {
        name: "Gosho",
        age: 30,
        birthday: new Date(1990, 10, 10),
      };

      let repository = new Repository(properties);

      expect(() =>
        repository.add({
          age: 30,
          birthday: new Date(1990, 10, 10),
        })
      ).to.throw(`Property name is missing from the entity!`);

      expect(() =>
        repository.add({ name: "Gosho", birthday: new Date(1990, 12, 12) })
      ).to.throw(`Property age is missing from the entity!`);
    });

    it("should throw if data type is not correct", () => {
      let properties = {
        name: "string",
        age: "number",
        birthday: "object",
      };

      let repository = new Repository(properties);

      expect(() =>
        repository.add({
          name: 50,
          age: 30,
          birthday: new Date(1990, 10, 10),
        })
      ).to.throw("Property name is not of correct type!");

      expect(() =>
        repository.add({
          name: "Pesho",
          age: "30",
          birthday: new Date(1990, 10, 10),
        })
      ).to.throw("Property age is not of correct type!");

      expect(() =>
        repository.add({
          name: "Pesho",
          age: 30,
          birthday: 12,
        })
      ).to.throw("Property birthday is not of correct type!");
    });

    it("should return proper id", () => {
      let properties = {
        name: "string",
        age: "number",
        birthday: "object",
      };

      let repo = new Repository(properties);

      let entity = {
        name: "Gosho",
        age: 30,
        birthday: new Date(1990, 10, 10),
      };

      expect(repo.add(entity)).to.equal(0);
      expect(repo.add(entity)).to.equal(1);

      let info = repo.data.get(0);

      expect(info).to.deep.equal({
        name: "Gosho",
        age: 30,
        birthday: new Date(1990, 10, 10),
      });
    });
  });

  describe("getId(id)", () => {
    it("should return person's info", () => {
      let properties = {
        name: "string",
        age: "number",
        birthday: "object",
      };
      let repo = new Repository(properties);

      let entity = {
        name: "Gosho",
        age: 30,
        birthday: new Date(1990, 12, 12),
      };

      expect(repo.add(entity)).to.equal(0);
      expect(repo.add(entity)).to.equal(1);

      expect(repo.getId(0)).to.deep.equal({
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      });
      expect(repo.getId(1)).to.deep.equal({
        name: "Gosho",
        age: 30,
        birthday: new Date(1990, 12, 12),
      });
    });

    it("should throw if no such id", () => {
      let properties = {
        name: "string",
        age: "number",
        birthday: "object",
      };
      let repo = new Repository(properties);

      let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7),
      };

      expect(repo.add(entity)).to.equal(0);

      expect(() => {
        repo.getId(1);
      }).to.throw("Entity with id: 1 does not exist!");
    });
  });
  //Not Finished...
});
