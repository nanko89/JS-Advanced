function solve() {
  const hireButton = document.querySelector("#add-worker");
  const sum = document.querySelector("#sum");
  const tableBody = document.querySelector("#tbody");

  const fNameInput = document.querySelector("#fname");
  const lNameInput = document.querySelector("#lname");
  const emailInput = document.querySelector("#email");
  const birthInput = document.querySelector("#birth");
  const positionInput = document.querySelector("#position");
  const salaryInput = document.querySelector("#salary");

  hireButton.addEventListener("click", hireWorkers);

  function hireWorkers(e) {
    e.preventDefault();
    //Check Input
    if (
      !fNameInput.value ||
      !lNameInput.value ||
      !emailInput.value ||
      !birthInput.value ||
      !positionInput.value ||
      !salaryInput.value
    ) {
      return;
    }
    // HTML Element Generator
    function htmlGenerator(tagName, text) {
      let element = document.createElement(tagName);
      if (text) {
        element.textContent = text;
      }
      return element;
    }

    //
    let trElement = htmlGenerator("tr");
    let tdFNameElement = htmlGenerator("td", `${fNameInput.value}`);
    let tdLNameElement = htmlGenerator("td", `${lNameInput.value}`);
    let tdEmailElement = htmlGenerator("td", `${emailInput.value}`);
    let tdBirthElement = htmlGenerator("td", `${birthInput.value}`);
    let tdPositionElement = htmlGenerator("td", `${positionInput.value}`);
    let tdSalaryElement = htmlGenerator("td", `${salaryInput.value}`);

    let tdAction = htmlGenerator("td");
    let firedButton = htmlGenerator("button", "Fired");
    let editButton = htmlGenerator("button", "Edit");

    firedButton.classList.add("fired");
    editButton.classList.add("edit");

    tdAction.appendChild(firedButton);
    tdAction.appendChild(editButton);

    trElement.appendChild(tdFNameElement);
    trElement.appendChild(tdLNameElement);
    trElement.appendChild(tdEmailElement);
    trElement.appendChild(tdBirthElement);
    trElement.appendChild(tdPositionElement);
    trElement.appendChild(tdSalaryElement);
    trElement.appendChild(tdAction);

    tableBody.appendChild(trElement);

    // let initSum = Number(sum.textContent);
    // sum.innerText = (Number(salaryInput.value) + initSum).toFixed(2);
    sum.textContent = (
      Number(sum.textContent) + Number(salaryInput.value)
    ).toFixed(2);

    fNameInput.value = "";
    lNameInput.value = "";
    emailInput.value = "";
    birthInput.value = "";
    positionInput.value = "";
    salaryInput.value = "";

    firedButton.addEventListener("click", (e) => {
      let currentEmployee = e.target.parentElement.parentElement;
      currentEmployee.parentElement.removeChild(currentEmployee);
      sum.textContent = (sum.textContent - tdSalaryElement.textContent).toFixed(
        2
      );
    });

    editButton.addEventListener("click", (e) => {
      let currentEmployee = e.target.parentElement.parentElement;
      currentEmployee.parentElement.removeChild(currentEmployee);
      sum.textContent = (sum.textContent - tdSalaryElement.textContent).toFixed(
        2
      );

      fNameInput.value = tdFNameElement.textContent;
      lNameInput.value = tdLNameElement.textContent;
      emailInput.value = tdEmailElement.textContent;
      birthInput.value = tdBirthElement.textContent;
      positionInput.value = tdPositionElement.textContent;
      salaryInput.value = tdSalaryElement.textContent;
    });
  }
}
solve();
