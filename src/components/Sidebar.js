import React, { useEffect } from 'react';
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
import CodeSearch from './CodeSearch';
import ManageCodes from './ManageCodes';
import DisabledCodes from './DisabledCodes';
import Labels from "./Labels";
import Batches from "./Batches";
import Users from './Users';
import Roles from './Roles';
import Categories from './Categories';
import Beekeeper from './Beekeeper';
import Region from './Region';
import Emails from './Emails';
import InvalidCodes from './InvalidCodes';
import Reports from './Reports';
import SiteSettings from './SiteSettings';
import Login from './Login';

// pages
import AddProdcuts from '../pages/AddProdcuts';
import EditProduct from '../pages/EditProduct';
import AddCategory from '../pages/AddCategory';
import EditCategory from '../pages/EditCategory';

const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* login route */}
            <Route path='/login' element={<Login />} />

            {/* Side bar routes */}
            <Route path='/' element={<Rootlayout />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/manage-codes' element={<ManageCodes />} />
                <Route path='/code-search' element={<CodeSearch />} />
                <Route path='/disabled-codes' element={<DisabledCodes />} />
                <Route path='/labels' element={<Labels />} />
                <Route path='/batches' element={<Batches />} />
                <Route path='/users' element={<Users />} />
                <Route path='/roles' element={<Roles />} />
                <Route path='/category' element={<Categories />} />
                <Route path='/beekeeper' element={<Beekeeper />} />
                <Route path='/region' element={<Region />} />
                <Route path='/emails' element={<Emails />} />
                <Route path='/invalid-codes' element={<InvalidCodes />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/site-settings' element={<SiteSettings />} />
                {/* <Route path='/logout' element={<Logout />} /> */}


                {/* Category pages */}
                <Route path='/category/add' element={<AddCategory />} />
                <Route path='/category/:slug/edit' element={<EditCategory />} />

                {/* Product pages */}
                <Route path='/products/add' element={<AddProdcuts />} />
                <Route path='/products/:slug/edit' element={<EditProduct />} />

                {/* Batch pages */}
            </Route>
        </>
    )
);

export default function Sidebar() {
    return (
        <>
            <RouterProvider router={route} />
        </>
    )
}