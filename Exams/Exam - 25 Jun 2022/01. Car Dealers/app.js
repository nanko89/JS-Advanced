window.addEventListener("load", solve);

function solve() {
  const make = document.querySelector("#make");
  const model = document.querySelector("#model");
  const year = document.querySelector("#year");
  const fuel = document.querySelector("#fuel");
  const originalCost = document.querySelector("#original-cost");
  const sellingPrice = document.querySelector("#selling-price");

  const publishBtn = document.querySelector("#publish");
  publishBtn.addEventListener("click", publishCar);

  function publishCar(e) {
    e.preventDefault();
    //Validate input
    if (
      make.value === "" ||
      model.value === "" ||
      year.value === "" ||
      fuel.value === "" ||
      originalCost.value === "" ||
      sellingPrice.value === "" ||
      Number(sellingPrice.value) < Number(originalCost.value)
    ) {
      return;
    }

    //Factory Function
    function createElemet(title, text) {
      let element = document.createElement(title);
      if (text) {
        element.textContent = text;
      }
      return element;
    }

    //Create DOM Elements
    let tbody = document.querySelector("#table-body");
    let tr = createElemet("tr");
    tr.classList.add("row");

    let tdMake = createElemet("td", `${make.value}`);
    let tdModel = createElemet("td", `${model.value}`);
    let tdYear = createElemet("td", `${year.value}`);
    let tdFuel = createElemet("td", `${fuel.value}`);
    let tdOriginalCost = createElemet("td", `${originalCost.value}`);
    let tdSellingPrice = createElemet("td", `${sellingPrice.value}`);
    let tdActions = createElemet("td");

    let buttonEdit = createElemet("button", "Edit");
    let buttonSell = createElemet("button", "Sell");
    buttonEdit.classList.add("action-btn", "edit");
    buttonSell.classList.add("action-btn", "sell");

    //Append Child Element
    tdActions.appendChild(buttonEdit);
    tdActions.appendChild(buttonSell);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOriginalCost);
    tr.appendChild(tdSellingPrice);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);

    //Clear inputs
    make.value = "";
    model.value = "";
    year.value = "";
    fuel.value = "";
    originalCost.value = "";
    sellingPrice.value = "";

    // Edit Button
    buttonEdit.addEventListener("click", (e) => {
      let clearCar = e.target.parentElement.parentElement;
      tbody.removeChild(clearCar);

      make.value = tdMake.textContent;
      model.value = tdModel.textContent;
      year.value = tdYear.textContent;
      fuel.value = tdFuel.textContent;
      originalCost.value = tdOriginalCost.textContent;
      sellingPrice.value = tdSellingPrice.textContent;
    });

    //Sell Button
    buttonSell.addEventListener("click", (e) => {
      let carList = document.querySelector("#cars-list");
      let sellingCar = e.target.parentElement.parentElement;
      tbody.removeChild(sellingCar);

      let makeAndModel = `${tdMake.textContent} ${tdModel.textContent}`;
      let carYear = `${tdYear.textContent}`;
      let profitPrice = `${
        tdSellingPrice.textContent - tdOriginalCost.textContent
      }`;

      let liElement = createElemet("li");
      let firstSpan = createElemet("span", makeAndModel);
      let secondSpan = createElemet("span", carYear);
      let thirdSpan = createElemet("span", profitPrice);

      liElement.classList.add("each-list");
      liElement.appendChild(firstSpan);
      liElement.appendChild(secondSpan);
      liElement.appendChild(thirdSpan);

      carList.appendChild(liElement);
      let profit = document.querySelector("#profit");
      let total = Number(profit.textContent) + Number(profitPrice);
      profit.textContent = total.toFixed(2);
    });
  }
}
