import React from 'react';
import Admin_nav from './Admin_nav';

function Admin() {
    return (
        <>
            <Admin_nav />
            <section className="card-section p-3 row justify-content-around">
                <div className="card border-info mb-3 shadow-lg px-4" style={{ maxWidth: '18rem' }}>
                    <div className="card-header fs-2 fw-bold text-center">Total Doctors</div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Info card title</h5> */}
                        <p className="card-text fs-3 fw-bold text-center">200</p>
                    </div>
                </div>

                <div className="card border-info mb-3 shadow-lg" style={{ maxWidth: '18rem' }}>
                    <div className="card-header fs-2 fw-bold text-center">Total Users</div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Info card title</h5> */}
                        <p className="card-text fs-3 fw-bold text-center">1000</p>
                    </div>
                </div>

                <div className="card border-info mb-3 shadow-lg" style={{ maxWidth: '18rem' }}>
                    <div className="card-header fs-2 fw-bold text-center">Total Tests</div>
                    <div className="card-body">
                        {/* <h5 className="card-title">Info card title</h5> */}
                        <p className="card-text fs-3 fw-bold text-center">60</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Admin;
