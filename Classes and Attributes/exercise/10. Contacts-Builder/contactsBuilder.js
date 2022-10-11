class Contact {
  constructor(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this._online = false;
    this.element = document.createElement("article");
  }

  get online() {
    return this._online;
  }

  set online(value) {
    this._online = value;

    if (this.title) {
      this.title.className = this._online ? "title online" : "title";
    }
  }

  getContent() {
    return `<div class="title">${this.firstName} ${this.lastName}<button>\u2139 </button></div>
              <div class="info" style="display: none;">
                  <span>\u260E ${this.phone}</span>
                  <span>\u2709 ${this.email}</span>
              </div>`;
  }

  render(id) {
    let parent = document.getElementById(id);
    this.element.innerHTML = this.getContent();
    let divTitle = this.element.querySelector(".title");
    this.title = divTitle;
    if (this.online) {
      this.title.classList.add("online");
    }
    parent.appendChild(this.element);

    let button = this.element.querySelector("button");
    let divInfo = this.element.querySelector(".info");

    button.addEventListener("click", (e) => {
      divInfo.style.display =
        divInfo.style.display == "none" ? "block" : "none";
    });
  }
}

let contacts = [
  new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
  new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
  new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com"),
];
contacts.forEach((c) => c.render("main"));

// // After 1 second, change the online status to true
// setTimeout(() => (contacts[1].online = true), 2000);
