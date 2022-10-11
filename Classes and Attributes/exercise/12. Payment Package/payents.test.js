const expect = require("chai").expect;
const PaymentPackage = require("./payment");

describe("Test payment package", () => {
  it("should be instantiated with two parameters - a string name and number value", () => {
    let payment = new PaymentPackage("HR Services", 1500);
    expect(payment.name === "HR Services").to.be.true;
    expect(payment.value === 1500).to.be.true;
    expect(payment.VAT === 20).to.be.true;
    expect(payment.active).to.be.true;
  });

  it("should be throw error if name is invalid", () => {
    expect(() => {
      new PaymentPackage(10, 500);
    }).to.throw("Name must be a non-empty string");
    expect(() => {
      new PaymentPackage([], 500);
    }).to.throw("Name must be a non-empty string");
    expect(() => {
      new PaymentPackage("", 500);
    }).to.throw("Name must be a non-empty string");
  });

  it("should be throw error if value is invalid", () => {
    expect(() => {
      new PaymentPackage("HR Services");
    }).to.throw("Value must be a non-negative number");
    expect(() => {
      new PaymentPackage("HR Services", "550");
    }).to.throw("Value must be a non-negative number");
    expect(() => {
      new PaymentPackage("HR Services", -1);
    }).to.throw("Value must be a non-negative number");
    expect(() => {
      new PaymentPackage("HR Services", []);
    }).to.throw("Value must be a non-negative number");
  });

  it("should be throw error if VAT is invalid", () => {
    let payment = new PaymentPackage("HR Services", 1500);

    expect(() => {
      payment.VAT = [];
    }).to.throw("VAT must be a non-negative number");
    expect(() => {
      payment.VAT = -500;
    }).to.throw("VAT must be a non-negative number");
  });

  it("should be throw error if active is invalid", () => {
    let payment = new PaymentPackage("HR Services", 1500);

    expect(() => {
      payment.active = 50;
    }).to.throw("Active status must be a boolean");
    expect(() => {
      payment.active = "true";
    }).to.throw("Active status must be a boolean");
  });

  it("should print correct if change name", () => {
    let payment = new PaymentPackage("Consultation", 800);
    expect(payment.toString()).to.be.equal(
      "Package: Consultation\n" +
        "- Value (excl. VAT): 800\n" +
        "- Value (VAT 20%): 960"
    );

    payment.name = "Partnership Fee";

    expect(payment.name).to.be.equal("Partnership Fee");
    expect(payment.toString()).to.be.equal(
      "Package: Partnership Fee\n" +
        "- Value (excl. VAT): 800\n" +
        "- Value (VAT 20%): 960"
    );
  });

  it("should print correct if change value", () => {
    let payment = new PaymentPackage("Consultation", 800);
    expect(payment.toString()).to.be.equal(
      "Package: Consultation\n" +
        "- Value (excl. VAT): 800\n" +
        "- Value (VAT 20%): 960"
    );
    payment.value = 1000;
    expect(payment.value).to.be.equal(1000);
    expect(payment.toString()).to.be.equal(
      "Package: Consultation\n" +
        "- Value (excl. VAT): 1000\n" +
        "- Value (VAT 20%): 1200"
    );
  });

  it("should print if active is true and change VAT", () => {
    let payment = new PaymentPackage("Consultation", 800);
    expect(payment.toString()).to.be.equal(
      "Package: Consultation\n" +
        "- Value (excl. VAT): 800\n" +
        "- Value (VAT 20%): 960"
    );
    payment.VAT = 40;
    expect(payment.VAT).to.be.equal(40);
    expect(payment.toString()).to.be.equal(
      "Package: Consultation\n" +
        "- Value (excl. VAT): 800\n" +
        "- Value (VAT 40%): 1120"
    );
  });

  it("should print correct if active is change", () => {
    let payment = new PaymentPackage("Partnership Fee", 7000);
    payment.active = false;
    expect(payment.active).to.be.false;
    expect(payment.toString()).to.be.equal(
      "Package: Partnership Fee (inactive)\n" +
        "- Value (excl. VAT): 7000\n" +
        "- Value (VAT 20%): 8400"
    );
    payment.active = true;
    expect(payment.active).to.be.true;
    expect(payment.toString()).to.be.equal(
      "Package: Partnership Fee\n" +
        "- Value (excl. VAT): 7000\n" +
        "- Value (VAT 20%): 8400"
    );
  });

  it("toString should return correct result when VAT is 0", () => {
    let payment = new PaymentPackage("Partnership Fee", 0);
    payment.VAT = 0;
    expect(payment.toString()).to.equal(
      "Package: Partnership Fee\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0"
    );
  });
});
