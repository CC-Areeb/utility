import React, { useEffect, useState } from 'react'
import Axios from 'axios';

export default function Products() {
    const apiURL = `https://catfact.ninja/facts`;
    const [state, setState] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            Axios.get(apiURL).then(function (response) {
                setState(response.data.data.map((e) => { return e }));
                console.log(response.data.data.map((e) => { return e }));
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
                        {state.map((val) => {
                            return <>
                                <tr>
                                    <td>{val.fact.slice(0, 10)}</td>
                                    <td>{val.length}</td>
                                    <td>{val.length}</td>
                                </tr>
                            </>
                        })}
                    </tbody>
                </table>
                <div className="d-flex justify-content-between my-4">
                    <button type="button" className="btn btn-dark" ><i className="bi bi-arrow-left"></i> Previous</button>
                    <button type="button" className="btn btn-dark" >Next <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}
