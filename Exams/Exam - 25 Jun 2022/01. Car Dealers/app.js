window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.querySelector("#publish");
  const tBody = document.querySelector("#table-body");
  const carList = document.querySelector("#cars-list");

  const profit = document.querySelector("#profit");

  const make = document.querySelector("#make");
  const model = document.querySelector("#model");
  const year = document.querySelector("#year");
  const fuel = document.querySelector("#fuel");
  const cost = document.querySelector("#original-cost");
  const price = document.querySelector("#selling-price");

  publishBtn.addEventListener("click", publish);

  function publish(e) {
    e.preventDefault();

    if (
      !make.value ||
      !model.value ||
      !year.value ||
      !fuel.value ||
      !cost.value ||
      !price.value ||
      Number(price.value) < Number(cost.value)
    ) {
      return;
    }

    let tr = htmlGenerator("tr", "", tBody);
    tr.classList.add("row");

    htmlGenerator("td", `${make.value}`, tr);
    htmlGenerator("td", `${model.value}`, tr);
    htmlGenerator("td", `${year.value}`, tr);
    htmlGenerator("td", `${fuel.value}`, tr);
    htmlGenerator("td", `${cost.value}`, tr);
    htmlGenerator("td", `${price.value}`, tr);

    let td = htmlGenerator("td", "", tr);
    let editBtn = htmlGenerator("button", "Edit", td);
    let sellBtn = htmlGenerator("button", "Sell", td);
    editBtn.classList.add("action-btn", "edit");
    sellBtn.classList.add("action-btn", "sell");

    editBtn.addEventListener("click", editCar);
    sellBtn.addEventListener("click", sellCar);

    clearInput();
  }

  function sellCar(e) {
    let car = e.target.parentElement.parentElement;
    tBody.removeChild(car);

    let tdList = car.querySelectorAll("td");
    let make = tdList[0].textContent;
    let model = tdList[1].textContent;
    let year = tdList[2].textContent;
    let fuel = tdList[3].textContent;
    let cost = tdList[4].textContent;
    let price = tdList[5].textContent;
    let currentProfit = Number(price) - Number(cost);

    let li = htmlGenerator("li", "", carList);
    li.classList.add("each-list");

    htmlGenerator("span", `${make} ${model}`, li);
    htmlGenerator("span", `${year}`, li);
    htmlGenerator("span", `${currentProfit}`, li);

    profit.textContent = (Number(profit.textContent) + currentProfit).toFixed(
      2
    );
  }

  function editCar(e) {
    let car = e.target.parentElement.parentElement;
    tBody.removeChild(car);

    let tdList = car.querySelectorAll("td");

    make.value = tdList[0].textContent;
    model.value = tdList[1].textContent;
    year.value = tdList[2].textContent;
    fuel.value = tdList[3].textContent;
    cost.value = tdList[4].textContent;
    price.value = tdList[5].textContent;
  }

  function clearInput() {
    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    cost.value = "";
    price.value = "";
  }

  function htmlGenerator(type, content, parent) {
    const element = document.createElement(type);
    element.textContent = content;

    if (parent) {
      parent.appendChild(element);
    }
    return element;
  }
}
