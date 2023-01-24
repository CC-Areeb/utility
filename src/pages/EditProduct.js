import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditProduct() {

    // URLs
    const putUrl = 'http://localhost:8000/read-articles/';
    const getURL = 'http://localhost:8000/read-articles/';

    // get the URL param for id
    const urlID = new URLSearchParams(window.location.search).get('id');


    const [formData, setFormData] = useState({
        "author": "",
        "title": "",
        "description": "",
        "url": "",
        "urlToImage": "",
        "content": ""
    });

    useEffect(() => {
        Axios.get(getURL + urlID)
            .then(response => {
                setFormData(response.data);
            });
    }, []);


    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        Axios.put(putUrl + urlID, formData);
        navigate('/products');
    }

    return (
        <div className='items'>
            <p className='display-1'>Edit Products</p>
            <form onSubmit={handleSubmit} className='content w-75'>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        value={formData.author}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, author: event.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        value={formData.title}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, title: event.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        value={formData.description}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, description: event.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">URL</label>
                    <input
                        type="text"
                        value={formData.url}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, url: event.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        type="text"
                        value={formData.urlToImage}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, urlToImage: event.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <input
                        type="text"
                        value={formData.content}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, content: event.target.value })}
                    />
                </div>

                <button type="submit" className="btn btn-outline-success mt-4 btn-lg">Update</button>
            </form>
        </div>
    )
}
