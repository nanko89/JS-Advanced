class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = Number(spaceAvailable);
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable - spaceRequired < 0) {
      throw new Error("Not enough space in the garden.");
    }

    let plant = { plantName, spaceRequired, ripe: false, quantity: 0 };
    this.spaceAvailable -= Number(spaceRequired);

    this.plants.push(plant);

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plantIndex = this.plants.findIndex((p) => p.plantName === plantName);
    if (plantIndex === -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (this.plants[plantIndex].ripe === true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    if (quantity === 1) {
      this.plants[plantIndex].ripe = true;
      this.plants[plantIndex].quantity += Number(quantity);
      return `${quantity} ${plantName} has successfully ripened.`;
    }

    this.plants[plantIndex].ripe = true;
    this.plants[plantIndex].quantity += Number(quantity);
    return `${quantity} ${plantName}s have successfully ripened.`;
  }

  harvestPlant(plantName) {
    let plantIndex = this.plants.findIndex((p) => p.plantName === plantName);
    if (plantIndex === -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (this.plants[plantIndex].ripe === false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    let quantity = this.plants[plantIndex].quantity;
    this.spaceAvailable += Number(this.plants[plantIndex].spaceRequired);

    this.plants.splice(plantIndex, 1);
    this.storage.push({ plantName, quantity });
    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let output = "";
    output += `The garden has ${this.spaceAvailable} free space left.\n`;
    let sortPlants = this.plants
      .sort((a, b) => a.plantName - b.plantName)
      .map((p) => p.plantName)
      .join(", ");
    output += `Plants in the garden: ${sortPlants}\n`;
    this.storage.length === 0
      ? (output += "Plants in storage: The storage is empty.")
      : (output += `Plants in storage: ${this.storage
          .map((p) => p.plantName + " (" + p.quantity + ")")
          .join(", ")}`);

    return output;
  }
}

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 200));
// console.log(myGarden.addPlant("olive", 50));

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("orange", 4));

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("olive", 30));

// const myGarden = new Garden(250);
// console.log(myGarden.addPlant("apple", 20));
// console.log(myGarden.addPlant("orange", 100));
// console.log(myGarden.addPlant("cucumber", 30));
// console.log(myGarden.ripenPlant("apple", 10));
// console.log(myGarden.ripenPlant("orange", 1));
// console.log(myGarden.ripenPlant("cucumber", -5));

const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
