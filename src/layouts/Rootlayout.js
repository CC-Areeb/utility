import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Rootlayout() {
    return (
        <div>
            <header id='side_bar' className='p-4'>
                <NavLink to="/dashboard"><i className="bi bi-speedometer"></i> Dashboard</NavLink>
                <NavLink to="/products"><i className="bi bi-box-seam"></i> Manage Products</NavLink>
                <NavLink to="/manage-codes"><i className="bi bi-box2"></i> Manage Codes</NavLink>
                <NavLink to="/code-search"><i className="bi bi-search"></i> Manage Code Search</NavLink>
                <NavLink to="/disabled-codes"><i className="bi bi-qr-code"></i> Disable Codes</NavLink>
                <NavLink to="/labels"><i className="bi bi-tags"></i> Manage Labels</NavLink>
                <NavLink to="/batches"><i className="bi bi-diagram-3"></i> Manage Batches</NavLink>
                <NavLink to="/users"><i className="bi bi-people-fill"></i> Manage Users</NavLink>
                <NavLink to="/roles"><i className="bi bi-person-lines-fill"></i> Manage Roles</NavLink>
                <NavLink to="/category"><i className="bi bi-list-stars"></i> Manage Categories</NavLink>
                <NavLink to="/beekeeper"><i className="bi bi-pc-display-horizontal"></i> Manage Beekeepers</NavLink>
                <NavLink to="/region"><i className="bi bi-geo"></i> Manage Regions</NavLink>
                <NavLink to="/emails"><i className="bi bi-envelope-at"></i> Manage Emails</NavLink>
                <NavLink to="/invalid-codes"><i className="bi bi-bug"></i> Invalid Codes</NavLink>
                <NavLink to="/reports"><i className="bi bi-file-earmark-bar-graph"></i> Reports</NavLink>
                <NavLink to="/site-settings"><i className="bi bi-sliders"></i> Manage Site Settings</NavLink>
                <NavLink to="/logout"><i className="bi bi-door-open"></i> Logout</NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
