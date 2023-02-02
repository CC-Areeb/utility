import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EditProduct() {
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
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
    const getUrl = `http://127.0.0.1:8000/api/products/show/${formData.sku}`;
    useEffect(() => {
        Axios.get(getUrl + headers)
        .then(response => {
            console.log(response);
            setFormData(response.data);
        });
        // console.log(getUrl);
    }, []);


    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();


    // Put request for updating
    const putUrl = `http://localhost:8000/products/${formData.slug}/edit`;
    function handleSubmit(event) {
        event.preventDefault();
        Axios.put(putUrl, headers, formData);
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
                                            value={formData.recipe2Url}
                                            onChange={e => setFormData({ ...formData, recipe2Url: e.target.value })}
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
                <button
                    type="submit"
                    className="btn btn-outline-success mt-4 mx-4 btn-lg my-4"
                >
                    Update
                </button>


                <button
                    type="button"
                    className="btn btn-outline-primary mt-4 btn-lg my-4"
                    data-bs-toggle="modal"
                    data-bs-target="#productPreviewModal"
                >
                    Preview
                </button>
                <div class="modal fade" id="productPreviewModal" tabindex="-1" aria-labelledby="productPreviewModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="productPreviewModalLabel">Product Preview</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                {/* Category content - will make this data come from category part soon */}
                                <div className='black_box rounded-2 text-center'>
                                    <h1 className="p-4">
                                        Qui quod quisquam quod voluptatum cum veritatis fugiat ex r
                                    </h1>
                                    <p className='fs-5'>
                                        Eiusmod vel dolor sed labore tempore impedit doloremque recusandae
                                    </p>
                                    <div className="cover_image">
                                        <img src={formData.img1} class="img-fluid" alt="Dummy content" />
                                    </div>
                                </div>

                                {/* Static content */}
                                <div className='green_box p-4 text-center'>
                                    <h3 className='mb-4'>From pristine and remote forests in New Zealand</h3>
                                    <p className='fs-5'>
                                        We bring you this genuine Mānuka Honey with UMF™ levels guaranteed for its entire shelf life.
                                    </p>
                                </div>

                                {/* Product content */}
                                <div className='yellow_box rounded-2 text-center'>
                                    <div className="cover_image">
                                        <img src={formData.img2} class="img-fluid" alt="Dummy content" />
                                    </div>
                                    <p className="pt-4">In your hands, you have certified</p>
                                    <h1 className="p-4">
                                        Qui quod quisquam quod voluptatum cum veritatis fugiat ex r
                                    </h1>
                                    <p className='fs-5 pb-4'>
                                        Eiusmod vel dolor sed labore tempore impedit doloremque recusandae
                                    </p>
                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' href={formData.recipe1Url}>
                                            {formData.recipe1}
                                        </a>
                                    </div>

                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' href={formData.recipe2Url}>
                                            {formData.recipe2}
                                        </a>
                                    </div>

                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' href={formData.recipe3Url}>
                                            {formData.recipe3}
                                        </a>
                                    </div>
                                </div>

                                {/* Static Email box */}
                                <div className='static_email_box'>
                                    <h3 className='p-4 text-center text-white'>Sign Up Here</h3>
                                    <p className='p-4 text-center text-white'>Learn more about the benefits of Mānuka Honey and receive special offers from Comvita</p>
                                    <form action="" className='pb-4 ps-4 pe-4'>
                                        <div class="form-floating mb-4">
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="modal_email"
                                                placeholder="email@example.com"
                                            />
                                            <label for="modal_email">Email address</label>
                                        </div>
                                    </form>
                                </div>

                                {/* Batch content */}
                                <h1>Notice - Batch items are ongoing, please wait. 😇</h1>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
