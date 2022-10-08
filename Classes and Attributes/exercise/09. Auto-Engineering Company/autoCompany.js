function autoEngineering(input) {
  let company = new Map();

  for (const item of input) {
    let [carBrand, carModel, producedCars] = item.split(" | ");

    if (!company.has(carBrand)) {
      company.set(carBrand, new Map());
    }

    let brand = company.get(carBrand);

    if (!brand.has(carModel)) {
      brand.set(carModel, 0);
    }

    brand.set(carModel, brand.get(carModel) + Number(producedCars));
  }

  for (const [brand, models] of company) {
    console.log(brand);
    for (const [model, cars] of models) {
      console.log(`###${model} -> ${cars}`);
    }
  }
}

autoEngineering([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
