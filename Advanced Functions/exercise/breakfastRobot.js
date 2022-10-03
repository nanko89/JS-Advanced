function breakfastRobot() {
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let breakfastList = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  return function inputHandler(input) {
    let instructions = instructonHolder();
    let [command, element, quantity] = input.split(" ");
    return instructions[command](element, quantity);
  };

  function instructonHolder() {
    return {
      restock: (element, quantity) => {
        store[element] += Number(quantity);
        return "Success";
      },
      prepare: (recipe, qunatity) => {
        let currentRecipe = breakfastList[recipe];

        for (let [elment, elQuantity] of Object.entries(currentRecipe)) {
          let currentElement =
            store[elment] - Number(elQuantity) * Number(qunatity);
          if (currentElement < 0) {
            return `Error: not enough ${elment} in stock`;
          }
          store[elment] = currentElement;
        }
        return "Success";
      },
      report: () => {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`;
      },
    };
  }
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
