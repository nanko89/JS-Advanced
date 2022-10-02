function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function areaAndVolumeCalc(area, vol, input) {
  input = JSON.parse(input);
  let result = [];

  for (const entry of input) {
    let calcArea = area.call(entry);
    let calcVol = vol.call(entry);
    let obj = { area: calcArea, volume: calcVol };
    result.push(obj);
  }

  return result;
}

areaAndVolumeCalc(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);
