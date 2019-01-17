const express = require('express');
const router = express.Router();
// Using a array of data on the server, we will eventually
// move this back into the database.
const books = require('../modules/book.data');

// Mark a book as read
router.put('/read/:id', function (req, res) {
    console.log(req.params);
    const bookId = req.params.id;
    for(const book of books) {
        if(book.id == bookId) {
            book.read = true;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET all the books
router.get('/', function (req, res) {
    res.send(books);
}); // END GET Route

module.exports = router;