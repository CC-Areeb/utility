import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import loader from '../utilities/loader.gif';
import { NavLink } from 'react-router-dom';

export default function Products() {
    // URLs
    const apiURL = 'http://localhost:8000/products';
    const searchUrl = "http://localhost:8000/products?q=";

    // use states
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    // Basic info for pagination
    const dataPerPage = 3;
    const pagesVisited = pageNumber * dataPerPage;

    // Get request
    useEffect(() => {
        const dataFetch = async () => {
            setLoading(true);
            Axios.get(apiURL).then(function (response) {
                setLoading(false);
                setState(response.data.map((e) => { return e }));
            });
        };
        dataFetch();
    }, []);


    // Sorting data after get request
    const [isToggled, setisToggled] = useState(false);
    function toggleClick() {
        setisToggled(!isToggled);
        const sortedDataDescending = state.sort((a, b) => -1);
        setState(sortedDataDescending)
    }

    // Delete request
    function handleDelete(id) {
        Axios.delete(apiURL + '/' + id)
            .then(() => {
                setState(data => data.filter(item => item.id !== id));
            });
    }


    // displaying data
    const displayData = state
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map(state => {
            return <tr key={state.url}>
                <td className='border'>{state.title}</td>
                <td className='border'>{state.category}</td>
                <td className='border'>{state.description}</td>
                <td className='border'>{state.sku}</td>
                <td className='border'>{state.content}</td>
                <td className='border'>
                    <NavLink to={`/products/edit?id=${state.id}`}>
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
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Title</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Category</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Description</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>SKU</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Content</th>
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
