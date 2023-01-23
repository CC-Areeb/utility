import { Axios } from 'axios';
import React, { useState } from 'react'

export default function EditProduct() {

    const [author, setAuthor] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [url, setURL] = useState([]);
    const [urlToImage, setUrlToImage] = useState([]);
    const [publishedAt, setPublishedAt] = useState([]);
    const [content, setContent] = useState([]);

    // get all data
    const allDataUrl = 'http://localhost:8000/read-articles';

    // get single data
    const singleDataUrl = 'http://localhost:8000/update-article';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addData = async () => {
            Axios.post('', '')
        };
        addData();
    }

    return (
        <div className='items'>
            <p className='display-1'>Edit Products</p>

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
