import express from 'express';
import { json, urlencoded } from 'express';


const app = express();
// Middleware to parse JSON and URL-encoded bodies
app.use(json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static('./'))
// Import route
import { bookRouter } from './routes/books.route.js';
app.use("/book", bookRouter);


export default app;
