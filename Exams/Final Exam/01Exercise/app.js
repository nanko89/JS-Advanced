window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.querySelector("#form-btn");

  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const age = document.querySelector("#age");
  const storyTitle = document.querySelector("#story-title");
  const genre = document.querySelector("#genre");
  const story = document.querySelector("#story");

  const previewList = document.querySelector("#preview-list");
  const maindiv = document.querySelector("#main");

  publishBtn.addEventListener("click", addStory);

  function addStory(e) {
    e.preventDefault();

    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let storyTitleValue = storyTitle.value;
    let genreValue = genre.value;
    let storyValue = story.value;

    if (
      !firstNameValue ||
      !lastNameValue ||
      !ageValue ||
      !storyTitleValue ||
      !storyValue
    ) {
      return;
    }

    let li = htmlGenerator("li", "", previewList);
    li.classList.add("story-info");
    let article = htmlGenerator("article", "", li);
    htmlGenerator("h4", `Name: ${firstNameValue} ${lastNameValue}`, article);
    htmlGenerator("p", `Age: ${ageValue}`, article);
    htmlGenerator("p", `Title: ${storyTitleValue}`, article);
    htmlGenerator("p", `Genre: ${genreValue}`, article);
    htmlGenerator("p", `${storyValue}`, article);

    let saveBtn = htmlGenerator("button", "Save Story", li);
    saveBtn.classList.add("save-btn");
    saveBtn.addEventListener("click", () => {
      while (maindiv.firstChild) {
        maindiv.removeChild(maindiv.firstChild);
      }
      htmlGenerator("h1", "Your scary story is saved!", maindiv);
    });

    let editBtn = htmlGenerator("button", "Edit Story", li);
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      firstName.value = firstNameValue;
      lastName.value = lastNameValue;
      age.value = ageValue;
      storyTitle.value = storyTitleValue;
      story.value = storyValue;
      genre.value = genreValue;
      publishBtn.disabled = false;
      editBtn.setAttribute("disabled", true);
      saveBtn.setAttribute("disabled", true);
      editBtn.setAttribute("disabled", true);
    });

    let deleteBtn = htmlGenerator("button", "Delete Story", li);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      publishBtn.disabled = false;
    });

    clearInput();

    publishBtn.setAttribute("disabled", true);
  }

  function clearInput() {
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    story.value = "";
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
