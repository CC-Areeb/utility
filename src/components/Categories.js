<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import loader from '../utilities/loader.gif';
import ReactPaginate from 'react-paginate';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Categories() {
    // URLs
    const apiURL = 'http://localhost:8000/category';
    const searchUrl = "http://localhost:8000/category?q=";

    // Basic info for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 3;
    const pagesVisited = pageNumber * dataPerPage;

    // Get request
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState([]);
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

    // displaying data
    const displayData = state
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map(state => {
            return <tr key={state.url}>
                <td className='border'>{state.title}</td>
                <td className='border'>{state.product_number}</td>
                <td className='border'>{state.time_of_adding}</td>
                <td className='border'>
                    <NavLink to={`/category/edit?id=${state.id}`}>
                        <button type="button" className="btn btn-outline-primary mx-2">
                            Edit
                            <i className="bi bi-pencil-square px-1" id='edit'></i>
                        </button>
                    </NavLink>
                </td>
            </tr>
        });

    // Search filter
    const [search, setSearch] = useState("");
    const handleSearchChange = e => {
        setSearch(e.target.value);
        Axios.get(searchUrl + e.target.value)
            .then((data) => {
                setState(data.data.map((e) => { return e }));
            });
    }

    return (
        <div className='items'>
            <p className='display-1'>Category</p>
            <div className="form-floating my-4 w-25" id='product_search_bar'>
                <input type="text" className="form-control" id="prod_search" placeholder="Search..." value={search} onChange={handleSearchChange} />
                <label htmlFor="prod_search">Search ...</label>
            </div>
            <div className='text-center' id='prod_table'>
                <table className="table">
                    <thead>
                        <tr id='product_main_table'>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Title</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Number of Product</th>
                            <th onClick={toggleClick} scope="col" className='border prod_table_head'>Date</th>
                            <th scope="col" className='border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <span id='loading_screen'><img src={loader} alt="" id='loader_gif' /></span> : displayData}
                    </tbody>
                </table>
            </div>
            <div>
                <NavLink className='text-decoration-none' id='add_cat' to='/category/add'>Add Product</NavLink>
            </div>
        </div>
=======
import React from 'react'

export default function Categories() {
    // URLs
    const apiURL = 'http://localhost:8000/category';
    const searchUrl = "http://localhost:8000/category?q=";

    // Basic info for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 3;
    const pagesVisited = pageNumber * dataPerPage;

    // Get request
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState([]);
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

    // displaying data
    const displayData = state
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map(state => {
            return <tr key={state.url}>
                <td className='border'>{state.title}</td>
                <td className='border'>{state.product_number}</td>
                <td className='border'>{state.time_of_adding}</td>
                <td className='border'>
                    <NavLink to={`/category/edit?id=${state.id}`}>
                        <button type="button" className="btn btn-outline-primary mx-2">
                            Edit
                            <i className="bi bi-pencil-square px-1" id='edit'></i>
                        </button>
                    </NavLink>
                </td>
            </tr>
        });

    // Search filter
    const [search, setSearch] = useState("");
    const handleSearchChange = e => {
        setSearch(e.target.value);
        Axios.get(searchUrl + e.target.value)
            .then((data) => {
                setState(data.data.map((e) => { return e }));
            });
    }

    return (
        <div>Categories</div>
>>>>>>> Add existing project files to Git
    )
}
