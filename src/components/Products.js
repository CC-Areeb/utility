import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import loader from '../utilities/loader.gif';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function Products() {
    // URLs
    const apiURL = 'http://localhost:8000/read-articles';

    // use states
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    // Basic info for pagination
    const dataPerPage = 3;
    const pagesVisited = pageNumber * dataPerPage;

    // calling the navigate hook from react-router-dom
    let navigate = useNavigate();

    function handleDelete(e)
    {
        Axios.delete('http://localhost:8000/read-articles/' + e);
        navigate('/products');
    }


    // displaying data
    const displayData = state
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map(state => {
            return <tr key={state.url}>
                <td>{state.title.slice(0, 10)}</td>
                <td>{state.author}</td>
                <td>{state.description.slice(0, 10)}</td>
                <td>{state.publishedAt}</td>
                <td>
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

    const pageCount = Math.ceil(state.length / dataPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className='items'>
            <p className='display-1'>Products</p>
            <div className='text-center' id='prod_table'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Sku</th>
                            <th scope="col">Time of publication</th>
                            <th scope="col">Actions</th>
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
