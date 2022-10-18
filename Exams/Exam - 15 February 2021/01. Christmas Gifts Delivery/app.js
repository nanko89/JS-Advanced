function solution() {
  const addGiftBtn = document.querySelector("button");
  const giftName = document.querySelector("input");
  const sections = document.querySelectorAll("section");
  const listOfGiftsSection = sections[1];
  const sendGiftsSection = sections[2];
  const discardGiftsSection = sections[3];

  addGiftBtn.addEventListener("click", addGift);

  function addGift(e) {
    e.preventDefault();
    let giftNameValue = giftName.value;
    let ulList = listOfGiftsSection.querySelector("ul");
    let li = htmlGenerator("li", `${giftNameValue}`, ulList);
    li.classList.add("gift");
    let sendButton = htmlGenerator("button", "Send", li);
    let discardButton = htmlGenerator("button", "Discard", li);
    sendButton.setAttribute("id", "sendButton");
    discardButton.setAttribute("id", "discardButton");

    let orderGift = ulList.querySelectorAll("li");
    orderGift = Array.from(orderGift).sort((a, b) =>
      a.textContent.localeCompare(b.textContent)
    );

    ulList.innerHTML = "";
    orderGift.forEach((gift) => ulList.appendChild(gift));

    sendButton.addEventListener("click", sendGift);
    discardButton.addEventListener("click", discardGift);

    giftName.value = "";

    function sendGift(e) {
      e.target.parentElement.remove();
      let ul = sendGiftsSection.querySelector("ul");
      let liSendElement = htmlGenerator("li", `${giftNameValue}`, ul);
      liSendElement.classList.add("gift");
    }
    function discardGift(e) {
      e.target.parentElement.remove();
      let ul = discardGiftsSection.querySelector("ul");
      let liSendElement = htmlGenerator("li", `${giftNameValue}`, ul);
      liSendElement.classList.add("gift");
    }
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
