import * as React from "react";
import { useState, useEffect } from "react";
import { Category } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { apiService } from "../services/api-service";
import swal from "sweetalert";

const New = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<number>();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const nav = useNavigate();

    return (
        <div>
            <h1>Add a New Book</h1>
            <div>

                <p>Category</p>
                <ReactSelect options={options} onChange={handleCategorySelection} />
                <p>Title</p>
                <textarea value={title} onChange={e => setTitle(e.target.value)} />
                <p>Author</p>
                <textarea value={author} onChange={e => setAuthor(e.target.value)} />
                <p>Price</p>
                <span>$</span> <textarea value={price} onChange={e => setPrice(e.target.value)} />
                <div>
                    <button onClick={handleSubmitButton}>Submit</button>
                </div>

            </div>
        </div>
    );
};

export default New;