//1.	Calorie Object

function calories(arr) {
  let calories = {};
  for (let i = 0; i < arr.length; i += 2) {
    let itemName = arr[i];
    let currentCal = Number(arr[i + 1]);
    calories[itemName] = currentCal;
  }
  console.log(calories);
}

//02. Construction Crew

function constructCrew(obj) {
  if (obj.dizziness === true) {
    obj.levelOfHydrated =
      obj.levelOfHydrated + obj.weight * obj.experience * 0.1;
    obj.dizziness = false;
  }

  return obj;
}

//03. Car Factory
function carFactory(obj) {
  function engine(horsepower) {
    if (horsepower <= 90) {
      return { power: 90, volume: 1800 };
    } else if (horsepower <= 120) {
      return { power: 120, volume: 2400 };
    } else if (horsepower <= 200) {
      return { power: 200, volume: 3500 };
    }
  }
  function carriage(type, color) {
    return { type, color };
  }
  function wheels(size) {
    if (size % 2 === 0) {
      return [size - 1, size - 1, size - 1, size - 1];
    } else {
      return [size, size, size, size];
    }
  }

  return {
    model: obj.model,
    engine: engine(obj.power),
    carriage: carriage(obj.carriage, obj.color),
    wheels: wheels(obj.wheelsize),
  };
}

//04. Heroic Inventory
function heroicInventory(input) {
  let listOfHero = [];
  function createHero(name, level, items) {
    return { name, level, items };
  }

  for (const hero of input) {
    let token = hero.split(" / ");
    let name = token.shift();
    let level = Number(token.shift());
    let items = token[0] ? token[0].split(", ") : [];
    let currentHero = createHero(name, level, items);

    listOfHero.push(currentHero);
  }
  return JSON.stringify(listOfHero);
}

//05. Lowest Prices in Cities
function lowestPrice(input) {
  let productList = [];
  function productFactory(townName, productName, price) {
    return { townName, productName, price };
  }

  function checkForSameProduct(newProduct) {
    for (const item of productList) {
      if (item.productName == newProduct.productName) {
        if (newProduct.price < item.price) {
          item.townName = newProduct.townName;
          item.price = newProduct.price;
          return productList;
        } else {
          return productList;
        }
      }
    }
    return productList.push(newProduct);
  }
  for (const item of input) {
    let token = item.split(" | ");
    let townName = token[0];
    let productName = token[1];
    let price = Number(token[2]);
    let newProduct = productFactory(townName, productName, price);

    checkForSameProduct(newProduct);
  }

  productList.forEach((item) =>
    console.log(`${item.productName} -> ${item.price} (${item.townName})`)
  );
}

//06. Store Catalogue
function storeCatalog(input) {
  let catalog = [];
  function productFactory(name, price) {
    return { name, price };
  }
  for (const item of input) {
    let name = item.split(" : ")[0];
    let price = item.split(" : ")[1];

    let newProduct = productFactory(name, price);
    catalog.push(newProduct);
  }
  let sorting = catalog.sort((a, b) => a.name.localeCompare(b.name));
  let firstChar = "";
  for (const item of sorting) {
    let currentChar = item.name.split("")[0];
    if (currentChar != firstChar) {
      firstChar = currentChar;
      console.log(firstChar);
    }
    console.log(`  ${item.name}: ${item.price}`);
  }
}

//07. Towns to JSON
function townsToJson(input) {
  let keys = input.shift().split(" | ");
  let towns = [];

  function createTown(info) {
    let town = {};

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = info[i];

      if (i === 0) {
        key = key.replace("| ", "");
        value = value.replace("| ", "");
      } else if (i === keys.length - 1) {
        key = key.replace(" |", "");
        value = value.replace(" |", "");
      }
      if (key === "Latitude" || key === "Longitude") {
        value = Number(Number(value).toFixed(2));
      }
      town[key] = value;
    }
    return town;
  }
  for (let i = 0; i < input.length; i++) {
    let town = createTown(input[i].split(" | "));
    towns.push(town);
  }
  return JSON.stringify(towns);
}

//08. Rectangle
function rectangle(width, height, color) {
  return {
    width,
    height,
    color: color[0].toUpperCase() + color.substring(1),
    calcArea() {
      return this.width * this.height;
    },
  };
}

//09. Sorted List
function createSortedList() {
  let items = [];

  let result = {
    add,
    remove,
    get,
    size: 0,
  };

  return result;

  function add(num) {
    items.push(num);
    this.size++;
    return items.sort((a, b) => a - b);
  }

  function remove(index) {
    if (index >= 0 && index < items.length) {
      items.splice(index, 1);
      this.size--;
      items.sort((a, b) => a - b);
    }
  }

  function get(index) {
    if (index >= 0 && index < items.length) {
      return items[index];
    }
  }
}

//10. Heroes

function solve() {
  const canCast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });

  const canFight = (state) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    },
  });

  const mage = (name) => {
    let state = {
      name,
      health: 100,
      mana: 100,
    };
    return Object.assign(state, canCast(state));
  };

  const fighter = (name) => {
    let state = { name, health: 100, stamina: 100 };
    return Object.assign(state, canFight(state));
  };

  return { mage: mage, fighter: fighter };
}

//11. Jan's Notation *
function jansNotation(arr) {
  let nums = [];
  let operator = [];
  let results = [];

  let operationEnum = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num1 / num2,
  };

  for (const item of arr) {
    if (typeof item == "number") {
      nums.push(item);
    } else {
      operator.push(item);
    }
  }

  if (operator.length < nums.length - 1) {
    console.log("Error: too many operands!");
    return;
  } else if (operator.length >= nums.length) {
    console.log("Error: not enough operands!");
    return;
  }

  for (const item of arr) {
    if (typeof item == "number") {
      results.push(item);
    } else {
      let num2 = results.pop();
      let num1 = results.pop();
      let currentResult = operationEnum[item](num1, num2);
      results.push(currentResult);
    }
  }
  console.log(results[0]);
}

jansNotation([3, 4, "+"]);
