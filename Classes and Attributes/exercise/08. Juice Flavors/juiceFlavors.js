function juice(input) {
  let initial = new Map();
  let fillinBottle = new Map();
  for (const item of input) {
    let fruitName = item.split(" => ")[0];
    let quantity = Number(item.split(" => ")[1]);
    if (!initial.has(fruitName)) {
      initial.set(fruitName, 0);
    }
    initial.set(fruitName, initial.get(fruitName) + quantity);

    while (initial.get(fruitName) - 1000 >= 0) {
      initial.set(fruitName, initial.get(fruitName) - 1000);
      fillinBottle.get(fruitName) === undefined
        ? fillinBottle.set(fruitName, 1)
        : fillinBottle.set(fruitName, fillinBottle.get(fruitName) + 1);
    }
  }
  for (let [name, quantity] of fillinBottle) {
    console.log(`${name} => ${quantity}`);
  }
}

juice([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
console.log("--------------------");
juice([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
