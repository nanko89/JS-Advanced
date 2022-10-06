function notify(message) {
  let divContent = document.getElementById("notification");
  divContent.innerText = message;

  divContent.addEventListener("click", hiddenDiv);
  divContent.style.display = "block";
  function hiddenDiv() {
    divContent.style.display = "none";
  }
}
