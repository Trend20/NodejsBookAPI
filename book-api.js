const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 3000;

// setting the middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// declare books array
let books = [];

app.post('/book', (req, res) => {
    const book = req.body;

    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});