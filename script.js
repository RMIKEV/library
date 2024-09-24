"use strict";
let myLibrary =[];


function Book(author, title, pages, readStatus){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus  = readStatus;
}

// push book to library
function addBookToLibrary(author, title, pages, readStatus){
    myLibrary.push(new Book(author, title, pages, readStatus));
}


// open modal-dialog
let btn = document.querySelector(".btn");
let dlog = document.querySelector("dialog")
btn.addEventListener("click",()=>{
    dlog.showModal();
});



// get values from input field
let cnf = document.querySelector(".cnf");
cnf.addEventListener("click", (event)=>{
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let readStatus = document.getElementById("readStatus").checked;
    addBookToLibrary(author, title, pages, readStatus);
    event.preventDefault();
    dlog.close();
});


// add and display book to sec
let sec = document.querySelector(".book-sec");
function display(){
    for(let i=0; i<myLibrary.length; ++i) {
        const div1 = document.createElement("div");
        div1.classList.add("card");

        const div2 = document.createElement("div");
        const author = document.createElement("p");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        author.textContent = `Author:   ${myLibrary[i].author}`;
        title.textContent  = `Title:    ${myLibrary[i].title}`;
        pages.textContent  = `Pages:    ${myLibrary[i].pages}`;
        div2.append(author, title, pages);
        div2.classList.add("info");

        const div3 = document.createElement("div");
        const readStatus = document.createElement("button");
        const dlt = document.createElement("button");
        div3.append(readStatus, dlt);
        div3.classList.add("btns");

        div1.append(div2, div3);
        sec.append(div1);
    }
    
    
}


