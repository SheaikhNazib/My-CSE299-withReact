import React from 'react';
import Admin_nav from './Admin_nav';

function Admin_doctors() {
    return (
        <>
            <Admin_nav />
            <div className="container mt-4">
                <h3>List of Doctors</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <img src="doctor_image.jpg" alt="Doctor Image" className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <h5 className="mb-0">Doctor's Name</h5>
                                <p className="mb-0">Doctor's Degree</p>
                            </div>
                            <div className="col-md-4 text-end">
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <img src="doctor_image.jpg" alt="Doctor Image" className="img-fluid" />
                            </div>
                            <div className="col-md-6">
                                <h5 className="mb-0">Doctor's Name</h5>
                                <p className="mb-0">Doctor's Degree</p>
                            </div>
                            <div className="col-md-4 text-end">
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Admin_doctors;
