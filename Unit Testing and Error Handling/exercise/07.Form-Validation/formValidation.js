function validate() {
  let valid = document.querySelector("#valid");
  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let confirmPassword = document.querySelector("#confirm-password");

  let company = document.querySelector("#company");
  let companyNumber = document.querySelector("#companyNumber");
  let companyInfo = document.querySelector("#companyInfo");
  let submit = document.querySelector("#submit");

  submit.addEventListener("click", changeOn);
  company.addEventListener("change", () => {
    if (company.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });

  function changeOn(e) {
    e.preventDefault();

    let isValid = true;

    let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    let passwordPattern = /^\w{5,15}$/;
    let confirmPasswordPattern = /^\w{5,15}$/;
    let emailPattern = /@(\w)*\./;

    validateElement(username, usernamePattern);
    validateElement(password, passwordPattern);
    validateElement(confirmPassword, confirmPasswordPattern);
    validateElement(email, emailPattern);
    if (password.value !== confirmPassword.value) {
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
      isValid = false;
    }

    if (company.checked) {
      if (
        Number(companyNumber.value) < 1000 ||
        Number(companyNumber.value) > 9999
      ) {
        companyNumber.style.borderColor = "red";
        isValid = false;
      } else {
        companyNumber.style.borderColor = "";
      }
    }

    function validateElement(element, pattern) {
      if (!pattern.test(element.value)) {
        element.style.borderColor = "red";
        isValid = false;
      } else {
        element.style.borderColor = "";
      }
    }

    if (isValid) {
      valid.style.display = "block";
    } else {
      valid.style.display = "none";
    }
  }
}
