import { Router } from "express";

const bookRouter = Router()

bookRouter.route("/").get((req, res) => {
    res.send("hello world")
})

export {
    bookRouter
}