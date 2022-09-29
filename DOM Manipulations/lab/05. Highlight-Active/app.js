function focused() {
  let inputs = document.getElementsByTagName("input");

  for (const input of inputs) {
    input.addEventListener("focus", focused);
    input.addEventListener("blur", blured);
  }

  function focused(event) {
    event.target.parentElement.classList.add("focused");
  }

  function blured(event) {
    event.target.parentElement.classList.remove("focused");
  }
}
