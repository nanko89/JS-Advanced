window.addEventListener("load", solve);

function solve() {
  let publishButton = document.querySelector("#publish-btn");
  publishButton.addEventListener("click", publish);

  function publish(e) {
    e.preventDefault();
    let titleInput = document.getElementById("post-title");
    let categoryInput = document.getElementById("post-category");
    let contentInput = document.getElementById("post-content");
    let reviewList = document.getElementById("review-list");
    let publishedList = document.getElementById("published-list");
    let clearButton = document.getElementById("clear-btn");

    //Check is valid inputs
    if (
      titleInput.value === "" ||
      categoryInput.value === "" ||
      contentInput.value === ""
    ) {
      return;
    }

    //Factory elements
    function createHtmlElement(tagname, text) {
      let element = document.createElement(tagname);
      if (text) {
        element.textContent = text;
      }
      return element;
    }

    //Create elements
    let liElement = createHtmlElement("li");
    let articleElement = createHtmlElement("article");
    let titleElement = createHtmlElement("h4", `${titleInput.value}`);
    let categoryElement = createHtmlElement(
      "p",
      `Category: ${categoryInput.value}`
    );
    let contentElement = createHtmlElement(
      "p",
      `Content: ${contentInput.value}`
    );
    let buttonEdit = createHtmlElement("button", "Edit");
    let buttonApprove = createHtmlElement("button", "Approve");

    //Add classes to elements
    liElement.classList.add("rpost");
    buttonEdit.classList.add("action-btn", "edit");
    buttonApprove.classList.add("action-btn", "approve");

    //Append child
    articleElement.appendChild(titleElement);
    articleElement.appendChild(categoryElement);
    articleElement.appendChild(contentElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(buttonEdit);
    liElement.appendChild(buttonApprove);

    reviewList.appendChild(liElement);

    //Clear inputs
    titleInput.value = "";
    categoryInput.value = "";
    contentInput.value = "";

    //Add event to Buttons
    buttonEdit.addEventListener("click", (e) => {
      let currentElement = e.target.parentElement;
      currentElement.parentElement.removeChild(currentElement);

      titleInput.value = titleElement.textContent;
      categoryInput.value = categoryElement.textContent.substring(10);
      contentInput.value = contentElement.textContent.substring(9);
    });

    buttonApprove.addEventListener("click", (e) => {
      let currentElement = e.target.parentElement;
      currentElement.parentElement.removeChild(currentElement);
      let buttons = currentElement.querySelectorAll("button");
      currentElement.removeChild(buttons[0]);
      currentElement.removeChild(buttons[1]);

      publishedList.appendChild(currentElement);
    });

    clearButton.addEventListener("click", (e) => {
      let parentEl = e.target.parentElement.querySelector("ul");
      while (parentEl.lastElementChild) {
        parentEl.removeChild(parentEl.lastElementChild);
      }
    });
  }
}
