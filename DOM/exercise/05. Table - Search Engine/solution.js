function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let input = document.getElementById("searchField");
    let tableRows = document.querySelectorAll("tbody tr");

    for (const row of tableRows) {
      if (input.value !== "" && row.innerHTML.includes(input.value)) {
        row.className = "select";
      } else {
        row.className = "";
      }
    }

    input.value = "";
  }
}
