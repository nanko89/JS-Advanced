class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  get budget() {
    return this._budget;
  }

  set budget(value) {
    if (value < 0) {
      throw new Error("The budget cannot be a negative number");
    } else {
      this._budget = value;
    }
  }

  shopping(product) {
    let name = product[0];
    let price = Number(product[1]);
    if (this.budget < price) {
      throw new Error("Not enough money to buy this product");
    } else {
      this.budget -= price;
      this.products.push(name);
      return `You have successfully bought ${name}!`;
    }
  }

  recipes(recipe) {
    let neededProducts = recipe.productsList;

    for (const product of neededProducts) {
      if (!this.products.includes(product)) {
        throw new Error("We do not have this product");
      }
    }
    this.dishes.push(recipe);
    return `${recipe.recipeName} has been successfully cooked!`;
  }

  inviteGuests(name, dish) {
    if (!this.dishes.find((d) => d.recipeName === dish)) {
      throw new Error("We do not have this dish");
    }

    if (this.guests.hasOwnProperty(name)) {
      throw new Error("This guest has already been invited");
    }

    this.guests[name] = dish;
    return `You have successfully invited ${name}!`;
  }

  showAttendance() {
    let result = "";
    for (let [name, dish] of Object.entries(this.guests)) {
      let item = this.dishes.find((x) => x.recipeName === dish);
      result += `${name} will eat ${dish}, which consists of ${item.productsList.join(
        ", "
      )}\n`;
    }
    return result.trim();
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 1]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

console.log(
  dinner.recipes({
    recipeName: "Oshav",
    productsList: ["Fruits", "Honey"],
  })
);
console.log(
  dinner.recipes({
    recipeName: "Folded cabbage leaves filled with rice",
    productsList: ["Cabbage", "Rice", "Salt", "Savory"],
  })
);
console.log(
  dinner.recipes({
    recipeName: "Peppers filled with beans",
    productsList: ["Beans", "Peppers", "Salt"],
  })
);

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());
