function encodeAndDecodeMessages() {
  let btnCode = document.querySelector("button");
  let btnEncode = document.querySelectorAll("button")[1];

  let stattingText = document.querySelector("textarea");
  let returnText = document.querySelectorAll("textarea")[1];

  btnCode.addEventListener("click", codeText);
  btnEncode.addEventListener("click", encodeText);

  function codeText(e) {
    let parent = e.target.parentElement;
    let text = parent.getElementsByTagName("textarea")[0].value;
    let codeText = "";
    for (const letter of text) {
      codeText += String.fromCharCode(letter.charCodeAt(0) + 1);
    }

    stattingText.value = "";
    returnText.value = codeText;
  }

  function encodeText(e) {
    let parent = e.target.parentElement;
    let text = parent.getElementsByTagName("textarea")[0].value;
    let codeText = "";
    for (const letter of text) {
      codeText += String.fromCharCode(letter.charCodeAt(0) - 1);
    }
    returnText.value = codeText;
  }
}
