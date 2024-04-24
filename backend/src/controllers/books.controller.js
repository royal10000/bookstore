import asyncHandler from "../utils/asyncHandler.js";
import ApiError from '../utils/ApiError.js'
import fs from 'fs'
import Book from "../models/books.model.js";
import ApiResponse from '../utils/ApiResponse.js'


const createBook = asyncHandler(async (req, res) => {
    console.log(req.file)
    const { originalname, mimetype, destination, filename, path } = req.file

    const { bookName, bookPrice, isbnNumber, authorName, publication } = req.body

    const existedIsbnNumber = await Book.findOne({ isbnNumber: isbnNumber })
    if (existedIsbnNumber) {
        fs.unlinkSync(path)
        throw new ApiError(400, "Isbn Number is already available . ")

    }

    if ([bookName, bookPrice, isbnNumber, authorName, publication].some((field) => {
        return !field || (field?.trim() === "")
    })) {
        fs.unlinkSync(path)
        throw new ApiError(400, 'somefile is missiing')
    }


    const createdBook = await Book.create({
        bookName: bookName,
        bookPrice: bookPrice,
        isbnNumber: isbnNumber,
        publication: publication,
        authorName: authorName,
        bookImage: filename
    })

    res.status(200).json(
        new ApiResponse(200, createdBook, "Book Created Successfully")
    )
})

export {
    createBook
}