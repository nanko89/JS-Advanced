// function extractText() {
//   let result = document.querySelector("#result");
//   let items = document.querySelectorAll("ul#items li");
//   for (let item of items) {
//     result.value += item.textContent + "\n";
//   }
// }

function extractText() {
  let result = document.getElementById("result");
  let items = document.getElementsByTagName("li");
  for (let item of items) {
    result.value += item.textContent + "\n";
  }
}
