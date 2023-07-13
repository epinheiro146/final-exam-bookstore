import * as React from "react";
import { useState, useEffect } from "react";
import { BookWCatName } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import { apiService } from "../services/api-service";
import swal from "sweetalert";

const BookDetails = () => {
    const [book, setBook] = useState<BookWCatName>();
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(data => setBook(data))
            .catch(error => swal("Oops!", error.message, "error"));
    }, [id]);

    const handleUpdateButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
        nav(`/books/${id}/update`);
    };

    const handleDelete = () => {

        apiService(`/api/books/${id}`, "DELETE")
            .then(data => {
                swal("BALEETED!", data.message, "success");
                nav(`/books`);
            })
            .catch(error => swal("Oops!", error.message, "error"));
    };

    return (
        <div>
            <h1>{book?.title}</h1>
            <h3>by {book?.author}</h3>
            <p>category: {book?.categoryname}</p>
            <h4>${book?.price}</h4>
            <div>
                <button onClick={handleUpdateButton}>Update</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default BookDetails;