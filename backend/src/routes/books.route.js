import { Router } from "express";
import { DeleteBook, createBook, getAllBook, getSingleBook, updateBook } from "../controllers/books.controller.js";
import upload from "../middlewares/upload.middleware.js";
const bookRouter = Router()

bookRouter.route("/").post(upload.single('bookImage'), createBook)
bookRouter.route("/").get(getAllBook)
bookRouter.route('/:_id').get(getSingleBook)
bookRouter.route('/:_id').delete(DeleteBook)
bookRouter.route("/:_id").patch(upload.single('bookImage'), updateBook)

export {
    bookRouter
}