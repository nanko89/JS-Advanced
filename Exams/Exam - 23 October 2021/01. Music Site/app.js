window.addEventListener("load", solve);

function solve() {
  const addButton = document.querySelector("#add-btn");

  const genre = document.querySelector("#genre");
  const name = document.querySelector("#name");
  const author = document.querySelector("#author");
  const date = document.querySelector("#date");

  const hitContainer = document.querySelector(".all-hits-container");
  const saveContainer = document.querySelector(".saved-container");

  let totalLikes = document.querySelector("#total-likes p");

  addButton.addEventListener("click", addSong);

  function addSong(e) {
    e.preventDefault();
    if (!genre.value || !name.value || !author.value || !date.value) {
      return;
    }

    let div = htmlGenerator("div", "", hitContainer);
    div.classList.add("hits-info");

    let img = htmlGenerator("img", "", div);
    img.setAttribute("src", "./static/img/img.png");

    htmlGenerator("h2", `Genre: ${genre.value}`, div);
    htmlGenerator("h2", `Name: ${name.value}`, div);
    htmlGenerator("h2", `Author: ${author.value}`, div);
    htmlGenerator("h3", `Date: ${date.value}`, div);

    let saveBtn = htmlGenerator("button", "Save song", div);
    saveBtn.classList.add("save-btn");
    saveBtn.addEventListener("click", saveSong);

    let likeBtn = htmlGenerator("button", "Like song", div);
    likeBtn.classList.add("like-btn");
    likeBtn.addEventListener("click", likeSong);

    let deleteBtn = htmlGenerator("button", "Delete", div);
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", deleteSong);

    genre.value = "";
    name.value = "";
    author.value = "";
    date.value = "";

    function deleteSong(e) {
      let element = e.target.parentElement;
      if (likeBtn.disabled === true) {
        let startLikes = totalLikes.textContent;
        let currentLikes = Number(startLikes.split(" ").pop());
        totalLikes.textContent = `Total Likes: ${--currentLikes}`;
      }
      element.parentElement.removeChild(element);
    }

    function likeSong(e) {
      let startLikes = totalLikes.textContent;
      let currentLikes = Number(startLikes.split(" ").pop());
      totalLikes.textContent = `Total Likes: ${++currentLikes}`;

      e.target.setAttribute("disabled", "true");
    }

    function saveSong(e) {
      let element = e.target.parentElement;
      element.parentElement.removeChild(element);

      let buttons = element.querySelectorAll("button");

      buttons[0].remove();
      buttons[1].remove();

      saveContainer.appendChild(element);
    }

    function htmlGenerator(tagName, content, parent) {
      let element = document.createElement(tagName);
      element.textContent = content;
      if (parent) {
        parent.appendChild(element);
      }
      return element;
    }
  }
}
