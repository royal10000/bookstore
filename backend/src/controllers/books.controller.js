import asyncHandler from "../utils/asyncHandler.js";
import ApiError from '../utils/ApiError.js'
import fs, { unlinkSync } from 'fs'
import Book from "../models/books.model.js";
import ApiResponse from '../utils/ApiResponse.js'


const createBook = asyncHandler(async (req, res) => {
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


    const bookImage = `http://localhost:8000/${filename}`
    const createdBook = await Book.create({
        bookName: bookName,
        bookPrice: bookPrice,
        isbnNumber: isbnNumber,
        publication: publication,
        authorName: authorName,
        bookImage: bookImage
    })

    res.status(200).json(
        new ApiResponse(200, createdBook, "Book Created Successfully")
    )
})

const getAllBook = asyncHandler(async (req, res) => {
    const AllBook = await Book.find()
    res.status(200).json(
        new ApiResponse(200, AllBook, "All book fetched successfully")
    )
})

const getSingleBook = asyncHandler(async (req, res) => {
    const { _id } = req.params

    try {
        const singleBook = await Book.findOne({ _id })
        if (singleBook) {
            res.status(200).json(
                new ApiResponse(200, singleBook, " single book fetched successfully")
            )
        } else {
            res.status(200).json(
                new ApiResponse(200, {}, "Book not found")
            )
        }
    } catch (error) {
        throw new ApiError(400, "Book not found")
    }
})

const updateBook = asyncHandler(async (req, res) => {
    const { _id } = req.params
    const { bookName, bookPrice, isbnNumber, authorName, publication } = req.body
    let updatedBook = {}
    try {
        if (req.file) {
            const { originalname, mimetype, destination, filename, path } = req.file
            const BookFind = await Book.findById(_id)
            const bookImage = `http://localhost:8000/${filename}`
            updatedBook = await Book.findByIdAndUpdate(_id, {
                $set: {

                    bookName,
                    bookPrice,
                    isbnNumber,
                    publication,
                    authorName,
                    bookImage: bookImage

                }
            }, {
                new: true
            })

            // unlinkSync(`src/storage/${BookFind.bookImage}`)

        }
        else {
            updatedBook = await Book.findByIdAndUpdate(_id, {
                $set: {

                    bookName,
                    bookPrice,
                    isbnNumber,
                    publication,
                    authorName,

                }
            }, {
                new: true
            })
        }

        res.status(200).json(
            new ApiResponse(200, updatedBook, "Book updated successfully")
        )
    } catch (error) {
        throw new ApiError(400, "something is wrong while updating", error)
    }
})

const DeleteBook = asyncHandler(async (req, res) => {
    const { _id } = req.params
    console.log(_id)
    try {
        const hel = await Book.findById({ _id: _id })
        // console.log(hel)
        const { bookImage } = hel
        console.log(bookImage)
        const imgUrl = bookImage.replace('http://localhost:8000/', "")

        fs.unlinkSync(`src/storage/${imgUrl}`)
        await Book.findByIdAndDelete(_id)
        res.status(200).json(
            new ApiResponse(200, {}, "Book Deleted successfully")
        )
    } catch (error) {
        throw new ApiError(400, "Book not found", error)
    }
})
export {
    createBook,
    getAllBook,
    DeleteBook,
    getSingleBook,
    updateBook
}