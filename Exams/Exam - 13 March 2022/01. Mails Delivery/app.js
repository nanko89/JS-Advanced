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

    //Factory elements
    function htmlGenerator(tagName, text) {
      let element = document.createElement(tagName);
      if (text) {
        element.textContent = text;
      }
      return element;
    }

    //Create elements
    let liElement = htmlGenerator("li");
    let h4TitleElement = htmlGenerator("h4", `Title: ${titleInput.value}`);
    let h4RecipientNameElement = htmlGenerator(
      "h4",
      `Recipient Name: ${recipientNameInput.value}`
    );
    let spanMessageElement = htmlGenerator("span", `${messageInput.value}`);
    let divAction = htmlGenerator("div");
    let sendButton = htmlGenerator("button", "Send");
    let deleteButton = htmlGenerator("button", "Delete");

    //Set attribute to elements
    divAction.setAttribute("id", "list-action");

    sendButton.setAttribute("type", "submit");
    sendButton.setAttribute("id", "send");

    deleteButton.setAttribute("type", "submit");
    deleteButton.setAttribute("id", "delete");

    //Append child to element
    divAction.appendChild(sendButton);
    divAction.appendChild(deleteButton);

    liElement.appendChild(h4TitleElement);
    liElement.appendChild(h4RecipientNameElement);
    liElement.appendChild(spanMessageElement);
    liElement.appendChild(divAction);

    listMails.appendChild(liElement);

    //Clear input
    titleInput.value = "";
    recipientNameInput.value = "";
    messageInput.value = "";

    //Add events to SEND button

    sendButton.addEventListener("click", (e) => {
      let currentElement = e.target.parentElement.parentElement;

      //Remove element
      currentElement.parentElement.removeChild(currentElement);

      //Create Element
      let spanRecipientNameMailElement = htmlGenerator(
        "span",
        "To: " + h4RecipientNameElement.textContent.substring(16) + " "
      );

      let listMailElement = htmlGenerator("li");
      let spanTitleMailElement = htmlGenerator(
        "span",
        h4TitleElement.textContent
      );

      let divMailElement = htmlGenerator("div");
      let deleteMailButton = htmlGenerator("button", "Delete");

      //Set attribute
      deleteMailButton.setAttribute("type", "submit");
      deleteMailButton.setAttribute("class", "delete");
      divMailElement.setAttribute("class", "btn");

      //Append child
      divMailElement.appendChild(deleteMailButton);
      listMailElement.appendChild(spanRecipientNameMailElement);
      listMailElement.appendChild(spanTitleMailElement);
      listMailElement.appendChild(divMailElement);

      sendList.appendChild(listMailElement);

      deleteMailButton.addEventListener("click", deleteFunction);
    });

    deleteButton.addEventListener("click", deleteFunction);

    function deleteFunction(e) {
      let currentElement = e.target.parentElement.parentElement;

      //Remove element
      currentElement.parentElement.removeChild(currentElement);

      //Create Element
      let spanRecipientNameDeleteElement = htmlGenerator(
        "span",
        "To: " + h4RecipientNameElement.textContent.substring(16) + " "
      );

      let spanTitleDeleteElement = htmlGenerator(
        "span",
        h4TitleElement.textContent
      );

      let liRemoveElement = htmlGenerator("li");
      liRemoveElement.appendChild(spanRecipientNameDeleteElement);
      liRemoveElement.appendChild(spanTitleDeleteElement);
      deleteList.appendChild(liRemoveElement);
    }
  }
}
solve();
