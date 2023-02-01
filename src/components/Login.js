import React, { useState } from "react";
import Axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
    // URLs
    const loginUrl = 'http://127.0.0.1:8000/api/login'; // This is just for development only, make sure to call the URLs from you environment file

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState([]);

    const data = {
        email: email,
        password: password
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post(loginUrl, data)
            .then(response => {
                localStorage.setItem("token", response.data.token)
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="login_screen shadow p-3 mb-5 bg-body rounded col-5">
                <div className="p-4">
                    <div className="text-center">
                        <p className="display-1">
                            Login
                        </p>
                    </div>
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 my-4">
                                    <input
                                        required
                                        className="form-control"
                                        type="text"
                                        placeholder="Username"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {error && <p>{error}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 my-4">
                                    <input
                                        required
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {error && <p>{error}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-success btn-lg" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;