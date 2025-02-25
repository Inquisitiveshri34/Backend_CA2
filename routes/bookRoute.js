const express = require("express")
const router = express.Router()
const bookController = require("../controllers/bookController")

router.post("/",bookController.addBook)

router.get("/",bookController.showAllBooks)

router.get("/:id",bookController.showBook)

router.put("/:id",bookController.updateBook)

router.delete("/:id",bookController.deleteBook)

module.exports = router