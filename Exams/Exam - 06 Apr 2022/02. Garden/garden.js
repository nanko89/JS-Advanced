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
    this.plants.push({
      plantName,
      spaceRequired: Number(spaceRequired),
      ripe: false,
      quantity: 0,
    });

    this.spaceAvailable -= Number(spaceRequired);
    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    let plant = this.plants.find((p) => p.plantName === plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error(`The quantity cannot be zero or negative.`);
    }

    plant.ripe = true;
    plant.quantity += Number(quantity);

    if (quantity === 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    let plant = this.plants.find((p) => p.plantName === plantName);

    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (!plant.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.spaceAvailable += Number(plant.spaceRequired);
    this.plants = this.plants.filter((p) => p.plantName !== plantName);
    this.storage.push({ plantName, quantity: Number(plant.quantity) });

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    let result = `The garden has ${this.spaceAvailable} free space left.\n`;

    let orderPlants = this.plants
      .sort((a, b) => a.plantName.localeCompare(b.plantName))
      .map((p) => p.plantName);

    result += "Plants in the garden: ";
    result += orderPlants.join(", ");

    result += "\n";

    if (this.storage.length === 0) {
      result += "Plants in storage: The storage is empty.\n";
    } else {
      result += "Plants in storage: ";
      let storageList = [];
      this.storage.forEach((p) =>
        storageList.push(`${p.plantName} (${p.quantity})`)
      );
      result += storageList.join(", ");
      result += "\n";
    }

    return result.trim();
  }
}
