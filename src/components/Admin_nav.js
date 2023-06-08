import React from 'react'

function Admin_nav() {
    return (
        <>
            <section>
                <div className="sidebar text-white">
                    <a href="/admin" className="text-white text-decoration-none"><h2 className="py-3">Admin</h2></a>
                  
                    <div className="fs-4">
                        <ul>
                            <a href='/admin_doctors' className="py-1 text-white text-decoration-none "><li >Doctors</li></a>
                            <a href='/admin_users' className="py-1 text-white text-decoration-none "><li >Users</li></a>
                            <a href='/admin_tests' className="py-1 text-white text-decoration-none "><li >Tests</li></a>
                        </ul>
                    </div>
                </div>
            </section>

            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold">Admin Dashboard</a>
                    <a href="/login" className="text-black text-decoration-none logout">
                        <i className="fa-solid fa-power-off"></i>
                        <span className="me-3 fw-bold">LogOut</span>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Admin_nav
