import booksModel from "../models/books.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const createBook = asyncHandler(async (req, res) => {
    const { bookName, bookPrice } = user.body
    console.log(bookName)
    console.log(bookPrice)
    // booksModel.create({

    // })
})