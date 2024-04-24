import { Schema, model } from 'mongoose'
const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
        trim: true
    },
    bookPrice: {
        type: String,
        required: true,
        trim: true
    },
    isbnNumber: {
        type: String ,
        required: true,
        unique: true,
        trim: true
    },
    authorName: {
        type: String,
        required: true,
        trim: true
    },
    publication: {
        type: String,
        required: true,
        trim: true
    },
    bookImage: {
        type: String,
        required: true
    }
}, {
    timeseries: true
})

const Book = model("book", bookSchema)
export default Book