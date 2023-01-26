import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditProduct() {

    // URLs
    const putUrl = 'http://localhost:8000/products/';
    const getURL = 'http://localhost:8000/products/';

    // get the URL parameter for id
    const urlID = new URLSearchParams(window.location.search).get('id');


    const [formData, setFormData] = useState({
        "title": "",
        "category": "",
        "description": "",
        "sku": "",
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
                <div className="mb-3 form-floating">
                    <input
                        placeholder='Title'
                        type="text"
                        value={formData.title}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, title: event.target.value })}
                    />
                    <label className="form-label">Title</label>
                </div>

                <div className="mb-3 form-floatings">
                    <input
                        placeholder='Category'
                        type="text"
                        value={formData.category}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, category: event.target.value })}
                    />
                    <label className="form-label">Category</label>
                </div>

                <div className="mb-3 form-floating">
                    <input
                        placeholder='SKU'
                        type="text"
                        value={formData.sku}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, sku: event.target.value })}
                    />
                    <label className="form-label">SKU</label>
                </div>

                <div className="mb-3 form-floating">
                    <input
                        placeholder='Content'
                        type="text"
                        value={formData.content}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, content: event.target.value })}
                    />
                    <label className="form-label">Content</label>
                </div>

                <button type="submit" className="btn btn-outline-success mt-4 btn-lg">Update</button>
            </form>
        </div>
    )
}
