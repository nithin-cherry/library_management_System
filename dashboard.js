let allBooks = [];

async function loadBooks() {

    const response = await fetch("http://localhost:3000/books");

    const books = await response.json();

    allBooks = books;

    displayBooks(books);
}


function displayBooks(books) {

    const container = document.getElementById("bookList");

    container.innerHTML = "";

    if (books.length === 0) {
        container.innerHTML = "<p>No books found</p>";
        return;
    }

    books.forEach(book => {

        const div = document.createElement("div");

        const status = book.availableCopies > 0 ? "Available" : "Not Available";

        div.innerHTML = `
            <h3>${book.title}</h3>
            <p>Status: ${status}</p>
            <button onclick="issueBook(${book.id})">Issue Book</button>
            <hr>
        `;

        container.appendChild(div);
    });
}


async function issueBook(bookId) {

    const response = await fetch("http://localhost:3000/issue-book", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ bookId })
    });

    const data = await response.json();

    alert(data.message);

    loadBooks();
}


document.getElementById("book").addEventListener("input", function () {

    const searchText = this.value.toLowerCase();

    const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchText)
    );

    displayBooks(filteredBooks);
});


loadBooks();