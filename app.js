const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = 3000;

// our book array
let books = [];

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
    res.send('Our Bookapi Application')
});

app.listen(port, () => {
    console.log(`Application Running on port ${port}`);
})