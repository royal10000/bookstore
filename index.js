import express from 'express'
import 'dotenv/config'
const app = express()

app.get('/', (req, res) => {
    res.send(
        "hello world"
    )
})

app.listen(process.env.PORT, () => {
    console.log("app is running", process.env.PORT)
})