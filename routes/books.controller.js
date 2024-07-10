const bookModel = require('./../models/books.model')

const getBookList = async (req,res) => {

    try {
        
        const result = await bookModel.getAllBooks()

        if(!result){
            throw Error('No books found')
        }

        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const getBookByTitleQuery = async (req,res) => {

    try {
        
        const title = req.params.title
        
        const result = await bookModel.getBookByTitle(title)

        if(!result){
            throw Error('No books found')
        }

        res.status(200).json(result)
    }catch (error) {
        res.status(404).json(error)
    }
}

const addBook = async (req,res) => {
    
    try {       
        const book = req.body

        const result = await bookModel.addBook(book)

        res.status(200).json(result)
    } catch (error) {
        
    }
}

const deleteBookByTitle = async (req,res) => {

    try {
        const {title} = req.body
        const result = bookModel.deleteBookByTitle(title)

        res.status(200).json(result)
    } catch (error) {
        
    }
}

const updateBookByTitle = async (req,res) => {

    try {
        const {title,quantityAvailable} = req.body
        const result = bookModel.updateBookByTitle(title, quantityAvailable)

        res.status(200).json(result)
    } catch (error) {
        
    }
}

module.exports = {
    getBookList,
    getBookByTitleQuery,
    addBook,
    deleteBookByTitle,
    updateBookByTitle
}