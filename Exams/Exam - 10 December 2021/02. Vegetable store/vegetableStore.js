class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.availableProducts = [];
  }

  loadingVegetables(vegetables) {
    for (const item of vegetables) {
      let [type, quantity, price] = item.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      if (!this.availableProducts.find((p) => p.type === type)) {
        this.availableProducts.push({ type, quantity: 0, price: 0 });
      }
      let currentType = this.availableProducts.find((p) => p.type === type);

      currentType.quantity += quantity;

      if (currentType.price < price) {
        currentType.price = price;
      }
    }

    return `Successfully added ${this.availableProducts
      .map((v) => v.type)
      .join(", ")}`;
  }

  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    for (const item of selectedProducts) {
      let [type, quantity] = item.split(" ");
      quantity = Number(quantity);

      let currentType = this.availableProducts.find((p) => p.type === type);

      if (!currentType) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (currentType.quantity < quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }

      currentType.quantity -= quantity;
      totalPrice += quantity * currentType.price;
    }
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    let product = this.availableProducts.find((p) => p.type === type);
    if (!product) {
      throw new Error(`${type} is not available in the store.`);
    }
    if (product.quantity <= quantity) {
      product.quantity = 0;
      return `The entire quantity of the ${type} has been removed.`;
    }

    product.quantity -= Number(quantity);
    return `Some quantity of the ${type} has been removed.`;
  }

  revision() {
    let result = "Available vegetables:\n";

    let sortVegetables = this.availableProducts
      .sort((a, b) => a.price - b.price)
      .map((p) => `${p.type}-${p.quantity}-$${p.price}`);
    result += sortVegetables.join("\n");
    result += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`;
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
