class List {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  add(element) {
    this.items.push(Number(element));
    this.items.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Index out of bound");
    }

    this.items.splice(index, 1);
    this.size--;
  }

  get(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Index out of bound");
    }
    return this.items[index];
  }
}

let list = new List();
list.add(5);
list.add(3);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
