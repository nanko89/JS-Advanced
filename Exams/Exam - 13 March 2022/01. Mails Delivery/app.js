function solve() {
  const addButton = document.querySelector("#add");
  const resetButton = document.querySelector("#reset");
  const listMails = document.querySelector("#list");
  const sendList = document.querySelector(".sent-list");
  const deleteList = document.querySelector(".delete-list");

  addButton.addEventListener("click", addToList);
  resetButton.addEventListener("click", clearInputs);

  let recipientNameInput = document.querySelector("#recipientName");
  let titleInput = document.querySelector("#title");
  let messageInput = document.querySelector("#message");

  //Clear Inputs
  function clearInputs(e) {
    e.preventDefault();
    recipientNameInput.value = "";
    titleInput.value = "";
    messageInput.value = "";
  }

  //Add To List
  function addToList(e) {
    e.preventDefault();

    //Check inputs
    if (!recipientNameInput.value || !titleInput.value || !messageInput.value) {
      return;
    }

    //Create elements
    let liElement = htmlGenerator("li", "", listMails);
    let h4TitleElement = htmlGenerator(
      "h4",
      `Title: ${titleInput.value}`,
      liElement
    );
    let h4RecipientNameElement = htmlGenerator(
      "h4",
      `Recipient Name: ${recipientNameInput.value}`,
      liElement
    );
    htmlGenerator("span", `${messageInput.value}`, liElement);
    let divAction = htmlGenerator("div", "", liElement);
    let sendButton = htmlGenerator("button", "Send", divAction);
    let deleteButton = htmlGenerator("button", "Delete", divAction);

    //Set attribute to elements
    divAction.setAttribute("id", "list-action");

    sendButton.setAttribute("type", "submit");
    sendButton.setAttribute("id", "send");

    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("id", "delete");

    //Add events to SEND button

    sendButton.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();

      //Create Element
      let listMailElement = htmlGenerator("li", "", sendList);
      htmlGenerator(
        "span",
        "To: " + h4RecipientNameElement.textContent.substring(16) + " ",
        listMailElement
      );
      htmlGenerator("span", h4TitleElement.textContent, listMailElement);

      let divMailElement = htmlGenerator("div", "", listMailElement);
      let deleteMailButton = htmlGenerator("button", "Delete", divMailElement);

      //Set attribute
      deleteMailButton.setAttribute("type", "submit");
      deleteMailButton.setAttribute("class", "delete");
      divMailElement.setAttribute("class", "btn");

      deleteMailButton.addEventListener("click", deleteFunction);
    });

    deleteButton.addEventListener("click", deleteFunction);

    function deleteFunction(e) {
      e.target.parentElement.parentElement.remove();

      //Create Element
      let liRemoveElement = htmlGenerator("li", "", deleteList);
      htmlGenerator(
        "span",
        "To: " + h4RecipientNameElement.textContent.substring(16) + " ",
        liRemoveElement
      );

      htmlGenerator("span", h4TitleElement.textContent, liRemoveElement);
    }
    //Clear input
    titleInput.value = "";
    recipientNameInput.value = "";
    messageInput.value = "";
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
