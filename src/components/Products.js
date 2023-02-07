import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import loader from '../utilities/loader.gif';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Products() {
    // URLs
    const apiURL = 'http://staging.comvita.test/api/products';
    const getCategoryUrl = 'http://staging.comvita.test/api/categories';
    const token = localStorage.getItem('token');


    const searchUrl = "http://localhost:8000/products?q=";


    const headers = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": `multipart/form-data` /* Always needed for files */
        }
    }

    // use states
    const [state, setState] = useState([]);
    const [category, setcategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);



    // Basic info for pagination
    const dataPerPage = 10;
    const pagesVisited = pageNumber * dataPerPage;



    // Get all products
    useEffect(() => {
        const dataFetch = async () => {
            setLoading(true);
            Axios.get(apiURL, headers).then(function (response) {
                setLoading(false);
                console.log(response.data.data);
                setState(response.data.data);
            });
        };
        dataFetch();
    }, []);


    // Get all categories
    useEffect(() => {
        Axios.get(getCategoryUrl, headers).then(function (response) {
            setcategory(response.data.map(cat => {return cat.title}));
        })
    }, [])



    // Sorting data after get request
    const [isToggled, setisToggled] = useState(false);
    function toggleClick() {
        setisToggled(!isToggled);
        const sortedDataDescending = state.sort((a, b) => -1);
        setState(sortedDataDescending)
    }

    // Delete request
    function handleDelete(id) {
        Axios.delete(`http://staging.comvita.test/api/products/delete/${id}`, headers)
            .then((response) => {
                setState(response.data);
                // data => data.filter(item => item.id !== id)
                // navigate('/products')
                window.location.reload(true);
            });
    }

    // displaying data
    const displayData = state
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map(state => {
            return <tr key={state.id}>
                <td className='border'>{<img src='test' />}</td>
                <td className='border'>{state.title}</td>
                <td className='border'>{state.category.title}</td>
                <td className='border'>{state.header}</td>
                <td className='border'>{state.sku}</td>
                <td className='border'>
                    <NavLink to={`/products/${state.slug}/edit`}>
                        <button type="button" className="btn btn-outline-primary mx-2">
                            Edit
                            <i className="bi bi-pencil-square px-1" id='edit'></i>
                        </button>
                    </NavLink>
                    <button type="button" className="btn btn-outline-danger mx-2" onClick={() => handleDelete(state.id)}>
                        Delete
                        <i className="bi bi-trash px-1" id='delete'></i>
                    </button>
                </td>
            </tr>
        });


    // calculation for pagination
    const pageCount = Math.ceil(state.length / dataPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }


    // Search filter
    const [search, setSearch] = useState("");
    const handleSearchChange = e => {
        setSearch(e.target.value);
        Axios.get(searchUrl + e.target.value)
            .then((data) => {
                setState(data.data.map((e) => { return e }));
            });
    };


    return (
        <div className='items'>
            <p className='display-1'>Products</p>
            <div className="form-floating my-4 w-25" id='product_search_bar'>
                <input type="text" className="form-control" id="prod_search" placeholder="Search..." value={search} onChange={handleSearchChange} />
                <label htmlFor="prod_search">Search ...</label>
            </div>
            <div className='text-center' id='prod_table'>
                <table className="table">
                    <thead>
                        <tr id='product_main_table'>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Image</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Title</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Category</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Description</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>SKU</th>
                            <th scope="col" className='border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <span id='loading_screen'><img src={loader} alt="" id='loader_gif' /></span> : displayData}
                    </tbody>
                </table>
            </div>

            <div id='pagination_items'>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginateButton'}
                    previousLinkClassName={'backBtn'}
                    nextLinkClassName={'nextBtn'}
                    disabledClassName={'paginateDisabled'}
                    activeClassName={'paginateActive'}
                />
            </div>
            <div>
                <NavLink className='text-decoration-none' id='add_prod' to='/products/add'>Add Product</NavLink>
            </div>
        </div>
    )
}
