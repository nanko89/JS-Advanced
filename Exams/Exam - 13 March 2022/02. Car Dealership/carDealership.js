class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (!model || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }

    this.availableCars.push({ model, horsepower, price, mileage });

    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model, desiredMileage) {
    let car = this.availableCars.find((c) => c.model === model);
    if (!car) {
      throw new Error(`${model} was not found!`);
    }

    let diffMileage = car.mileage - desiredMileage;
    let soldPrice = 0;
    if (diffMileage <= 0) {
      soldPrice = car.price;
    } else if (diffMileage <= 40000) {
      soldPrice = car.price * 0.95;
    } else {
      soldPrice = car.price * 0.9;
    }

    this.totalIncome += soldPrice;

    this.availableCars = this.availableCars.filter((c) => c.model !== model);
    this.soldCars.push({
      model,
      horsepower: Number(car.horsepower),
      soldPrice,
    });
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length === 0) {
      return "There are no available cars";
    } else {
      let result = "-Available cars:\n";
      this.availableCars.forEach(
        (c) =>
          (result += `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
            2
          )} km - ${c.price.toFixed(2)}$\n`)
      );

      return result.trim();
    }
  }

  salesReport(criteria) {
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }
    criteria === "horsepower"
      ? this.soldCars.sort((a, b) => b.horsepower - a.horsepower)
      : this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

    let result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length} cars sold:`,
    ];

    this.soldCars.map((c) =>
      result.push(
        `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`
      )
    );

    return result.join("\n");
  }
}

// let dealership = new CarDealership("SoftAuto");
// console.log(dealership.addCar("Toyota Corolla", 100, 3500, 190000));
// console.log(dealership.addCar("Mercedes C63", 300, 29000, 187000));
// console.log(dealership.addCar("", 120, 4900, 240000));

// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.sellCar("Toyota Corolla", 230000));
// console.log(dealership.sellCar("Mercedes C63", 110000));

// let dealership = new CarDealership("SoftAuto");
// dealership.addCar("Toyota Corolla", 100, 3500, 190000);
// dealership.addCar("Mercedes C63", 300, 29000, 187000);
// dealership.addCar("Audi A3", 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
