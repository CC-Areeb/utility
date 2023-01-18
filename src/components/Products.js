import React from 'react'
import Axios from 'axios';

export default function Products() {

    const apiURL = `https://catfact.ninja/fact`;
    Axios.get(apiURL)
        .then(function (response) {
            console.log(response);
        });

    return (
        <div className='items'>
            <p className='display-1'>Products</p>
            <div className='text-center' id='prod_table'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Images</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">SKU</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>image 1</td>
                            <td>title 1</td>
                            <td>category 1</td>
                            <td>SKU 1</td>
                        </tr>

                        <tr>
                            <td>image 2</td>
                            <td>title 2</td>
                            <td>category 2</td>
                            <td>SKU 2</td>
                        </tr>
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
