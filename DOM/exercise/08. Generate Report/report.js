// function generateReport() {
//   debugger;
//   let boxID = [];
//   let allBoxes = Array.from(document.querySelectorAll("input"));

//   allBoxes.forEach((el, index) => {
//     if (el.checked) {
//       boxID.push(index);
//     }
//   });

//   let result = [];
//   let rows = Array.from(document.querySelectorAll("tbody tr"));

//   for (const row of rows) {
//     let object = {};

//     for (const index of boxID) {
//       let name = allBoxes[index].name;
//       let data = row.children[index].textContent;
//       object[name] = data;
//     }

//     result.push(object);
//   }

//   let report = JSON.stringify(result);
//   let output = document.getElementById("output");
//   output.textContent = report;
// }

function generateReport() {
  let tableRow = document.querySelectorAll("tbody tr");
  let tableHeadRow = document.querySelectorAll("thead tr th");
  let res = [];

  for (let i = 0; i < tableRow.length; i++) {
    let tableData = tableRow[i].cells;
    let tempData = {};
    for (let j = 0; j < tableData.length; j++) {
      let infoHeader = tableHeadRow[j].childNodes;

      if (infoHeader[1].checked) {
        tempData[infoHeader[0].textContent.trim().toLocaleLowerCase()] =
          tableData[j].textContent;
      }
    }
    res.push(tempData);
  }
  let jsonRes = JSON.stringify(res);
  document.getElementById("output").textContent = jsonRes;
}
