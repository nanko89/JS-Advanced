function validate() {
  let input = document.getElementById("email");
  input.addEventListener("change", checkEmail);

  function checkEmail(e) {
    let emailPattern = /[a-z]+@[a-z]+\.[a-z]+/g;
    let email = e.target.value;
    if (emailPattern.test(email)) {
      e.target.classList.remove("error");
      console.log(emailPattern.test(email));
    } else {
      e.target.classList.add("error");
      console.log(emailPattern.test(email));
    }
  }
}
