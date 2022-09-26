function colorize() {
  let list = document.getElementsByTagName("tr");
  for (let item = 0; item < list.length; item++) {
    if (item % 2 === 1) {
      list[item].style.background = "teal";
    }
  }
}
