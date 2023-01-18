# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# React Router DOM (6.4 and above)

The latest version of react router dom has some changes regarding how to setup the routing system and includes additional features

**Steps to setup react router**

- Install the latest react router dom version `npm i react-router-dom`.
- Next you will need to set up your own `browser router` as shown below
```
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
```

- To add more routes you have to use the `<Route />` tags and provide a `path` and the `element` to it and make sure it is inside the `createBrowserRouter` method
```
const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Rootlayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products' element={<Products />} />
        </Route>
    )
);
```

- Now provide the route provider to return the routes to be rendered in the browser
```
<>
    <RouterProvider router={route} />
</>
```

- To make things clean, we will use a layouts folder which will contain our routes or links. Inside the Rootlayout we can set our navlinks or links and provide and outlet for it as shown below
```
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Rootlayout() {
    return (
        <div>
            <header>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/products">Manage Products</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
```