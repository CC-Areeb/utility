import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddCategory() {
    // Urls
    const postUrl = 'http://localhost:8000/category';

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

    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addData = async () => {
            Axios.post(postUrl, categoryData)
            navigate('/category');
        };
        addData();
    }


    const textAreaHeight = {
        height: '100px'
    }

    return (
        <div className='items'>
            <p className="display-1">Category</p>
            <form onSubmit={handleSubmit} method='POST' className='content w-75'>
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
                                <div class="form-floating mb-3">
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
                                <div class="form-floating mb-3">
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
                                <div class="mb-3 file_desc">
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