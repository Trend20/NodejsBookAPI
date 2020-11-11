const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 3000;

// setting the middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use(cors());

// declare books array
let books = [];

app.post('/book', (req, res) => {
    const book = req.body;

    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

// app.get('/books', (req, res) => {
//     res.render('newbook');
// })

// getting all books
app.get('/books', (req, res) => {
    res.json(books);
});

// get specific book
app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // deleting the book
    app.delete('/book/:isbn', (req, res) => {
        // Reading isbn from the URL
        const isbn = req.params.isbn;

        // Remove item from the books array
        books = books.filter(i => {
            if (i.isbn !== isbn) {
                return true;
            }
            return false;
        });

        res.send('Book is deleted');
    });

    // editing books
    app.post('/book/:isbn', (req, res) => {
        // Reading isbn from the URL
        const isbn = req.params.isbn;
        const newBook = req.body;

        // Remove item from the books array
        for (let i = 0; i < books.length; i++) {
            let book = books[i]
            if (book.isbn === isbn) {
                books[i] = newBook;
            }
        }

        res.send('Book is edited');
    });

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});