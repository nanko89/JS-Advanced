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
function createAssemblyLine() {
  return {
    hasClima: (car) => {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = () => {
        if (car.temp < car.tempSettings) {
          car.temp++;
        } else if (car.temp > car.tempSettings) {
          car.temp--;
        }
      };
    },

    hasAudio: (car) => {
      car.currentTrack = { name: "", artist: "" };
      car.nowPlaying = () => {
        if (car.currentTrack != null) {
          console.log(
            `Now playing ${car.currentTrack.name} by ${car.currentTrack.artist}`
          );
        }
      };
    },

    hasParktronic: (car) => {
      car.checkDistance = (distance) => {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (distance >= 0.1 && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (distance >= 0.25 && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };
}

//06. From JSON to HTML Table
function jsonToHtml(input) {
  let arr = JSON.parse(input);
  let htmlText = ["<table>"];

  htmlText.push(makeHeaderRow(arr[0]));
  arr.forEach((obj) => htmlText.push(makeRows(obj)));
  htmlText.push("</table>");

  function makeHeaderRow(array) {
    let keys = [];
    Object.keys(array).forEach((key) => {
      keys.push(`<th>${escapeHTML(key)}</th>`);
    });

    return "<tr>" + keys.join("") + "</tr>";
  }
  function makeRows(obj) {
    let rows = [];
    Object.values(obj).forEach((value) => {
      rows.push(`<td>${escapeHTML(value)}</td>`);
    });

    return "<tr>" + rows.join("") + "</tr>";
  }
  function escapeHTML(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  return htmlText.join("\r\n");
}
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
