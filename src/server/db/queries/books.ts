import { Query } from "..";
import { Book, BookWCatName } from "../../../types"

const getAll = () => Query<BookWCatName[]>(
    `SELECT
    c.name as categoryname,
    b.*
    FROM books b
    JOIN categories c ON b.categoryid = c.id
    ORDER BY b.id`
);

const getById = (id: number) => Query<BookWCatName[]>(
    `SELECT
    c.name as categoryname,
    b.*
    FROM books b
    JOIN categories c ON b.categoryid = c.id
    WHERE b.id = ?`, [id]
);

const create = (categoryid: number, title: string, author: string, price: number) => Query(
    ``
);