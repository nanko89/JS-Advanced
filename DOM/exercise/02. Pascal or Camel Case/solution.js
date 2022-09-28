function solve() {
  let text = document.getElementById("text").value;
  let words = text.split(" ");
  let namingConvention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  if (namingConvention === "Camel Case") {
    let camelResult = "";
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === 0) {
        camelResult +=
          word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
      } else {
        camelResult +=
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }
    result.textContent = camelResult;
  } else if (namingConvention === "Pascal Case") {
    let namingResult = "";
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      namingResult +=
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    result.textContent = namingResult;
  } else {
    result.textContent = "Error!";
  }
}
