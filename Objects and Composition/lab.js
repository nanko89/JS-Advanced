//01. City Record

function cityRecord(name, population, treasury) {
  return {
    name: name,
    population: population,
    treasury: treasury,
  };
}

//02. Town Population
function townPopulation(input) {
  let towns = {};

  for (const item of input) {
    let [name, population] = item.split(" <-> ");
    population = Number(population);
    if (towns[name] != undefined) {
      population += towns[name];
    }

    towns[name] = population;
  }

  for (const key in towns) {
    console.log(`${key} : ${towns[key]}`);
  }
}

//03. City Taxes
function cityTaxes(name, population, treasury) {
  return {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += population * this.taxRate;
    },
    applyGrowth(percent) {
      this.population += Math.floor((this.population * percent) / 100);
    },
    applyRecession(percent) {
      this.treasury -= Math.floor((this.treasury * percent) / 100);
    },
  };
}

//04. Object Factory

function objectFactory(library, orders) {
  let result = [];
  for (const order of orders) {
    let current = Object.assign({}, order.template);
    for (let part of order.parts) {
      current[part] = library[part];
    }
    result.push(current);
  }
  return result;
}
const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};
const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

//05.Assembly Line

objectFactory();
