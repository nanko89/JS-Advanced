function solve() {
  let generateBtn = document.querySelector("button");
  let buyBtn = document.querySelectorAll("button")[1];

  generateBtn.addEventListener("click", genetate);
  buyBtn.addEventListener("click", buyProducts);

  function genetate() {
    let generateText = document.querySelectorAll("textarea")[0];
    let items = JSON.parse(generateText.value);
    let table = document.querySelector(".table tbody");

    for (const item of items) {
      let tableRow = document.createElement("tr");
      tableRow.innerHTML =
        `<td><img src = ${item.img}></td>` +
        `<td><p>${item.name}</p></td>` +
        `<td><p>${item.price}</p></td>` +
        `<td><p>${item.decFactor}</p></td>` +
        `<td><input type="checkbox"></td>`;

      table.appendChild(tableRow);
    }
  }

  function buyProducts() {
    let result = document.querySelectorAll("textarea")[1];
    let buyItemsName = [];
    let totalPrice = 0;
    let avgDecFactor = 0;

    let furnitures = Array.from(document.querySelectorAll("tbody tr"));

    for (const item of furnitures) {
      if (item.querySelector("input[type=checkbox]:checked")) {
        buyItemsName.push(item.querySelector("p").textContent);
        totalPrice += Number(item.querySelectorAll("p")[1].textContent);
        avgDecFactor += Number(item.querySelectorAll("p")[2].textContent);
      }
    }
    avgDecFactor /= buyItemsName.length;

    result.textContent = `Bought furniture: ${buyItemsName.join(
      ", "
    )}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${
      buyItemsName.length == 0 ? 0 : avgDecFactor
    }`;
  }
}
