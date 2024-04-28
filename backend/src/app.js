import express from 'express';
import { json, urlencoded } from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url'
import path, { dirname } from 'path';
import compression from 'compression'

const app = express();
// Middleware to parse JSON and URL-encoded bodies
app.use(json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static('./'))
app.use(compression())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
app.use(express.static(__dirname + '/storage'))
// Import route
import { bookRouter } from './routes/books.route.js';
app.use("/book", bookRouter);


export default app;
