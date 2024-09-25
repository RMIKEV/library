"use strict";
let myLibrary =[{author:"rmikev", title:"js advance", pages: 1, readStatus:"on",},
    {author:"rmikev", title:"js advance", pages: 2, readStatus:"on",},
    {author:"rmikev", title:"js advance", pages: 3, readStatus:"on",},
    {author:"rmikev", title:"js advance", pages: 4, readStatus:"on",},
];

let btn = document.querySelector(".btn");
let dlog = document.querySelector("dialog");
let cnf = document.querySelector(".cnf");

// Object Constructor
function Book(author, title, pages, readStatus){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus  = readStatus;
    
}



// push book to library
function addBookToLibrary(){
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let readStatus = document.getElementById("readStatus").checked;
    myLibrary.push(new Book(author, title, pages, readStatus));
}


// open modal-dialog
btn.addEventListener("click",()=>{
    dlog.showModal();
});


let form = document.querySelector("form");
// prevent default bheviour of sumbit button
cnf.addEventListener("click", (event)=>{
    event.preventDefault();
    addBookToLibrary();
    display();
    form.reset();
    dlog.close();
});





// add and display book to section
let sec = document.querySelector(".book-sec");

function display(){
    sec.textContent = " ";
    for(let i=0; i<myLibrary.length; ++i) {
        const div1 = document.createElement("div");
        div1.classList.add("card");
        div1.dataset.i = i;
        const div2 = document.createElement("div");
        const author = document.createElement("p");
        const title = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");
        author.textContent = `Author:   ${myLibrary[i].author}`;
        title.textContent  = `Title:    ${myLibrary[i].title}`;
        pages.textContent  = `Pages:    ${myLibrary[i].pages}`;
        read.textContent   = `Read Status: ${myLibrary[i].readStatus}`
        div2.append(author, title, pages, read);
        div2.classList.add("info");

        const div3 = document.createElement("div");
        
        const readStatus = document.createElement("input");
        readStatus.type ="checkbox";
        readStatus.setAttribute("id",i);
        readStatus.setAttribute("class","checkbox");
        const label = document.createElement("label");
        label.setAttribute("for", i);
        label.setAttribute("class", "switch");
        // toogle read status
        readStatus.onclick = () =>toggle(i);
        
        const dlt = document.createElement("button");
        dlt.classList.add("dlt");
        // remove book from arr
        dlt.onclick = () => removeBook(i);
        div3.append(readStatus, label, dlt);
        div3.classList.add("btns");

        div1.append(div2, div3);
        sec.append(div1);
    }
    

}
function toggle(i){
    myLibrary[i].toggleRead();
    display();
}

function removeBook(idx){
   myLibrary.splice(idx,1);
   display();
}
