function solve() {
  let checkButton = document.querySelector("button");
  let clearButtomn = document.querySelectorAll("button")[1];
  let checkDiv = document.querySelectorAll("#check p")[0];
  let table = document.querySelector("table");

  checkButton.addEventListener("click", check);
  clearButtomn.addEventListener("click", clear);

  function check(e) {
    let isSolved = true;
    let tableValue = [];
    let tableRow = Array.from(document.querySelectorAll("tbody tr"));

    for (let item of tableRow) {
      let row = [];
      let cells = Array.from(item.querySelectorAll("input"));
      for (const cell of cells) {
        row.push(cell.value);
      }
      tableValue.push(row);
    }

    for (let i = 1; i < tableValue.length; i++) {
      let row = tableValue[i];
      let col = tableValue.map((row) => row[i]);
      if (
        col.length != [...new Set(col)].length ||
        row.length != [...new Set(row)].length
      ) {
        isSolved = false;
        break;
      }
    }

    if (isSolved) {
      table.style.border = "2px solid green";
      checkDiv.style.color = "green";
      checkDiv.textContent = "You solve it! Congratulations!";
    } else {
      table.style.border = "2px solid red";
      checkDiv.style.color = "red";
      checkDiv.textContent = "NOP! You are not done yet...";
    }
  }

  function clear() {
    let cells = Array.from(document.querySelectorAll("tbody td input"));
    for (const item of cells) {
      item.value = "";
    }
    table.style.border = "none";
    checkDiv.textContent = "";
  }
}
