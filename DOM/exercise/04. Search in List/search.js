function search() {
  let townsItems = document.querySelectorAll("#towns li");

  let searchPattern = document.getElementById("searchText").value;
  let foundItem = 0;
  for (const item of townsItems) {
    if (item.textContent.includes(searchPattern)) {
      item.style.fontWeight = "bold";
      item.style.textDecoration = "underline";
      foundItem++;
    } else {
      item.style.fontWeight = "normal";
      item.style.textDecoration = "none";
    }
  }
  document.getElementById("result").textContent = `${foundItem} matches found`;
}
