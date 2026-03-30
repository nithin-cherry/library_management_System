const express = require("express");
const cors = require("cors");

const books = require("./books");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "1234") {
        res.json({ success: true, message: "Login successful" });
    }
    else if (email === "nithin@gmail.com" && password === "cherry") {
        res.json({ success: true, message: "Login successful" });
    }
    else {
        res.json({ success: false, message: "Invalid credentials" });
    }

});


app.get("/books", (req, res) => {

    res.json(books);

});


app.post("/issue-book", (req, res) => {

    const { bookId } = req.body;

    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.json({ message: "Book not found" });
    }

    if (book.availableCopies > 0) {

        book.availableCopies--;

        res.json({ message: "Book Issued" });
    }
    else {

        res.json({ message: "Book Not Available" });

    }

});


app.listen(3000, () => {

    console.log("Server running on port 3000");

});