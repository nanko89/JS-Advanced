class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    for (const vegetable of vegetables) {
      let [type, quantity, price] = vegetable.split(" ");

      if (!this.availableProducts.find((veg) => veg.type === type)) {
        this.availableProducts.push({
          type,
          quantity: Number(quantity),
          price,
        });
      } else {
        let currentVeg = this.availableProducts.find(
          (veg) => veg.type === type
        );
        currentVeg.price = price > currentVeg.price ? price : currentVeg.price;
        currentVeg.quantity += Number(quantity);
      }
    }
    let allVegetables = this.availableProducts
      .map((v) => `${v.type}`)
      .join(", ");
    return `Successfully added ${allVegetables}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (const product of selectedProducts) {
      let [type, quantity] = product.split(" ");
      let availableProduct = this.availableProducts.find(
        (p) => p.type === type
      );
      if (!availableProduct) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (availableProduct.quantity < Number(quantity)) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      availableProduct.quantity -= Number(quantity);
      totalPrice += quantity * availableProduct.price;
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  rottingVegetable(type, quantity) {
    let rottingProduct = this.availableProducts.find((p) => p.type === type);
    if (!rottingProduct) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (rottingProduct.quantity < quantity) {
      rottingProduct.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }

    rottingProduct.quantity -= quantity;
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let result = "Available vegetables:\n";

    let sortVegetables = this.availableProducts.sort(
      (a, b) => a.price - b.price
    );
    sortVegetables.forEach(
      (veg) => (result += `${veg.type}-${veg.quantity}-$${veg.price}\n`)
    );

    result += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
    return result;
  }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(
//   vegStore.loadingVegetables([
//     "Okra 2.5 3.5",
//     "Beans 10 2.8",
//     "Celery 5.5 2.2",
//     "Celery 0.5 2.5",
//   ])
// );
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(
  vegStore.loadingVegetables([
    "Okra 2.5 3.5",
    "Beans 10 2.8",
    "Celery 5.5 2.2",
    "Celery 0.5 2.5",
  ])
);
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
