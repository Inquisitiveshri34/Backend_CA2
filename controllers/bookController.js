const Book = require("../models/bookModel")

const addBook = async(req,res)=>{
    try{
        const { title, author, genre, publishedYear, availableCopies} = req.body;
        if (!title || !author || !genre || !availableCopies) {
            return res.status(400).send("Bad Request")
        }
        const newBook = new Book({
            title, author, genre, publishedYear, availableCopies
        })
        await newBook.save()
        res.status(200).send(newBook)
    } catch (err) {
        res.status(500).send("Internal Server Error")
    } 
}

const showBook = async(req,res)=>{
    try{
        const {id} = req.params
        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).send("Not Found")
        }
        res.status(200).send(book)
    }catch (err) {
        res.status(500).send("Internal Server Error")
    } 
}
const showAllBooks = async(req,res)=>{
    try{
        const books = await Book.find({})
        res.status(200).send(books)
    }catch (err) {
        res.status(500).send("Internal Server Error")
    } 
}
const updateBook = async(req,res)=>{
    try{
        const {id} = req.params
        const book = await Book.findByIdAndUpdate(id,req.body,{new:true})
        if (!book) {
            return res.status(404).send("Not Found")
        }
        res.status(200).send(book)
    }catch (err) {
        res.status(500).send("Internal Server Error")
    } 
}
const deleteBook = async(req,res)=>{
    try{
        const {id} = req.params
        const book = await Book.findByIdAndDelete(id)
        if (!book) {
            return res.status(404).send("Not Found")
        }
        res.status(200).send(book)
    }catch (err) {
        res.status(500).send("Internal Server Error")
    } 
}

module.exports = {addBook, showBook, showAllBooks, updateBook, deleteBook}