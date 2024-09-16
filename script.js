let myLibrary =[
    
];


function Book(name, author, pages, readStatus){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus  = readStatus;
}

function addBookToLibrary(){

    
}

function display() {
    myLibrary.forEach((ele)=>{
        const sec = document.querySelector(".sec");
        const div = document.createElement("div");
        const name = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        
        name.textContent = `Name: ${ele.name}`;
        author.textContent = `Author: ${ele.author}`;
        pages.textContent = `Pages: ${ele.pages}`;

        sec.appendChild(div);
        div.appendChild(name);
        div.appendChild(author);
        div.appendChild(pages);

        div.classList.add("card");
    })
}


const btn = document.querySelector("button");
const dialog = document.querySelector("dialog");
btn.addEventListener("click", ()=>{
    dialog.showModal();

});
