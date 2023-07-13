import * as express from "express";
import Books from "../../db/queries/books";
import { tokenCheck } from "../../middlewares/auth.mw";

const router = express.Router();

//getById
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = await Books.getById(id);
        res.json(book[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Tried finding this book, but something went wrong." })
    }
});

//getAll
router.get('/', async (req, res) => {
    try {
        const books = await Books.getAll();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Tried fetching all books, but something went wrong." })
    }
});

router.post('/', tokenCheck, async (req, res) => {
    try {
        const { categoryid, title, author, price } = req.body;
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Tried adding new book listing, but something went wrong.", error: error.message })
    }
});