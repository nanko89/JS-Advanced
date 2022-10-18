function solve(){
const createBtn = document.querySelector(".btn");

const postSection = document.querySelector(".site-content section");
const archiveSection = document.querySelector(".archive-section ol");

const author = document.querySelector("#creator");
const title = document.querySelector("#title");
const category = document.querySelector("#category");
const content = document.querySelector("#content");

createBtn.addEventListener("click", createPost);

function createPost(e){
e.preventDefault();
let titleValue = title.value;

let article = htmlGenerator("article", "", postSection);

htmlGenerator("h1", `${title.value}`, article);

let categoryElemet = htmlGenerator("p", "Category:", article);
htmlGenerator("strong", `${category.value}`, categoryElemet);

let creatorElement = htmlGenerator("p", "Creator:", article);
htmlGenerator("strong", `${author.value}`, creatorElement);

htmlGenerator("p", `${content.value}`, article);

let div = htmlGenerator("div", "", article);
let deleteBtn = htmlGenerator("button", "Delete", div);
let archiveBtn = htmlGenerator("button", "Archive", div);

div.classList.add("buttons");
deleteBtn.classList.add("btn", "delete");
archiveBtn.classList.add("btn", "archive");

deleteBtn.addEventListener("click", deletePost);
archiveBtn.addEventListener("click", archivePost);

author.value = "";
title.value = "";
content.value = "";
category.value = "";

function archivePost(e){
e.target.parentElement.parentElement.remove();

htmlGenerator("li", titleValue, archiveSection);

let sortList = Array.from(archiveSection.querySelectorAll("li")).sort((a,b) => a.textContent.localeCompare(b.textContent));
console.log(sortList);
archiveSection.innerHTML = '';

for (const item of sortList) {
    archiveSection.appendChild(item);
}
}

function deletePost(e){
    e.target.parentElement.parentElement.remove();
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
