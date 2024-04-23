import app from "./app.js"

app.get("/",(req,res)=>{
    res.send("helo world")
})

app.listen(8000,()=>{
    console.log("localhost is running")
})

