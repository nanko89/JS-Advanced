function addItem() {
  let selectList = document.getElementById("menu");
  console.log(selectList.value);
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");

  let option = document.createElement("option");
  option.text = newItemText.value;
  option.value = newItemValue.value;

  selectList.appendChild(option);

  newItemText.value = "";
  newItemValue.value = "";
}
