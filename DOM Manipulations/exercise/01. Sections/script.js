function create(words) {
  let content = document.getElementById("content");

  for (const item of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let text = document.createTextNode(item);
    p.appendChild(text);
    p.style.display = "none";

    div.appendChild(p);
    div.addEventListener("click", showText);
    content.appendChild(div);
  }

  function showText(event) {
    if (event.target.nodeName === "P") {
      return;
    }

    let p = event.target.children[0];
    p.style.display = "block";
  }
}
