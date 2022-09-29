function validate() {
  let email = document.getElementById("email");
  let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

  email.addEventListener("change", function (e) {
    let currentEmail = email.value;
    if (pattern.test(currentEmail)) {
      e.currentTarget.removeAttribute("class");
      console.log(email.value);
    } else {
      e.currentTarget.classList.add("error");
    }
  });
}
