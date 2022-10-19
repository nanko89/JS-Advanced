function solve() {
  const allSection = document.querySelectorAll("section");
  const orangeSecton = allSection[1];
  const yellowSection = allSection[2];
  const greenSection = allSection[3];

  const task = document.querySelector("#task");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");

  const addTaskButton = document.querySelector("#add");

  addTaskButton.addEventListener("click", addTask);

  function addTask(e) {
    e.preventDefault();

    let div = orangeSecton.querySelectorAll("div")[1];
    let article = htmlGenerator("article", "", div);
    htmlGenerator("h3", `${task.value}`, article);
    htmlGenerator("p", `Description: ${description.value}`, article);
    htmlGenerator("p", `Due Date: ${date.value}`, article);

    let divActive = htmlGenerator("div", "", article);
    let startBtn = htmlGenerator("button", "Start", divActive);
    let deleteBtn = htmlGenerator("button", "Delete", divActive);

    divActive.classList.add("flex");
    startBtn.classList.add("green");
    deleteBtn.classList.add("red");

    startBtn.addEventListener("click", startTask);
    deleteBtn.addEventListener("click", deleteTask);

    task.value = "";
    description.value = "";
    date.value = "";
  }

  function startTask(e) {
    let task = e.target.parentElement.parentElement;
    let divActive = e.target.parentElement;
    let startBtn = task.querySelector("button");
    startBtn.remove();

    task.parentElement.removeChild(task);
    let finishBtn = htmlGenerator("button", "Finish", divActive);
    finishBtn.classList.add("orange");

    yellowSection.querySelectorAll("div")[1].appendChild(task);

    finishBtn.addEventListener("click", finishTask);
  }

  function deleteTask(e) {
    let task = e.target.parentElement.parentElement;
    task.parentElement.removeChild(task);
  }

  function finishTask(e) {
    let task = e.target.parentElement.parentElement;
    let divActive = e.target.parentElement;
    task.removeChild(divActive);
    greenSection.querySelectorAll("div")[1].appendChild(task);
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
