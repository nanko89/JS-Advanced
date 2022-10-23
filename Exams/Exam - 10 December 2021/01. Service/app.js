window.addEventListener("load", solve);

function solve() {
  document
    .querySelector("button[type=submit]")
    .addEventListener("click", createTask);

  let productType = document.querySelector("#type-product");
  let description = document.querySelector("#description");
  let name = document.querySelector("#client-name");
  let phone = document.querySelector("#client-phone");

  let receivSection = document.querySelector("#received-orders");
  let finishSection = document.querySelector("#completed-orders");

  document.querySelector(".clear-btn").addEventListener("click", () => {
    let collentions = finishSection.querySelectorAll(".container");
    Array.from(collentions).forEach((e) => e.remove());
  });

  function createTask(e) {
    e.preventDefault();

    let typeValue = productType.value;
    let descriptionValue = description.value;
    let nameValue = name.value;
    let phoneValue = phone.value;

    if (!descriptionValue || !nameValue || !phoneValue) {
      return;
    }

    clearInput();

    createOrder(typeValue, descriptionValue, nameValue, phoneValue);

    function createOrder(typeValue, descriptionValue, nameValue, phoneValue) {
      let divContainer = htmlGenerator("div", "", receivSection);
      divContainer.classList.add("container");

      let h2 = htmlGenerator(
        "h2",
        `Product type for repair: ${typeValue}`,
        divContainer
      );
      let h3 = htmlGenerator(
        "h3",
        `Client information: ${nameValue}, ${phoneValue}`,
        divContainer
      );
      let h4 = htmlGenerator(
        "h4",
        `Description of the problem: ${descriptionValue}`,
        divContainer
      );

      let startBtn = htmlGenerator("button", "Start repair", divContainer);
      startBtn.classList.add("start-btn");
      startBtn.addEventListener("click", startRepair);

      let finishBtn = htmlGenerator("button", "Finish repair", divContainer);
      finishBtn.classList.add("finish-btn");
      finishBtn.setAttribute("disabled", true);
      finishBtn.addEventListener("click", finishTask);

      function startRepair(e) {
        e.target.setAttribute("disabled", true);
        let finishBtn = e.target.parentElement.querySelector(".finish-btn");
        finishBtn.disabled = false;
      }

      function finishTask(e) {
        let divContainer = e.target.parentElement;
        finishSection.appendChild(divContainer);
        let buttons = divContainer.querySelectorAll("button");
        buttons[0].remove();
        buttons[1].remove();
      }
    }

    function htmlGenerator(tagName, content, parent) {
      let element = document.createElement(tagName);
      element.textContent = content;
      if (parent) {
        parent.appendChild(element);
      }
      return element;
    }

    function clearInput() {
      description.value = "";
      name.value = "";
      phone.value = "";
    }
  }
}

///Second decision

// function solve() {
//   const sendButton = document.querySelector("button");
//   const clearButton = document.querySelector(".clear-btn");

//   const type = document.querySelector("#type-product");
//   const description = document.querySelector("#description");
//   const name = document.querySelector("#client-name");
//   const phone = document.querySelector("#client-phone");

//   const recivedOrders = document.querySelector("#received-orders");
//   const completedOrders = document.querySelector("#completed-orders");

//   sendButton.addEventListener("click", sendForm);
//   clearButton.addEventListener("click", clearOrder);
//   function sendForm(e) {
//     e.preventDefault();

//     let typeValue = type.value;
//     let descriptionValue = description.value;
//     let nameValue = name.value;
//     let phoneValue = phone.value;

//     if (!descriptionValue || !nameValue || !phoneValue) {
//       return;
//     }

//     let div = htmlGenerator("div", "", recivedOrders);
//     div.classList.add("container");

//     htmlGenerator("h2", `Product type for repair: ${typeValue}`, div);
//     htmlGenerator("h3", `Client information: ${nameValue}, ${phoneValue}`, div);
//     htmlGenerator("h4", `Description of the problem: ${descriptionValue}`, div);

//     let startBtn = htmlGenerator("button", "Start repair", div);
//     startBtn.classList.add("start-btn");
//     startBtn.addEventListener("click", () => {
//       startBtn.setAttribute("disabled", true);
//       finishBtn.disabled = false;
//     });

//     let finishBtn = htmlGenerator("button", "Finish repair", div);
//     finishBtn.classList.add("finish-btn");
//     finishBtn.setAttribute("disabled", true);
//     finishBtn.addEventListener("click", (e) => {
//       e.target.parentElement.remove();

//       let div = htmlGenerator("div", "", completedOrders);
//       div.classList.add("container");

//       htmlGenerator("h2", `Product type for repair: ${typeValue}`, div);
//       htmlGenerator(
//         "h3",
//         `Client information: ${nameValue}, ${phoneValue}`,
//         div
//       );
//       htmlGenerator(
//         "h4",
//         `Description of the problem: ${descriptionValue}`,
//         div
//       );
//     });

//     clearInput();
//   }

//   function clearOrder(e) {
//     debugger;

//     e.preventDefault();

//     let divElements = completedOrders.getElementsByClassName("container");

//     Array.from(divElements).forEach((el) => el.remove());
//   }

//   function htmlGenerator(tagName, content, parent) {
//     let element = document.createElement(tagName);
//     element.textContent = content;
//     if (parent) {
//       parent.appendChild(element);
//     }
//     return element;
//   }

//   function clearInput() {
//     description.value = "";
//     name.value = "";
//     phone.value = "";
//   }
// }
