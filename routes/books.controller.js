const bookModel = require("./../models/books.model");

const getBookList = async (req, res, next) => {
  try {
    const result = await bookModel.getAllBooks();

    if (!result) {
      res.status(404);
      throw Error("No books found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getBookByTitleQuery = async (req, res, next) => {
  try {
    const title = req.params.title;

    const result = await bookModel.getBookByTitle(title);

    if (!result) {
      res.status(404);
      throw Error("No books found");
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addBook = async (req, res, next) => {
  try {
    const book = req.body;

    const existingBook = await bookModel.getBookByTitle(book.title);

    if (existingBook) {
      res.status(409);
      throw Error("Book already present in the library");
    }

    const result = await bookModel.addBook(book);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteBookByTitle = async (req, res, next) => {
  try {
    const { title } = req.body;

    const existingBook = await bookModel.getBookByTitle(title);

    if (!existingBook) {
      res.status(404);
      throw Error("No book with this title present in the library");
    }

    const result = bookModel.deleteBookByTitle(title);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const updateBookByTitle = async (req, res, next) => {
  try {
    const { title, quantityAvailable } = req.body;

    const existingBook = await bookModel.getBookByTitle(title);

    if (!existingBook) {
      res.status(404);
      throw Error("No book with this title present in the library");
    }

    const result = bookModel.updateBookByTitle(title, quantityAvailable);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getBookList,
  getBookByTitleQuery,
  addBook,
  deleteBookByTitle,
  updateBookByTitle,
};
