import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
    // Urls
    const postUrl = 'http://staging.comvita.test/api/categories/store';

    // All states for adding
    const [title, setTitle] = useState('');
    // const [time, setTime] = useState('');
    // const [productNumber, setProductNumber] = useState('');
    const [heading, setHeading] = useState('');
    const [subHeading, setSubHeading] = useState('');
    const [contentHeading, setContentHeading] = useState('');
    const [contentSubHeading, setContentSubHeading] = useState('');
    const [file, setFile] = useState('');
    const [button, setButton] = useState('');
    const [buttonLink, setButtonLink] = useState('');
    const [secondImage, setSecondImage] = useState('');
    const [secondImageDesc, setSecondImageDesc] = useState('');

    const categoryData = {
        title: title,
        // time_of_adding: time,
        // product_number: productNumber,
        heading: heading,
        sub_heading: subHeading,
        content_heading: contentHeading,
        content_sub_heading: contentSubHeading,
        file: file,
        button_name: button,
        button_link: buttonLink,
        second_image: secondImage,
        second_image_description: secondImageDesc,
    }


    // Bearer token for security
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `multipart/form-data` /* Always needed for files */
        }
    }


    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addData = async () => {
            Axios.post(postUrl, headers, categoryData)
                .then(function (event) {
                    console.log(event);
                    // navigate('/category');
                }).catch(error => {
                    console.log(error);
                })
        };
        addData();
    }


    const textAreaHeight = {
        height: '100px'
    }

    return (
        <div className='items'>
            <p className="display-1">Category</p>
            <form onSubmit={handleSubmit} method='POST' className='content w-75' encType="multipart/form-data">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12">
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
                    </div>
                </div>

                {/* Heading details */}
                <fieldset className='border p-4 rounded-2' id='product_fieldset'>
                    <legend className='rounded-2 py-2 text-center' id='content_legend'>Heading</legend>
                    <div className="mb-3 form-floating">
                        <textarea
                            placeholder="Header"
                            className="form-control"
                            type="text"
                            value={heading}
                            onChange={e => setHeading(e.target.value)}
                            style={textAreaHeight}>
                        </textarea>
                        <label className="form-label">Header</label>
                    </div>

                    <div className="mb-3 form-floating">
                        <textarea
                            placeholder="Content"
                            className="form-control"
                            type="text" value={subHeading}
                            onChange={e => setSubHeading(e.target.value)}
                            style={textAreaHeight}>
                        </textarea>
                        <label className="form-label">Content</label>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="" className='mb-1'>Background Image/Video (Alt text/File)</label>
                                <input
                                    type="file"
                                    name=""
                                    id=""
                                    accept="image/jpg,image/jpeg,image/png,video/mp4,video/mov,video/avi,video/flv"
                                    onChange={e => setFile(e.target.files[0])}
                                    className='border p-2 rounded-3 w-100'
                                />
                            </div>

                            <div className="col-6">
                                <div className="second_img_desc">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder='Image description'
                                        onChange={e => setFile(e.target.value)}
                                        className='form-control w-100 py-2'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                {/* Content details */}
                <fieldset className='border p-4 rounded-2' id='product_fieldset'>
                    <legend className='rounded-2 py-2 text-center' id='content_legend'>Content</legend>
                    <div className="mb-3 form-floating">
                        <textarea
                            placeholder="Header"
                            className="form-control"
                            type="text"
                            value={contentHeading}
                            onChange={e => setContentHeading(e.target.value)}
                            style={textAreaHeight}>
                        </textarea>
                        <label className="form-label">Header</label>
                    </div>

                    <div className="mb-3 form-floating">
                        <textarea
                            placeholder="Content"
                            className="form-control"
                            type="text"
                            value={contentSubHeading}
                            onChange={e => setContentSubHeading(e.target.value)}
                            style={textAreaHeight}>
                        </textarea>
                        <label className="">Content</label>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-6 form-floating mb-3">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className='form-control'
                                        name=""
                                        id=""
                                        placeholder='Button Name'
                                        value={button}
                                        onChange={e => setButton(e.target.value)}
                                    />
                                    <label htmlFor='floatingInput'>Button Name</label>
                                </div>
                            </div>

                            <div className="col-6 form-floating mb-3">
                                <div className="form-floating mb-3">
                                    <input
                                        type="url"
                                        className='form-control'
                                        name=""
                                        id=""
                                        placeholder='Button Name'
                                        value={buttonLink}
                                        onChange={e => setButtonLink(e.target.value)}
                                    />
                                    <label htmlFor='floatingInput'>Button Link</label>
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="" className='mb-1'>Image (Alt text/File)</label>
                                <input
                                    type="file"
                                    name=""
                                    id=""
                                    accept="image/jpg,image/jpeg,image/png"
                                    onChange={e => setSecondImage(e.target.files[0])}
                                    className='border p-2 rounded-3 w-100'
                                />
                            </div>

                            <div className="col-6">
                                <div className="mb-3 file_desc">
                                    <input
                                        type="text"
                                        className='form-control py-2'
                                        name=""
                                        id=""
                                        placeholder='Image description'
                                        value={button}
                                        onChange={e => setSecondImageDesc(e.target.value)}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-outline-success my-4 mx-4 btn-lg">Add Category</button>


                {/* Main modal */}
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    data-bs-toggle="modal"
                    data-bs-target="#productPreviewModal"
                    // onClick={showCat}
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

                                {/* Category content */}
                                <div className='black_box text-center'>
                                    <h1 className="p-4" /* onChange={event => setCategoryId(event.target.value)} */>
                                        {/* {categoryModal.headerheading} */}
                                    </h1>
                                    <p className='fs-5'>
                                        {/* {categoryModal.description} */}
                                    </p>
                                    <div className="cover_image">
                                        {/* <img src={`${imgStartUrl}` + categoryModal.image} className="img-fluid" alt="Category preview" /> */}
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
                                        <img src='' className="img-fluid" alt="Product preview" />
                                    </div>
                                    <p className="pt-4">In your hands, you have certified</p>
                                    <h1 className="p-4">
                                        Qui quod quisquam quod voluptatum cum veritatis fugiat ex r
                                    </h1>
                                    <p className='fs-5 pb-4'>
                                        Eiusmod vel dolor sed labore tempore impedit doloremque recusandae
                                    </p>
                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' /* href={recipe1Url} */>
                                            {/* {recipe1} */}
                                        </a>
                                    </div>

                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' /* href={recipe2Url} */>
                                            {/* {recipe2} */}
                                        </a>
                                    </div>

                                    <div className="recipe_link_container pb-4">
                                        <a className='recipe_link text-success' /* href={recipe3Url} */>
                                            {/* {recipe3} */}
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