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

    // Get request for 1 single data
    useEffect(() => {
        Axios.get(getURL + urlID)
            .then(response => {
                setFormData(response.data);
            });
    }, []);


    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();


    // Put request for updating
    function handleSubmit(event) {
        event.preventDefault();
        Axios.put(putUrl + urlID, formData);
        navigate('/products');
    }

    return (
        <div className='items'>
            <p className='display-1'>Edit Products</p>
            <form onSubmit={handleSubmit} className='content w-75'>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-floating">
                                <input
                                    placeholder="Title"
                                    className="form-control"
                                    type="text"
                                // value={title}
                                // onChange={e => setTitle(e.target.value)}
                                />
                                <label className="form-label">Title</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-floating">
                                <input
                                    placeholder="Sku"
                                    className="form-control"
                                // type="text" value={sku}
                                // onChange={e => setSKU(e.target.value)}
                                />
                                <label className="form-label">Sku</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <select class="form-select" name="" id="category_dropDown">
                                <option value="" selected>Select Category</option>
                                {/* <option value={sku}>option 1</option> */}
                                {/* <option value={sku}>option 2</option> */}
                                {/* <option value={sku}>option 3</option> */}
                            </select>
                        </div>
                    </div>

                    {/* Content details */}
                    <fieldset className='border p-4 rounded-2' id='product_fieldset'>
                        <legend className='rounded-2 py-2 text-center' id='content_legend'>Content</legend>
                        <div className="mb-3 form-floating">
                            <textarea
                                placeholder="Header"
                                className="form-control"
                                type="text"
                                // value={description}
                                // onChange={e => setDescription(e.target.value)}
                                // style={textAreaHeight}
                            >
                            </textarea>
                            <label className="form-label">Header</label>
                        </div>

                        <div className="mb-3 form-floating">
                            <textarea
                                placeholder="Content"
                                className="form-control"
                                // type="text" value={content}
                                // onChange={e => setContent(e.target.value)}
                                // style={textAreaHeight}
                            >
                            </textarea>
                            <label className="form-label">Content</label>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <input
                                        type="file"
                                        name=""
                                        id=""
                                        className='border p-2 rounded-3 w-100'
                                    />
                                </div>

                                <div className="col-6">
                                    <div className="">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            placeholder='Image description'
                                            className='form-control w-100 py-2'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>





















                {/* <div className="mb-3 form-floating">
                    <input
                        placeholder='Title'
                        type="text"
                        value={formData.title}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, title: event.target.value })}
                    />
                    <label className="form-label">Title</label>
                </div> */}

                {/* <div className="mb-3 form-floating">
                    <input
                        placeholder='SKU'
                        type="text"
                        value={formData.sku}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, sku: event.target.value })}
                    />
                    <label className="form-label">SKU</label>
                </div> */}

                {/* <div className="mb-3 form-floating">
                    <input
                        placeholder='Content'
                        type="text"
                        value={formData.content}
                        className="form-control"
                        onChange={event => setFormData({ ...formData, content: event.target.value })}
                    />
                    <label className="form-label">Content</label>
                </div> */}

                <button type="submit" className="btn btn-outline-success mt-4 mx-4 btn-lg">Update</button>
                <button type="submit" className="btn btn-outline-primary mt-4 btn-lg">Preview</button>
            </form>
        </div>
    )
}
