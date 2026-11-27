// stores all the books
let myLibrary = [];
// Book Constructor
function Book(name, author, pages, readStatus, id) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
}

function addBookToLibrary(name, author, pages, readStatus) {
    let id = crypto.randomUUID();
    let book = new Book(name, author, pages, readStatus, id);
    myLibrary.push(book);
}

function displayBooks(myLibrary) {
    let main = document.querySelector("#main");
    main.textContent = " ";

    myLibrary.forEach((element) => {

        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = element.id;

        let title = document.createElement("div");
        title.textContent = `author: ${element.name}`;
        let author = document.createElement("div");
        author.textContent = `author: ${element.author}`;
        let pages = document.createElement('div');
        pages.textContent = `pages: ${element.pages}`;
        let readStatus = document.createElement("div");
        if (element.readStatus)
            readStatus.textContent = `Read Status: Has been read`;
        else
            readStatus.textContent = `Read Status: Has not been read yet`;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = `DELETE`;
        removeBtn.classList.add("removeBtn");


        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readStatus);
        card.appendChild(removeBtn);
        main.appendChild(card);
    });
}

let addNewBook = document.querySelector("#newBook");
addNewBook.addEventListener('click', () => {

    let dlg = document.querySelector("dialog");
    dlg.showModal();

});

let dialogAdd = document.querySelector("#dialogAdd");
dialogAdd.addEventListener("click", () => {

    let name = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readStatus = document.querySelector("#readStatus").checked;

    console.log(name, author, pages, readStatus);

    addBookToLibrary(name, author, pages, readStatus);

    displayBooks(myLibrary);

});


