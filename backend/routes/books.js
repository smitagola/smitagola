import express from "express";
import { db } from "../db.js";
import { getBooks, createNewBook, deleteBook, getBook } from "../controllers/book.js";

const router = express.Router();

//GET books details
router.get("/", getBooks);

//POST add new book
router.post("/new", createNewBook);

//DELETE a book
router.delete("/:id", deleteBook);

// GET book details for particular book
router.get("/:id", getBook);

// // GET books from category wise
// router.get("/browseCategories/:name", getBookByCategory);

// router.get("/author", getBookByAuthor);

export default router;