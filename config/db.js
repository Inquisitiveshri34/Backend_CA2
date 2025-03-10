const mongoose = require("mongoose")

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection successful")
    }catch(err){
        console.log("MongoDB connection failed!")
    }
}

module.exports = connectDB