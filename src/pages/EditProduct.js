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
        "sku": "",
        "category": "",
        "header": "",
        "content": "",
        "file": "",
        "bestBefore": "",
        "batchNumber": "",
        "imageDesc": "",
        "recipe1": "",
        "recipe1Url": "",
        "recipe2": "",
        "recipe2Url": "",
        "recipe3Url": "",
        "recipe3": "",
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

    const textAreaHeight = {
        height: '100px'
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
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                />
                                <label className="form-label">Title</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-floating">
                                <input
                                    placeholder="Sku"
                                    className="form-control"
                                    type="text" value={formData.sku}
                                    onChange={e => setFormData({ ...formData, sku: e.target.value })}
                                />
                                <label className="form-label">Sku</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <select class="form-select" name="" id="category_dropDown">
                                <option value="" selected>Select Category</option>
                                <option value={formData.category}>option 1</option>
                                <option value={formData.category}>option 2</option>
                                <option value={formData.category}>option 3</option>
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
                                value={formData.header}
                                onChange={e => setFormData({ ...formData, header: e.target.value })}
                                style={textAreaHeight}
                            >
                            </textarea>
                            <label className="form-label">Header</label>
                        </div>

                        <div className="mb-3 form-floating">
                            <textarea
                                placeholder="Content"
                                className="form-control"
                                value={formData.content}
                                onChange={e => setFormData({ ...formData, content: e.target.value })}
                                style={textAreaHeight}
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
                                        onChange={e => setFormData({ ...formData, file: e.target.value })}
                                        className='border p-2 rounded-3 w-100'
                                    />
                                </div>

                                <div className="col-6">
                                    <div className="">
                                        <input
                                            type="text"
                                            name=""
                                            id=""
                                            value={formData.imageDesc}
                                            onChange={e => setFormData({ ...formData, imageDesc: e.target.value })}
                                            placeholder='Image description'
                                            className='form-control w-100 py-2'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    {/* Batch details */}
                    <fieldset className='border p-4 rounded-2' id='product_fieldset'>
                        <legend className='rounded-2 py-2 text-center' id='content_legend_batch'>Batch Details</legend>
                        <div className="">
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    checked={formData.bestBefore}
                                    onChange={e => setFormData({ ...formData, bestBefore: e.target.checked })}
                                    id="best_before"
                                />
                                <label class="form-check-label" for="best_before">
                                    Show Best Before Date
                                </label>
                            </div>

                            <div class="form-check mb-2">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    checked={formData.batchNumber}
                                    onChange={e => setFormData({ ...formData, batchNumber: e.target.checked })}
                                    id="batch_number"
                                />
                                <label class="form-check-label" for="batch_number">
                                    Show Batch Number
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    {/* Recipes detail */}
                    <fieldset className='border p-4 rounded-2' id='product_fieldset'>
                        <legend className='rounded-2 py-2 text-center' id='content_legend'>Recipes</legend>
                        <div className="container">
                            <div className="row">
                                <div className="col-6 my-1">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="recepi_1"
                                            placeholder="Recipe 1"
                                            value={formData.recipe1}
                                            onChange={e => setFormData({ ...formData, recipe1: e.target.value })}
                                        />
                                        <label for="recepi_1">Recipe 1</label>
                                    </div>
                                </div>

                                <div className="col-6 my-1">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="url"
                                            class="form-control"
                                            id="recepi_1_url"
                                            placeholder="Recipe 1 URL"
                                            value={formData.recipe1Url}
                                            onChange={e => setFormData({ ...formData, recipe1: e.target.value })}
                                        />
                                        <label for="recepi_1_url">Recipe 1 URL</label>
                                    </div>
                                </div>

                                <div className="col-6 my-1">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="recepi_2"
                                            placeholder="Recipe 2"
                                            value={formData.recipe2}
                                            onChange={e => setFormData({ ...formData, recipe2Url: e.target.value })}
                                        />
                                        <label for="recepi_2">Recipe 2</label>
                                    </div>
                                </div>

                                <div className="col-6 my-1">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="url"
                                            class="form-control"
                                            id="recepi_2_url"
                                            placeholder="Recipe 2 URL"
                                            value={formData.recipe3}
                                            onChange={e => setFormData({ ...formData, recipe3Url: e.target.value })}
                                        />
                                        <label for="recepi_2_url">Recipe 2 URL</label>
                                    </div>
                                </div>

                                <div className="col-6 my-1">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="recepi_3"
                                            placeholder="Recipe 3"
                                            value={formData.recipe3}
                                            onChange={e => setFormData({ ...formData, recipe3: e.target.value })}
                                        />
                                        <label for="recepi_3">Recipe 3</label>
                                    </div>
                                </div>

                                <div className="col-6 my-1">
                                    <div class="form-floating mb-3">
                                        <input
                                            type="url"
                                            class="form-control"
                                            id="recepi_3_url"
                                            placeholder="Recipe 3 URL"
                                            value={formData.recipe3Url}
                                            onChange={e => setFormData({ ...formData, recipe3Url: e.target.value })}
                                        />
                                        <label for="recepi_3_url">Recipe 3 URL</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </fieldset>


                </div>
                <button type="submit" className="btn btn-outline-success mt-4 mx-4 btn-lg">Update</button>
                <button type="submit" className="btn btn-outline-primary mt-4 btn-lg">Preview</button>
            </form>
        </div>
    )
}
