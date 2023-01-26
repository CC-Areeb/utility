import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function AddProdcuts() {

    const postUrl = 'http://localhost:8000/products';

    // all the states
    const [title, setTitle] = useState([]);
    const [category, setCategory] = useState([]);
    const [description, setDescription] = useState([]);
    const [sku, setSKU] = useState([]);
    const [content, setContent] = useState([]);

    const jsonData = {
        title: title,
        category: category,
        description: description,
        sku: sku,
        content: content
    };

    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addData = async () => {
            Axios.post(postUrl, jsonData)
            navigate('/products');
        };
        addData();
    }

    const textAreaHeight = {
        height: '100px'
    }

    return (
        <div className='items'>
            <p className='display-1'>Add Products</p>

            <form onSubmit={handleSubmit} method='POST' className='content w-75'>
                <div className="mb-3 form-floating">
                    <input placeholder="Title" className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    <label className="form-label">Title</label>
                </div>

                <div className="mb-3 form-floating">
                    <input placeholder="Category" className="form-control" type="text" value={category} onChange={e => setCategory(e.target.value)} />
                    <label className="form-label">Category</label>
                </div>

                <div className="mb-3 form-floating">
                    <input placeholder="Description" className="form-control" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                    <label className="form-label">Description</label>
                </div>

                <div className="mb-3 form-floating">
                    <input placeholder="Sku" className="form-control" type="text" value={sku} onChange={e => setSKU(e.target.value)} />
                    <label className="form-label">Sku</label>
                </div>

                <div className="mb-3 form-floating">
                    <textarea placeholder="Content" className="form-control" type="text" value={content} onChange={e => setContent(e.target.value)} style={textAreaHeight}></textarea>
                    <label className="form-label">Content</label>
                </div>
                <button type="submit" className="btn btn-outline-success mt-4 btn-lg">Add Product</button>
            </form>
        </div>
    )
}
