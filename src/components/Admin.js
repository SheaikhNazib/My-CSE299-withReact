import React from 'react'

function Admin() {
    return (
        <>
            <section>
                <div class="sidebar text-white">
                    <h2 class="py-3">Admin</h2>
                    <div class="fs-4">
                        <li class="py-1">Doctors</li>
                        <li class="py-1">Users</li>
                        <li class="py-1">Tests</li>
                    </div>
                </div>
            </section>

            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold">Admin Dashboard</a>
                    <a href="login.html" class="text-black text-decoration-none logout"><i class="fa-solid fa-power-off"></i>
                        <span class="me-3 fw-bold">LogOut</span></a>
                </div>
            </nav>

            <section class="card-section p-3 row justify-content-around">
                <div class="card border-info mb-3 shadow-lg px-4" style="max-width: 18rem;">
                    <div class="card-header fs-2 fw-bold text-center">Total Doctors</div>
                    <div class="card-body">
                        {/* <!-- <h5 class="card-title">Info card title</h5> --> */}
                        <p class="card-text fs-3 fw-bold text-center">200</p>
                    </div>
                </div>

                <div class="card border-info mb-3 shadow-lg" style="max-width: 18rem;">
                    <div class="card-header fs-2 fw-bold text-center">Total Users</div>
                    <div class="card-body">
                        {/* <!-- <h5 class="card-title">Info card title</h5> --> */}
                        <p class="card-text fs-3 fw-bold text-center">1000</p>
                    </div>
                </div>

                <div class="card border-info mb-3 shadow-lg" style="max-width: 18rem;">
                    <div class="card-header fs-2 fw-bold text-center">Total Tests</div>
                    <div class="card-body">
                        {/* <!-- <h5 class="card-title">Info card title</h5> --> */}
                        <p class="card-text fs-3 fw-bold text-center">60</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin
