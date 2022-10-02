function solve(input) {
  let processor = (function () {
    let collections = [];
    return {
      add: (item) => collections.push(item),
      remove: (item) => (collections = collections.filter((x) => x !== item)),
      print: () => console.log(collections.join(",")),
    };
  })();

  for (let data of input) {
    let [command, text] = data.split(" ");
    processor[command](text);
  }
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
