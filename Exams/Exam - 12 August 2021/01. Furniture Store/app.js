window.addEventListener("load", solve);

function solve(e) {
  let addButon = document.querySelector("#add");
  addButon.addEventListener("click", addFurnitureToList);

  function addFurnitureToList(e) {
    e.preventDefault();
    let model = document.querySelector("#model");
    let year = document.querySelector("#year");
    let description = document.querySelector("#description");
    let price = document.querySelector("#price");

    if (
      model.value === "" ||
      description.value === "" ||
      year.value === "" ||
      Number(year.value) < 0 ||
      price.value === "" ||
      Number(price.value) < 0
    ) {
      return;
    }

    function elementsCreator(tagName) {
      let element = document.createElement(tagName);
      return element;
    }

    let tBody = document.querySelector("#furniture-list");

    //Create DOM Elements
    let trInfo = elementsCreator("tr");
    let trHide = elementsCreator("tr");
    trInfo.classList.add("info");
    trHide.classList.add("hide");

    let tdName = elementsCreator("td");
    tdName.appendChild(document.createTextNode(`${model.value}`));
    let tdPrice = elementsCreator("td");
    tdPrice.appendChild(
      document.createTextNode(`${Number(price.value).toFixed(2)}`)
    );
    let tdActions = elementsCreator("td");

    let buttonMore = elementsCreator("button");
    let buttonBuy = elementsCreator("button");
    buttonMore.classList.add("moreBtn");
    buttonMore.appendChild(document.createTextNode("More Info"));
    buttonBuy.classList.add("buyBtn");
    buttonBuy.appendChild(document.createTextNode("Buy it"));

    let tdYear = elementsCreator("td");
    tdYear.appendChild(document.createTextNode(`Year:${Number(year.value)}`));
    let tdDescription = elementsCreator("td");
    tdDescription.appendChild(
      document.createTextNode(`Description:${description.value}`)
    );
    tdDescription.setAttribute("colspan", 3);

    //Implement event to More Button
    buttonMore.addEventListener("click", (e) => {
      if (e.target.textContent === "More Info") {
        e.target.textContent = "Less Info";
        trHide.style.display = "contents";
      } else {
        e.target.textContent = "More Info";
        trHide.style.display = "none";
      }
    });

    //Implement event to Buy Button
    buttonBuy.addEventListener("click", (e) => {
      let childElement = e.target.parentElement.parentElement;
      let totalPrice = document.querySelector(".total-price");
      let price = Number(childElement.querySelectorAll("td")[1].textContent);
      let sum = Number(totalPrice.textContent) + price;

      childElement.parentElement.removeChild(childElement);
      totalPrice.textContent = sum.toFixed(2);
    });

    //Append Child Element
    trHide.appendChild(tdYear);
    trHide.appendChild(tdDescription);

    tdActions.appendChild(buttonMore);
    tdActions.appendChild(buttonBuy);

    trInfo.appendChild(tdName);
    trInfo.appendChild(tdPrice);
    trInfo.appendChild(tdActions);

    tBody.appendChild(trInfo);
    tBody.appendChild(trHide);

    //Clear Inputs
    model.value = "";
    price.value = "";
    description.value = "";
    year.value = "";
  }
}
