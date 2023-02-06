import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import img1 from '../utilities/img1.jpg';
import img2 from '../utilities/img2.jpg';

export default function AddProdcuts() {
    // Urls
    const postUrl = 'http://staging.comvita.test/api/products/store';
    const getCategory = 'http://staging.comvita.test/api/categories';

    // all the states
    const [title, setTitle] = useState('');
    const [categoryId, setCategoryId] = useState([]);
    const [dateCheckbox, setDateCheckbox] = useState('');
    const [batchCheckbox, setBatchCheckbox] = useState('');
    const [header, setHeader] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [sku, setSku] = useState('');
    const [recipe1, setRecipe1] = useState('');
    const [recipe2, setRecipe2] = useState('');
    const [recipe3, setRecipe3] = useState('');
    const [recipe1Url, setRecipe1Url] = useState('');
    const [recipe2Url, setRecipe2Url] = useState('');
    const [recipe3Url, setRecipe3Url] = useState('');
    const [error, setError] = useState([]);
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `multipart/form-data` /* Always needed for files */
        }
    }

    // Data to send 
    const jsonData = {
        title: title,
        category_id: categoryId,
        company_id: 1,
        date_checkbox: dateCheckbox,
        batch_checkbox: batchCheckbox,
        header: header,
        content: content,
        image: image,
        imagealt: imageAlt,
        sku: sku,
        recipe1: recipe1,
        recipe1_url: recipe1Url,
        recipe2: recipe2,
        recipe2_url: recipe2Url,
        recipe3: recipe3,
        recipe3_url: recipe3Url
    };

    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();


    // get all categories based on product id
    useEffect(() => {
        Axios.get(getCategory, headers).then((response) => {
            setCategoryId(response.data);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addData = async () => {
            let date = dateCheckbox == "" ? false : true
            jsonData.date_checkbox = date
            let batch = batchCheckbox == "" ? false : true
            jsonData.batch_checkbox = batch
            await Axios.post(postUrl, jsonData, headers).then(() => {
                navigate('/products');
            }).catch((e) => {
                console.log(e.response.data.errors);
                setError(e.response.data.errors)
            })
        };
        addData();
    }

    const textAreaHeight = {
        height: '100px'
    }

    return (
        <div className='items mb-4'>
            <p className='display-1' id='product_heading'>Add Products</p>
            <form onSubmit={handleSubmit} method='POST' className='content w-75' encType="multipart/form-data">
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
                                <span className='text-danger'>{error.title}</span>
                                <label className="form-label">Title</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="form-floating">
                                <input
                                    placeholder="Sku"
                                    className="form-control"
                                    type="text"
                                    value={sku}
                                    onChange={e => setSku(e.target.value)}
                                />
                                <span className='text-danger'>{error.sku}</span>
                                <label className="form-label">Sku</label>
                            </div>
                        </div>

                        <div className="col-4">
                            <select className="form-select" name="category_id" id="category_dropDown">
                                <option value="" disabled>Select Category</option>
                                {
                                    categoryId.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.title}
                                        </option>
                                    ))
                                }
                            </select>
                            <span className='text-danger'>{error.category_id}</span>
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
                            value={header}
                            onChange={e => setHeader(e.target.value)}
                            style={textAreaHeight}>
                        </textarea>
                        <span className='text-danger'>{error.header}</span>
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
                        <span className='text-danger'>{error.content}</span>
                        <label className="form-label">Content</label>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <input
                                    type="file"
                                    name="image"
                                    id=""
                                    accept="image/jpg,image/jpeg,image/png"
                                    onChange={e => setImage(e.target.files[0])}
                                    className='border p-2 rounded-3 w-100'
                                />
                                <span className='text-danger'>{error.image}</span>
                            </div>

                            <div className="col-6">
                                <div className="">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder='Image description'
                                        onChange={e => setImageAlt(e.target.value)}
                                        className='form-control w-100 py-2'
                                    />
                                    <span className='text-danger'>{error.imagealt}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>


                {/* Batch details */}
                <fieldset className='border p-4 rounded-2' id='product_fieldset'>
                    <legend className='rounded-2 py-2 text-center' id='content_legend_batch'>Batch Details</legend>
                    <div className="">
                        <div className="form-check">
                            <input className="form-check-input"
                                type="checkbox"
                                id="best_before"
                                checked={dateCheckbox}
                                onChange={e => setDateCheckbox(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="best_before">
                                Show Best Before Date
                            </label>
                        </div>

                        <div className="form-check mb-2">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={batchCheckbox}
                                onChange={e => setBatchCheckbox(e.target.checked)}
                                id="batch_number"
                            />
                            <label className="form-check-label" htmlFor="batch_number">
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
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recepi_1"
                                        placeholder="Recipe 1"
                                        onChange={e => setRecipe1(e.target.value)}
                                    />
                                    <label htmlFor="recepi_1">Recipe 1</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div className="form-floating mb-3">
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="recepi_1_url"
                                        placeholder="Recipe 1 URL"
                                        onChange={e => setRecipe1Url(e.target.value)}
                                    />
                                    <label htmlFor="recepi_1_url">Recipe 1 URL</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recepi_2"
                                        placeholder="Recipe 2"
                                        onChange={e => setRecipe2(e.target.value)}
                                    />
                                    <label htmlFor="recepi_2">Recipe 2</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div className="form-floating mb-3">
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="recepi_2_url"
                                        placeholder="Recipe 2 URL"
                                        onChange={e => setRecipe2Url(e.target.value)}
                                    />
                                    <label htmlFor="recepi_2_url">Recipe 2 URL</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recepi_3"
                                        placeholder="Recipe 3"
                                        onChange={e => setRecipe3(e.target.value)}
                                    />
                                    <label htmlFor="recepi_3">Recipe 3</label>
                                </div>
                            </div>

                            <div className="col-6 my-1">
                                <div className="form-floating mb-3">
                                    <input
                                        type="url"
                                        className="form-control"
                                        id="recepi_3_url"
                                        placeholder="Recipe 3 URL"
                                        onChange={e => setRecipe3Url(e.target.value)}
                                    />
                                    <label htmlFor="recepi_3_url">Recipe 3 URL</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-outline-success mt-4 mx-4 btn-lg">Add Product</button>

                {/* Main modal */}
                <button
                    type="button"
                    className="btn btn-outline-primary mt-4 btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#productPreviewModal"
                >
                    Preview
                </button>

                <div className="modal fade" id="productPreviewModal" tabIndex="-1" aria-labelledby="productPreviewModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="productPreviewModalLabel">Product Preview</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                {/* Category content - will make this data come from category part soon */}
                                <div className='black_box rounded-2 text-center'>
                                    <h1 className="p-4">
                                        Qui quod quisquam quod voluptatum cum veritatis fugiat ex r
                                    </h1>
                                    <p className='fs-5'>
                                        Eiusmod vel dolor sed labore tempore impedit doloremque recusandae
                                    </p>
                                    <div className="cover_image">
                                        <img src={img1} className="img-fluid" alt="Dummy content" />
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
                                        <img src={img2} className="img-fluid" alt="Dummy content" />
                                    </div>
                                    <p className="pt-4">In your hands, you have certified</p>
                                    <h1 className="p-4">
                                        Qui quod quisquam quod voluptatum cum veritatis fugiat ex r
                                    </h1>
                                    <p className='fs-5 pb-4'>
                                        Eiusmod vel dolor sed labore tempore impedit doloremque recusandae
                                    </p>
                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' href={recipe1Url}>
                                            {recipe1}
                                        </a>
                                    </div>

                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' href={recipe2Url}>
                                            {recipe2}
                                        </a>
                                    </div>

                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' href={recipe3Url}>
                                            {recipe3}
                                        </a>
                                    </div>
                                </div>

                                {/* Static Email box */}
                                <div className='static_email_box'>
                                    <h3 className='p-4 text-center text-white'>Sign Up Here</h3>
                                    <p className='p-4 text-center text-white'>Learn more about the benefits of Mānuka Honey and receive special offers from Comvita</p>
                                    <form action="" className='pb-4 ps-4 pe-4'>
                                        <div className="form-floating mb-4">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="modal_email"
                                                placeholder="email@example.com"
                                            />
                                            <label htmlFor="modal_email">Email address</label>
                                        </div>
                                    </form>
                                </div>

                                {/* Batch content */}
                                <h1>Notice - Batch items are ongoing, please wait. 😇</h1>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}