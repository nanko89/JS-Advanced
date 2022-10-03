//02. Argument Info

function argumentInfo(...input) {
  let obj = {};

  for (item of input) {
    let type = typeof item;
    console.log(type + ": " + item);
    if (!obj.hasOwnProperty(type)) {
      obj[type] = 0;
    }
    obj[type]++;
  }

  let object = Object.entries(obj);
  object
    .sort((a, b) => b[1] - a[1])
    .forEach((o) => console.log(o[0] + " = " + o[1]));
}
