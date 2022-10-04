function solve() {
  let task = document.querySelector("#task");
  let description = document.querySelector("#description");
  let date = document.querySelector("#date");

  let buttonAdd = document.querySelector("#add");

  buttonAdd.addEventListener("click", addTask);

  let sections = document.querySelectorAll("section");
  let openOrange = sections[1].querySelectorAll("div")[1];
  let inProgressYellow = sections[2].querySelectorAll("div")[1];
  let completeGreen = sections[3].querySelectorAll("div")[1];

  function addTask(e) {
    e.preventDefault();

    if (
      task.value.length === 0 ||
      description.value.length === 0 ||
      date.value.length === 0
    ) {
      return;
    }

    let articleElement = document.createElement("article");
    let h3Element = document.createElement("h3");
    let pDescription = document.createElement("p");
    let pDate = document.createElement("p");
    let div = document.createElement("div");
    let startBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.classList.add("red");
    startBtn.appendChild(document.createTextNode("Start"));
    startBtn.classList.add("green");

    div.classList.add("flex");
    div.appendChild(startBtn);
    div.appendChild(deleteBtn);
    pDate.appendChild(document.createTextNode(`Due Date: ${date.value}`));
    pDescription.appendChild(
      document.createTextNode(`Description: ${description.value}`)
    );
    h3Element.appendChild(document.createTextNode(task.value));

    articleElement.appendChild(h3Element);
    articleElement.appendChild(pDescription);
    articleElement.appendChild(pDate);
    articleElement.appendChild(div);

    openOrange.appendChild(articleElement);

    task.value = "";
    description.value = "";
    date.value = "";

    startBtn.addEventListener("click", startTask);
    deleteBtn.addEventListener("click", deleteTask);

    function startTask(e) {
      let article = e.target.parentElement.parentElement;
      let child = e.target.parentElement.parentElement;
      child.parentElement.removeChild(child);
      let divElement = article.querySelector("div");
      let startBtn = article.querySelector(".green");
      startBtn.parentElement.removeChild(startBtn);

      let finishBtn = document.createElement("button");
      finishBtn.appendChild(document.createTextNode("Finish"));
      finishBtn.classList.add("orange");

      divElement.appendChild(finishBtn);

      finishBtn.addEventListener("click", finishTask);

      inProgressYellow.appendChild(article);

      function finishTask(e) {
        let article = e.target.parentElement.parentElement;
        let child = e.target.parentElement.parentElement;
        child.parentElement.removeChild(child);

        console.log(article);
        let divElement = article.querySelector("div");
        console.log(divElement);
        divElement.parentElement.removeChild(divElement);

        completeGreen.appendChild(article);
      }
    }

    function deleteTask(e) {
      let child = e.target.parentElement.parentElement;
      child.parentElement.removeChild(child);
    }
  }
}
