import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

// layouts
import Rootlayout from '../layouts/Rootlayout';


// componenets
import Dashboard from './Dashboard';
import Products from './Products';

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Rootlayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
        </Route>
    )
);

export default function Sidebar() {
    return (
        <>
            <RouterProvider router={route} />
        </>
    )
}
