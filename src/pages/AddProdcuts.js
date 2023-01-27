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
        <div className='items mb-4'>
            <p className='display-1' id='product_heading'>Add Products</p>

            <form onSubmit={handleSubmit} method='POST' className='content w-75'>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-floating">
                                <input
                                    placeholder="Title"
                                    className="form-control"
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <label className="form-label">Title</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-floating">
                                <input
                                    placeholder="Sku"
                                    className="form-control"
                                    type="text" value={sku}
                                    onChange={e => setSKU(e.target.value)}
                                />
                                <label className="form-label">Sku</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <select class="form-select" name="" id="category_dropDown">
                                <option value="" selected>Select Category</option>
                                <option value={sku}>option 1</option>
                                <option value={sku}>option 2</option>
                                <option value={sku}>option 3</option>
                            </select>
                        </div>
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
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            style={textAreaHeight}>
                        </textarea>
                        <label className="form-label">Header</label>
                    </div>

                    <div className="mb-3 form-floating">
                        <textarea
                            placeholder="Content"
                            className="form-control"
                            type="text" value={content}
                            onChange={e => setContent(e.target.value)}
                            style={textAreaHeight}>
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


                {/* Batch details */}
                <fieldset className='border p-4 rounded-2' id='product_fieldset'>
                    <legend className='rounded-2 py-2 text-center' id='content_legend_batch'>Batch Details</legend>
                    <div className="">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="best_before" />
                            <label class="form-check-label" for="best_before">
                                Show Best Before Date
                            </label>
                        </div>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" value="" id="batch_number" />
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
                                    <input type="text" class="form-control" id="recepi_1" placeholder="Recipe 1" />
                                    <label for="recepi_1">Recipe 1</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div class="form-floating mb-3">
                                    <input type="url" class="form-control" id="recepi_1_url" placeholder="Recipe 1 URL" />
                                    <label for="recepi_1_url">Recipe 1 URL</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="recepi_2" placeholder="Recipe 2" />
                                    <label for="recepi_2">Recipe 2</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div class="form-floating mb-3">
                                    <input type="url" class="form-control" id="recepi_2_url" placeholder="Recipe 2 URL" />
                                    <label for="recepi_2_url">Recipe 2 URL</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="recepi_3" placeholder="Recipe 3" />
                                    <label for="recepi_3">Recipe 3</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div class="form-floating mb-3">
                                    <input type="url" class="form-control" id="recepi_3_url" placeholder="Recipe 3 URL" />
                                    <label for="recepi_3_url">Recipe 3 URL</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-outline-success mt-4 mx-4 btn-lg">Add Product</button>
                <button type="reset" className="btn btn-outline-primary mt-4 btn-lg">Preview</button>
            </form>
        </div>
    )
}


//  value={description} onChange={e => setDescription(e.target.value)}