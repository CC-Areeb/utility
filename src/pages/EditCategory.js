import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function EditCategory() {

    // Image url
    const startURl = 'http://staging.comvita.test/images/';


    // Params
    const { slug } = useParams();


    // Category state management
    const [categoryData, setCategoryData] = useState({});


    // Bearer token to aviod CORS and for security
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `multipart/form-data` /* Always needed for files */
        }
    }


    // Get single category data based on slug
    const updateUrl = `http://staging.comvita.test/api/categories/${slug}/edit`;
    useEffect(() => {
        Axios.get(updateUrl, headers).then(function (response) {
            console.log(response.data);
            setCategoryData(response.data);

        })
    }, [])



    const textAreaHeight = {
        height: '100px'
    }

    const handleSubmit = () => {
        console.log('test');
    }

    return (
        <div className='items'>
            <form onSubmit={handleSubmit} method='POST' className='content w-75'>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-floating">
                                <input
                                    placeholder="Title"
                                    className="form-control"
                                    type="text"
                                    value={categoryData.title}
                                    onChange={e => setCategoryData({ ...categoryData, title: e.target.value })}
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
                            value={categoryData.headerheading}
                            onChange={e => setCategoryData({ ...categoryData, headerheading: e.target.value })}
                            style={textAreaHeight}>
                        </textarea>
                        <label className="form-label">Header</label>
                    </div>

                    <div className="mb-3 form-floating">
                        <textarea
                            placeholder="Content"
                            className="form-control"
                            type="text" value={categoryData.description}
                            onChange={e => setCategoryData({ ...categoryData, description: e.target.value })}
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
                                    name="video"
                                    id=""
                                    accept="image/jpg,image/jpeg,image/png,video/mp4,video/mov,video/avi,video/flv"
                                    onChange={e => setCategoryData({ ...categoryData, video: e.target.files[0] })}
                                    className='border p-2 rounded-3 w-100'
                                />
                                {<img className='categoryImg' src={`${startURl}` + categoryData.video} alt="" srcset="" />}
                            </div>

                            <div className="col-6">
                                <div className="second_img_desc">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder='Image description'
                                        value={categoryData.backgroundalt}
                                        onChange={e => setCategoryData({ ...categoryData, backgroundalt: e.target.value })}
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
                            value={categoryData.contentheading}
                            onChange={e => setCategoryData({ ...categoryData, backgroundalt: e.target.value })}
                            style={textAreaHeight}>
                        </textarea>
                        <label className="form-label">Header</label>
                    </div>

                    <div className="mb-3 form-floating">
                        <textarea
                            placeholder="Content"
                            className="form-control"
                            type="text"
                            value={categoryData.contentsubheading}
                            onChange={e => setCategoryData({ ...categoryData, contentsubheading: e.target.value })}
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
                                        value={categoryData.buttonname}
                                        onChange={e => setCategoryData({ ...categoryData, buttonname: e.target.value })}
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
                                        value={categoryData.buttonlink}
                                        onChange={e => setCategoryData({ ...categoryData, buttonlink: e.target.value })}
                                    />
                                    <label htmlFor='floatingInput'>Button Link</label>
                                </div>
                            </div>

                            <div className="col-6">
                                <label htmlFor="" className='mb-1'>Image (Alt text/File)</label>
                                <input
                                    type="file"
                                    name="image"
                                    id=""
                                    accept="image/jpg,image/jpeg,image/png"
                                    onChange={e => setCategoryData({ ...categoryData, image: e.target.files[0] })}
                                    className='border p-2 rounded-3 w-100'
                                />
                                {<img className='categoryImg' src={`http://staging.comvita.test` + categoryData.image} alt="" srcset="" />}
                            </div>

                            <div className="col-6">
                                <div className="mb-3 file_desc">
                                    <input
                                        type="text"
                                        className='form-control py-2'
                                        name=""
                                        id=""
                                        placeholder='Image description'
                                        value={categoryData.imagedescription}
                                        onChange={e => setCategoryData({ ...categoryData, imagedescription: e.target.value })}
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

                <div className="modal fade" id="productPreviewModal" tabIndex="-1" aria-labelledby="productPreviewModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="productPreviewModalLabel">Category Preview</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
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
