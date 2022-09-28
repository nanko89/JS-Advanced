function solve() {
  let input = document.getElementById("input").value;
  let sentences = input.split(".").filter((s) => s !== "");
  let result = document.getElementById("output");

  while (sentences.length > 0) {
    let text = sentences.splice(0, 3).join(". ") + ".";
    let p = document.createElement("p");
    p.textContent = text;
    result.appendChild(p);
  }
}
