const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.config");
const bookRouter = require('./routes/books.router')


const app = express();
dotenv.config();

connectDB();

const PORT = Number(process.env.PORT) || 8000;

app.use(express.json())
app.use(bookRouter)


app.listen(PORT, () => {
  console.log("Server listening on port: " + PORT);
});
