import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function Products() {
    const apiURL = `https://catfact.ninja/facts`;
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);

    // Basic info for pagination
    const dataPerPage = 5;
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
                        {loading ? <span>Loading ...</span> : displayData}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
