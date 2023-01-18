import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <i class="bi bi-file-text-fill display-5"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navigationBar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" id='home' aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id='about' href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id='functions' href="/">Functions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
