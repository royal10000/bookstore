import { Schema, model } from 'mongoose'
const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true
    },
    bookPrice: {
        type: String,
        required: true
    }
}, {
    timeseries: true
})

export default Books = model("book", bookSchema)