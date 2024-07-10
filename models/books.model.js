const bookModel = require("./books.mongo");

const getAllBooks = async () => {
  return await bookModel.find({});
};

const getBookByTitle = async (bookTitle) => {
  return await bookModel.findOne({
    title: bookTitle,
  });
};

const addBook = async (book) => {
  return await bookModel.create(book);
};

const deleteBookByTitle = async (bookTitle) => {
  return await bookModel.findOneAndDelete({
    title: bookTitle,
  });
};

const updateBookByTitle = async (bookTitle, bookQuantityAvailable) => {
  return await bookModel.findOneAndUpdate(
    {
      title: bookTitle,
    },
    {
      quantityAvailable: bookQuantityAvailable,
    }
  );
};


module.exports = {
  getAllBooks,
  getBookByTitle,
  addBook,
  deleteBookByTitle,
  updateBookByTitle,
};
