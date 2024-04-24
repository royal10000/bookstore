import { Router } from "express";
import { createBook } from "../controllers/books.controller.js";
import upload from "../middlewares/upload.middleware.js";
const bookRouter = Router()

bookRouter.route("/").post(upload.single('image'),createBook)

export {
    bookRouter
}