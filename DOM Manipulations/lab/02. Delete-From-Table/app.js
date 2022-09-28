function deleteByEmail() {
  let result = document.getElementById("result");
  let isDelete = false;
  let input = document.getElementsByName("email")[0];
  let deleteEmail = input.value;
  debugger;
  let tableRows = document.querySelectorAll("#customers tbody tr");
  for (const item of tableRows) {
    let email = item.querySelector(":nth-child(2)");
    if (email.textContent === deleteEmail) {
      let row = email.parentNode;
      row.parentNode.removeChild(row);
      isDelete = true;
    }
    result.textContent === true ? "Deleted." : "Not found.";
    input.value = "";
  }
}
