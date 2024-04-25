import express from 'express';
import { json, urlencoded } from 'express';
import cors from 'cors';

const app = express();
// Middleware to parse JSON and URL-encoded bodies
app.use(json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static('./'))
app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))
// const corsOption={
//     origin:process.env.CORS,
//     options
// }

// Import route
import { bookRouter } from './routes/books.route.js';
app.use("/book", bookRouter);


export default app;
