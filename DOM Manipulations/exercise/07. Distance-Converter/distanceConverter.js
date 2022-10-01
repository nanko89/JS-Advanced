function attachEventsListeners() {
  let convertBtn = document.getElementById("convert");
  convertBtn.addEventListener("click", convert);

  function convert(e) {
    let inputValue = Number(document.getElementById("inputDistance").value);
    let inputUnit = document.getElementById("inputUnits").value;
    let outputUnit = document.getElementById("outputUnits").value;

    function convertToMeter(value, unit) {
      switch (unit) {
        case "km":
          return value * 1000;
        case "m":
          return value;
        case "cm":
          return value * 0.01;
        case "mm":
          return value * 0.001;
        case "mi":
          return value * 1609.34;
        case "yrd":
          return value * 0.9144;
        case "ft":
          return value * 0.3048;
        case "in":
          return value * 0.0254;
      }
    }

    function convertFromMeterToUnit(value, unit) {
      switch (unit) {
        case "km":
          return value / 1000;
        case "m":
          return value;
        case "cm":
          return value / 0.01;
        case "mm":
          return value / 0.001;
        case "mi":
          return value / 1609.34;
        case "yrd":
          return value / 0.9144;
        case "ft":
          return value / 0.3048;
        case "in":
          return value / 0.0254;
      }
    }

    let valueInMeter = convertToMeter(inputValue, inputUnit);
    console.log(valueInMeter);
    let output = convertFromMeterToUnit(valueInMeter, outputUnit);
    console.log(output);
    document.getElementById("outputDistance").value = output;
  }
}
