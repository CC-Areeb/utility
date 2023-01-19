import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';
import loader from '../utilities/loader.gif'

export default function Products() {
    const apiURL = `https://catfact.ninja/facts`;
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    // Basic info for pagination
    const dataPerPage = 3;
    const pagesVisited = pageNumber * dataPerPage;


    // function for displaying data
    const displayData = state
        .slice(pagesVisited, pagesVisited + dataPerPage)
        .map(state => {
            return <>
                <tr>
                    <td>{state.fact.slice(0, 10)}</td>
                    <td>{state.length}</td>
                    <td>{state.length}</td>
                </tr>
            </>

        });

    useEffect(() => {
        const dataFetch = async () => {
            setLoading(true);
            Axios.get(apiURL).then(function (response) {
                setLoading(false);
                setState(response.data.data.map((e) => { return e }));
            });
        };

        dataFetch();
    }, []);

    const pageCount = Math.ceil(state.length / dataPerPage);
    const changePage = ({selected}) => {
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
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <span id='loading_screen'><img src={loader} alt="" id='loader_gif'/></span> : displayData}
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

        </div>
    )
}
