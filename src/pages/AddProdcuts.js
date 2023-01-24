import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function AddProdcuts() {

    const postUrl = 'http://localhost:8000/read-articles';

    // all the states
    const [author, setAuthor] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [url, setURL] = useState([]);
    const [urlToImage, setUrlToImage] = useState([]);
    const [publishedAt, setPublishedAt] = useState([]);
    const [content, setContent] = useState([]);
    
    const jsonData = {
        author: author,
        title: title,
        description: description,
        url: url,
        urlToImage: urlToImage,
        publishedAt: publishedAt,
        content: content,
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

    return (
        <div className='items'>
            <p className='display-1'>Add Products</p>

            <form onSubmit={handleSubmit} method='POST' className='content w-75'>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input className="form-control" type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">URL</label>
                    <input className="form-control" type="url" value={url} onChange={e => setURL(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input className="form-control" type="url" value={urlToImage} onChange={e => setUrlToImage(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Time of publication</label>
                    <input className="form-control" type="date" value={publishedAt} onChange={e => setPublishedAt(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <input className="form-control" type="text" value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-outline-success mt-4 btn-lg">Add Product</button>
            </form>
        </div>
    )
}
