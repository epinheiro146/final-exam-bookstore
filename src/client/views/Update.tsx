import * as React from "react";
import { useState, useEffect } from "react";
import { Category, BookWCatName } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import { apiService } from "../services/api-service";
import swal from "sweetalert";

const Update = () => {
    const [bookDetails, setBookDetails] = useState<BookWCatName>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [updatedCategory, setUpdatedCategory] = useState<number>();
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedAuthor, setUpdatedAuthor] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState("");
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        apiService('/api/categories')
            .then(data => setCategories(data))
            .catch(error => swal("Oops!", error.message, "error"));
    }, []);

    const handleCategorySelection = e => {
        console.log(e.target.value);
        setUpdatedCategory(e.target.value);
    };

    useEffect(() => {
        apiService(`/api/books/${id}`)
            .then(data => {
                setBookDetails(data);
                setUpdatedCategory(data.categoryid);
                setUpdatedTitle(data.title);
                setUpdatedAuthor(data.author);
                setUpdatedPrice(data.price);
            })
            .catch(error => swal("Oops!", `${error.message}`, "error"));
    }, [id]);

    const handleSaveChanges = () => {
        apiService(`/api/books/${id}`, "PUT", { categoryid: updatedCategory, title: updatedTitle, author: updatedAuthor, price: updatedPrice })
            .then(data => {
                swal("Looking good!", `${data.message}`, "success");
                nav(`/books/${id}`);
            })
            .catch(error => swal("Oops!", `${error.message}`, "error"));
    };

    return (
        <div>
            <h1>Update Book</h1>
            <div>
                {bookDetails && (
                    <div>
                        <p>Category</p>
                        <select name="categories" id="categories" defaultValue={updatedCategory} onChange={handleCategorySelection}>
                            <option disabled value={0}> -- select a genre -- </option>
                            {categories.map(category => (
                                <option key={`category-${category.id}`} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                        <p>Title</p>
                        <textarea value={updatedTitle} onChange={e => setUpdatedTitle(e.target.value)} />
                        <p>Author</p>
                        <textarea value={updatedAuthor} onChange={e => setUpdatedAuthor(e.target.value)} />
                        <p>Price</p>
                        <span>$</span> <textarea value={updatedPrice} onChange={e => setUpdatedPrice(e.target.value)} />
                        <div>
                            <button onClick={handleSaveChanges}>Submit</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Update;