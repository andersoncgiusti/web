const express = require('express');
const router = express.Router();

const booksController = require('../controllers/books.controller');

router.post('/api/books', booksController.booksPostUrl);
router.get('/api/books', booksController.booksGetUrl);
router.get('/api/books_status', booksController.books_status);

module.exports = router;