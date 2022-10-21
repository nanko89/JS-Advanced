function solve() {
  const addButton = document.querySelector("#add-worker");

  const fName = document.querySelector("#fname");
  const lName = document.querySelector("#lname");
  const email = document.querySelector("#email");
  const birth = document.querySelector("#birth");
  const position = document.querySelector("#position");
  const salary = document.querySelector("#salary");

  const tbody = document.querySelector("#tbody");
  let totalSum = document.querySelector("#sum");

  addButton.addEventListener("click", addWorker);

  function addWorker(e) {
    e.preventDefault();

    let fNameValue = fName.value;
    let lNameValue = lName.value;
    let emailValue = email.value;
    let birthValue = birth.value;
    let positionValue = position.value;
    let salaryValue = salary.value;

    if (
      !fNameValue ||
      !lNameValue ||
      !emailValue ||
      !birthValue ||
      !positionValue ||
      !salaryValue
    ) {
      return;
    }

    let tr = htmlGenerator("tr", "", tbody);
    htmlGenerator("td", fNameValue, tr);
    htmlGenerator("td", lNameValue, tr);
    htmlGenerator("td", emailValue, tr);
    htmlGenerator("td", birthValue, tr);
    htmlGenerator("td", positionValue, tr);
    htmlGenerator("td", salaryValue, tr);

    let td = htmlGenerator("td", "", tr);
    let firedButton = htmlGenerator("button", "Fired", td);
    firedButton.classList.add("fired");
    firedButton.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      totalSum.textContent = (
        Number(totalSum.textContent) - Number(salaryValue)
      ).toFixed(2);
    });

    let editButton = htmlGenerator("button", "Edit", td);
    editButton.classList.add("edit");
    editButton.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      fName.value = fNameValue;
      lName.value = lNameValue;
      email.value = emailValue;
      birth.value = birthValue;
      position.value = positionValue;
      salary.value = salaryValue;
      totalSum.textContent = (
        Number(totalSum.textContent) - Number(salaryValue)
      ).toFixed(2);
    });

    totalSum.textContent = (
      Number(totalSum.textContent) + Number(salaryValue)
    ).toFixed(2);

    clearInput();
  }

  function clearInput() {
    fName.value = "";
    lName.value = "";
    email.value = "";
    birth.value = "";
    position.value = "";
    salary.value = "";
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
solve();
