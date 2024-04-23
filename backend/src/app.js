import express, { urlencoded } from 'express'

const app = express()

app.use(urlencoded({ extended: true }))


// for route
import { bookRouter } from './routes/books.route.js';

app.use("/", bookRouter)

export default app;