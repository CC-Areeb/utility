import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditCategory() {
    // Query paramenter
    const { slug } = useParams();


    // Category state management
    const [categoryData, setCategoryData] = useState({});


    // Bearer token for security
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `multipart/form-data` /* Always needed for files */
        }
    }


    // Get single category data based on slug
    const editUrl = `http://staging.comvita.test/api/categories/${slug}/edit`;
    useEffect(() => {
        Axios.get(editUrl, headers).then(function (response) {
            setCategoryData(response.data);
        })
    }, [])


    // Update category usign a POST request
    const update = `http://staging.comvita.test/api/categories/update/${slug}`;
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formFileData = new FormData();
        if (typeof(categoryData.image) != 'object') {
            categoryData.image = null;
        }
        if (typeof(categoryData.video) != 'object') {
            categoryData.video = null;
        }
        Axios.post(update, categoryData, headers).then(function (response) {
            navigate('/category')
        }).catch(function (error) {
            console.log(error)
        })
    }


    const textAreaHeight = {
        height: '100px'
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
                                    // onChange={handleImageChange}
                                    className='border p-2 rounded-3 w-100'
                                />
                                {<img className='categoryImg' src={`http://staging.comvita.test/images/` + categoryData.video} alt="" srcset="" />}
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

                <button type="submit" className="btn btn-outline-success my-4 mx-4 btn-lg">Update Category</button>

                {/* Main modal */}
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg my-4"
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


                                {/* Category content */}
                                <div className='black_box rounded-2 text-center'>
                                    <h1 className="p-4">
                                        {categoryData.headerheading}
                                    </h1>
                                    <p className='fs-5'>
                                        {categoryData.description}
                                    </p>
                                    <div className="cover_image">
                                        {<img className='mw-100' src={`http://staging.comvita.test/images` + '/' + categoryData.video} alt="" srcset="" />}
                                    </div>
                                </div>


                                {/* Static content */}
                                <div className='green_box p-4 text-center'>
                                    <h3 className='mb-4'>From pristine and remote forests in New Zealand</h3>
                                    <p className='fs-5'>
                                        We bring you this genuine Mānuka Honey with UMF™ levels guaranteed for its entire shelf life.
                                    </p>
                                </div>


                                <div className='yellow_box rounded-2 text-center'>
                                    <div className="cover_image">
                                        {<img className='mw-100' src={`http://staging.comvita.test/images` + '/' + categoryData.video} alt="" srcset="" />}
                                    </div>
                                    <p className="pt-4">In your hands, you have certified</p>
                                    <h1 className="">
                                        {categoryData.contentheading}
                                    </h1>
                                    <p className='fs-5'>
                                        {categoryData.contentsubheading}
                                    </p>

                                    <div>
                                        <a className='btn btn-outline-success my-4' target="_blank" rel='noreferrer' href={categoryData.buttonlink}>{categoryData.buttonname}</a>
                                    </div>

                                </div>
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
