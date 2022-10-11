class Person {
  constructor(firstName, secondName) {
    this.firstName = firstName;
    this.lastName = secondName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  set fullName(name) {
    this.firstName = name.split(" ")[0];
    this.lastName = name.split(" ")[1];
  }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName);
