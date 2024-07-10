const express = require('express')
const booksController = require('./books.controller')

const router = express.Router()

router.get('/books', booksController.getBookList)
router.get('/books/:title',booksController.getBookByTitleQuery)
router.post('/books', booksController.addBook)
router.delete('/books', booksController.deleteBookByTitle)
router.put('/books', booksController.updateBookByTitle)

module.exports = router