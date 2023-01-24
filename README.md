# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install this repository
To install this repository in you local machine, download the file as zip or clone it and run **npm i** to install the dependancies.

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

### Fetching API without axios

In JavaScript we use fetch function when we are dealing with data from a server or backend.

```
const apiURL = `https://catfact.ninja/fact`;

fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
```

- When we use fetch, we have to use a callback function called `then()` and attach it with the fetch method as shown
```
fetch(apiURL).then((response))
```

- With the `then()` callback we can perform actions on the data we got.

- The first required action we have to do is that we have to convert the data into JSON format as shown below
```
fetch(apiURL).then((response) => response.json())
```

- A JSON is a standard text-based format for representing structured data based on JavaScript object syntax.

- We can add on more callback promises or callback functions as shown below
```
fetch(apiURL).then((response) => response.json()).then((data) => { console.log(data) });
```

### Fetching API with axios
- To use axios, we first need to install it using node package manager.
    `npm install axios`

- Now import Axios as shown 
    `import Axios from 'axios';`

- When using axios, we do not need to convert the data from API into JSON format.

- A get request example shown below
    ```
    const apiURL = `https://catfact.ninja/fact`;

    Axios.get(apiURL)
        .then(function (response) {
            console.log(response);
        });
    ```


### JSON server
- We can set up our own local json server which will act as a 
    database temporarily until the backend server is not ready yet.

- We use the json server to get a mock version of the REST API
    that we normally use in our websites.

- Below is the link from the node package manager
    website where json server is installed globally on our systems
    and find useful code snippets for json servers.

- link: https://www.npmjs.com/package/json-server


### Storing data in json server

We can send post request to json server to store data as shown
```
const handleSubmit = async (e) => {
    e.preventDefault();
    const addData = async () => {
        Axios.post(postUrl, jsonData)
    };
    setFormSubmitted(true);
    addData();
}
```

Launching Json server

```
npx json-server --watch database/db.json --port 8000
```

- we use `--watch` to watch any changes made to the URL end points
- then we have to tell where the json file with dummy data is located
    and in my case it is a database folder in root directory and a file
    named `db.json`  
- we use `--port` to specify which port to use, by default json server
    however when working with react we use port 3000 for react to listen
    so we the use `--port PORT_NUMBER` to change the port. 

Complete code
```
import Axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddProdcuts() {

    // these URL will only work if you have launched you json server with the correct port number for example port 8000
    const postUrl = 'http://localhost:8000/read-articles';
    const returnUrl = 'http://localhost:8000/read-articles';

    // all the states
    const [author, setAuthor] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [url, setURL] = useState([]);
    const [urlToImage, setUrlToImage] = useState([]);
    const [publishedAt, setPublishedAt] = useState([]);
    const [content, setContent] = useState([]);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const jsonData = {
        author: author,
        title: title,
        description: description,
        url: url,
        urlToImage: urlToImage,
        publishedAt: publishedAt,
        content: content,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addData = async () => {
            Axios.post(postUrl, jsonData)
        };
        setFormSubmitted(true);
        addData();
    }

    return (
        <div className='items'>
            <p className='display-1'>Add Products</p>

            <form onSubmit={handleSubmit} method='POST' className='content w-75'>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input className="form-control" type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input className="form-control" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">URL</label>
                    <input className="form-control" type="url" value={url} onChange={e => setURL(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input className="form-control" type="url" value={urlToImage} onChange={e => setUrlToImage(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Time of publication</label>
                    <input className="form-control" type="date" value={publishedAt} onChange={e => setPublishedAt(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <input className="form-control" type="text" value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-outline-success mt-4 btn-lg">Add Product</button>
            </form>
        </div>
    )
}
```

### Breakdown

First we understand the jsonData object

```
const jsonData = {
    author: author,
    title: title,
    description: description,
    url: url,
    urlToImage: urlToImage,
    publishedAt: publishedAt,
    content: content,
};
```
- the names on the left are the json data value key names
- the names on the right are the `setState` variable names


**Json data**
```
{
    "author": "Consectetur eum volu",
    "title": "Ea voluptates invent",
    "description": "Doloremque qui sunt",
    "url": "Tenetur fuga Velit ",
    "urlToImage": "Exercitationem eius ",
    "publishedAt": "Cum voluptas alias a",
    "content": "Et vero accusantium ",
    "id": 2
}
```

- Since we are using json server so the key names will be used as database tuple/column names.
- So when we made the POST request, we made sure that these json keys are equal to the set state variables.


**Set state function**
- After equalling the set state variable to the json keys, we can now use the set state functions to detect changes in values
```
onChange={e => setAuthor(e.target.value)}
```
- This is a shorthand when using arrow functions, and by using this we get the events with it that'why we can call the setter function directly
- this setter function is used to get the value of the input field and store in the db.json file. 

### Redirecting

We can redirect the user after they have submitted a form with react-router-dom. For this we need to use the `useNavigate` hook

```
// calling the navigate hook from react-router-dom
let navigate = useNavigate();
```

Now we can use this `navigate` variable and redirect to any page/link we want
as shown.

```
// calling the navigate hook from react-router-dom
let navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    const addData = async () => {
        Axios.post(postUrl, jsonData)
        navigate('/products');
    };
    addData();
    }
```

As you can see, we can navigate after `Axios` has applied the post method
so when the button is clicked, the Axios fires the post method to save the
data and then the redirect hook is fired to redirect the user to that URL
end-point.