import express from 'express';
import { json, urlencoded } from 'express';
import path from 'path'


const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));

// Import route
import { bookRouter } from './routes/books.route.js';
app.use("/book", bookRouter);

export default app;

