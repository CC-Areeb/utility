import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EditProduct() {

    // URLs
    const putUrl = 'http://localhost:8000/read-articles/';

    // http://localhost:8000/update-article


    // use state for displaying all the results
    const [fullData, setFullData] = useState([]);

    // get the URL param for id
    const urlID = new URLSearchParams(window.location.search).get('id');
    useEffect(() => {
        const singleData = async () => {
            Axios.get(putUrl + urlID)
                .then(function (result) {
                    setFullData(result.data)
                });
        };
        singleData();
    }, [])

    const newJsonData = {
        author: fullData.author,
        title: fullData.title,
        description: fullData.description,
        url: fullData.url,
        urlToImage: fullData.urlToImage,
        publishedAt: fullData.publishedAt,
        content: fullData.content,
    };

    // function to handle update
    const handleUpdate = async () => {
        const update = async () => {
            Axios.put(putUrl + urlID, newJsonData);
        }
        update();
    }

    return (
        <div className='items'>
            <p className='display-1'>Edit Products</p>
            <form onClick={handleUpdate} method='POST' className='content w-75'>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input className="form-control" type="text" value={fullData.author} onChange={e => setFullData(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" value={fullData.title} onChange={e => setFullData(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" value={fullData.description} onChange={e => setFullData(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">URL</label>
                    <input className="form-control" type="url" value={fullData.url} onChange={e => setFullData(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input className="form-control" type="url" value={fullData.urlToImage} onChange={e => setFullData(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <input className="form-control" type="text" value={fullData.content} onChange={e => setFullData(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-outline-success mt-4 btn-lg">Update Product</button>
            </form>
        </div>
    )
}
