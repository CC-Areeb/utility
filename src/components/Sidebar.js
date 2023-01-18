import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div id='side_bar' className='p-4'>
                <a href="/"><i class="bi bi-speedometer"></i> Dashboard</a>
                <a href="/"><i class="bi bi-box-seam"></i> Manage Products</a>
                <a href="/"><i class="bi bi-box2"></i> Manage Codes</a>
                <a href="/"><i class="bi bi-search"></i> Manage Code Search</a>
                <a href="/"><i class="bi bi-qr-code"></i> Disable Codes</a>
                <a href="/"><i class="bi bi-tags"></i> Manage Labels</a>
                <a href="/"><i class="bi bi-diagram-3"></i> Manage Batches</a>
                <a href="/"><i class="bi bi-people-fill"></i> Manage Users</a>
                <a href="/"><i class="bi bi-person-lines-fill"></i> Manage Roles</a>
                <a href="/"><i class="bi bi-list-stars"></i> Manage Categories</a>
                <a href="/"><i class="bi bi-pc-display-horizontal"></i> Manage Beekeepers</a>
                <a href="/"><i class="bi bi-geo"></i> Manage Regions</a>
                <a href="/"><i class="bi bi-envelope-at"></i> Manage Emails</a>
                <a href="/"><i class="bi bi-bug"></i> Invalid Codes</a>
                <a href="/"><i class="bi bi-file-earmark-bar-graph"></i> Reports</a>
                <a href="/"><i class="bi bi-sliders"></i> Manage Site Settings</a>
                <a href="/"><i className="bi bi-door-open"></i> Logout</a>
            </div>
        </>
    )
}
