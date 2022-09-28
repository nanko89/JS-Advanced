function addItem() {
  let items = document.getElementById("items");
  let input = document.getElementById("newItemText");

  let newItemText = input.value;

  let newLiElement = document.createElement("li");

  newLiElement.appendChild(document.createTextNode(newItemText));
  items.appendChild(newLiElement);
  input.value = "";
}
