function lockedProfile() {
  let buttons = document.getElementsByTagName("button");

  for (const button of buttons) {
    button.addEventListener("click", showMore);
  }

  function showMore(e) {
    let person = e.target.parentElement;
    let info = person.querySelector("div");

    let isLock = person.querySelector("input[type=radio]").checked;
    console.log(info);
    if (isLock) {
      return;
    } else {
      console.log(e.target.value);
      if (e.target.textContent === "Show more") {
        info.style.display = "block";
        e.target.textContent = "Hide it";
      } else {
        info.style.display = "none";
        e.target.textContent = "Show more";
      }
    }
  }
}
