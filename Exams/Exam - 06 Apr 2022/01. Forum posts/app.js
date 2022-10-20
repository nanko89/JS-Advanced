window.addEventListener("load", solve);

function solve() {
  const publishButton = document.querySelector("#publish-btn");
  const clearButton = document.querySelector("#clear-btn");

  const reviewList = document.querySelector("#review-list");
  const publishedList = document.querySelector("#published-list");

  const title = document.querySelector("#post-title");
  const category = document.querySelector("#post-category");
  const content = document.querySelector("#post-content");

  publishButton.addEventListener("click", publish);

  function publish(e) {
    e.preventDefault();

    if (!title.value || !content.value || !category.value) {
      return;
    }

    let titleValue = title.value;
    let contentValue = content.value;
    let categoryValue = category.value;

    let li = htmlGenerator("li", "", reviewList);
    li.classList.add("rpost");
    let article = htmlGenerator("article", "", li);

    htmlGenerator("h4", `${title.value}`, article);
    htmlGenerator("p", `Category: ${category.value}`, article);
    htmlGenerator("p", `Content: ${content.value}`, article);

    let editBtn = htmlGenerator("button", "Edit", li);
    editBtn.classList.add("action-btn", "edit");
    editBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();

      title.value = titleValue;
      category.value = categoryValue;
      content.value = contentValue;
    });

    let approveBtn = htmlGenerator("button", "Approve", li);
    approveBtn.classList.add("action-btn", "approve");
    approveBtn.addEventListener("click", (e) => {
      let post = e.target.parentElement;
      post.removeChild(approveBtn);
      post.removeChild(editBtn);
      post.remove();
      publishedList.appendChild(post);
    });

    clearButton.addEventListener("click", () => {
      publishedList.innerHTML = "";
    });
    clearInput();
  }

  function clearInput() {
    title.value = "";
    category.value = "";
    content.value = "";
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
