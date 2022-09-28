function generateReport() {
  debugger;
  let boxID = [];
  let allBoxes = Array.from(document.querySelectorAll("input"));

  allBoxes.forEach((el, index) => {
    if (el.checked) {
      boxID.push(index);
    }
  });

  let result = [];
  let rows = Array.from(document.querySelectorAll("tbody tr"));

  for (const row of rows) {
    let object = {};

    for (const index of boxID) {
      let name = allBoxes[index].name;
      let data = row.children[index].textContent;
      object[name] = data;
    }

    result.push(object);
  }

  let report = JSON.stringify(result);
  let output = document.getElementById("output");
  output.textContent = report;
}
