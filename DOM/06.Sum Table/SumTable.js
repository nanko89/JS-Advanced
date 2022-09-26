function sumTable() {
  let tableCol = document.getElementsByTagName("td");

  let sum = 0;
  for (let i = 0; i < tableCol.length - 1; i++) {
    if (i % 2 === 1) {
      sum += Number(tableCol[i].textContent);
    }
  }

  document.getElementById("sum").textContent = sum;
}
