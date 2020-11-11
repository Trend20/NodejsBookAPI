const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');

const app = express();

const port = 3000;

// our book array
let books = [];

app.use(cors());

app.set('view engine', 'ejs');

// static files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
// getting books
app.get('/books', (req, res) => {
    res.json(books);
});

// creating a new book
app.post('/book', (req, res) => {
    const book = req.body;

    console.log(book);
    books.push(book);
    res.send('Book added to the database');
});

app.listen(port, () => {
    console.log(`Application Running on port ${port}`);
})