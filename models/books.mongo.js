const mongoose = require('mongoose')
const { Schema } = mongoose;

const bookSchema = new Schema({
    title : String,
    author : String,
    quantityAvailable : Number,
    price : Number,
    isAvailable : Boolean
})

module.exports = mongoose.model('Book', bookSchema)