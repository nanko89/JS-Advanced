function addItem() {
  let newElement = document.getElementById("newItemText").value;
  let items = document.getElementById("items");
  if (newElement.length === 0) return;

  let listElement = document.createElement("li");
  listElement.textContent = newElement;

  let deleteElement = document.createElement("a");
  let linkText = document.createTextNode("[Delete]");

  deleteElement.appendChild(linkText);
  deleteElement.href = "#";
  deleteElement.addEventListener("click", deleteItem);

  listElement.appendChild(deleteElement);
  items.appendChild(listElement);

  newElement.value = "";
  function deleteItem() {
    listElement.remove();
  }
}
