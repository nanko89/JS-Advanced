function solve() {
  let onScreenBtn = document.querySelector("button");
  let clearBtn = document.querySelector("#archive button");

  let movieSection = document.querySelector("#movies").querySelector("ul");
  let archiveSection = document.querySelector("#archive").querySelector("ul");

  onScreenBtn.addEventListener("click", onScreen);

  function onScreen(e) {
    e.preventDefault();

    let container = document
      .querySelector("#container")
      .querySelectorAll("input");
    let name = container[0];
    let hall = container[1];
    let ticketPrice = container[2];

    if (
      name.value === "" ||
      hall.value === "" ||
      ticketPrice.value === "" ||
      isNaN(Number(ticketPrice.value))
    ) {
      return;
    }
    let liElement = document.createElement("li");
    let span = document.createElement("span");
    let strongHall = document.createElement("strong");

    let div = document.createElement("div");
    let strongPrice = document.createElement("strong");
    let input = document.createElement("input");
    let button = document.createElement("button");

    button.appendChild(document.createTextNode("Archive"));
    input.placeholder = "Tickets Sold";
    strongPrice.appendChild(
      document.createTextNode(Number(ticketPrice.value).toFixed(2))
    );

    div.appendChild(strongPrice);
    div.appendChild(input);
    div.appendChild(button);

    strongHall.appendChild(document.createTextNode(`Hall: ${hall.value}`));
    span.appendChild(document.createTextNode(name.value));

    liElement.appendChild(span);
    liElement.appendChild(strongHall);
    liElement.appendChild(div);

    movieSection.appendChild(liElement);
    name.value = "";
    hall.value = "";
    ticketPrice.value = "";

    button.addEventListener("click", archiveMovie);

    function archiveMovie(e) {
      let movieName =
        e.target.parentElement.parentElement.querySelector("span").textContent;
      let price = e.target.parentElement.querySelector("strong").textContent;
      let tickets = e.target.parentElement.querySelector("input").value;
      let deleteLi = e.target.parentElement.parentElement;

      if (isNaN(Number(tickets)) || tickets === "") {
        return;
      }

      deleteLi.parentElement.removeChild(deleteLi);

      let liElement = document.createElement("li");
      let span = document.createElement("span");
      let strong = document.createElement("strong");
      let deleteBtn = document.createElement("button");

      deleteBtn.appendChild(document.createTextNode("Delete"));
      strong.appendChild(
        document.createTextNode(`Total amount: ${(tickets * price).toFixed(2)}`)
      );

      span.appendChild(document.createTextNode(movieName));

      liElement.appendChild(span);
      liElement.appendChild(strong);
      liElement.appendChild(deleteBtn);

      archiveSection.appendChild(liElement);

      deleteBtn.addEventListener("click", deleteMovie);
      clearBtn.addEventListener("click", clearArchive);

      function clearArchive(e) {
        let ulElemet = e.target.parentElement.querySelector("ul");
        ulElemet.innerHTML = "";
      }

      function deleteMovie(e) {
        let listItem = e.target.parentElement;
        listItem.parentElement.removeChild(listItem);
      }
    }
  }
}
