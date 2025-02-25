require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")
const app = express()
const bookRoute = require("./routes/bookRoute")

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/books",bookRoute)

app.get("/",(req,res)=>{
    res.send("Hi It's working")
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})
