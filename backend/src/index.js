import app from "./app.js"
import connectDB from "./database/index.js"

connectDB().then((value) => {
    app.on('error', () => {
        console.log("something is wrong while connecting to database")
    })

    app.setMaxListeners(12)
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
        console.log(`app is listening in port ${PORT}`)
    })
}).catch((err) => {
    console.log("something is wrong with database")
})


