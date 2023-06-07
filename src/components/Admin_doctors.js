import React from 'react'

function Admin_doctors() {
  return (
    <>
      <div class="container mt-4">
            <h3>List of Doctors</h3>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="doctor_image.jpg" alt="Doctor Image" class="img-fluid" />
                        </div>
                        <div class="col-md-6">
                            <h5 class="mb-0">Doctor's Name</h5>
                            <p class="mb-0">Doctor's Degree</p>
                        </div>
                        <div class="col-md-4 text-end">
                            <button class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="doctor_image.jpg" alt="Doctor Image" class="img-fluid" />
                        </div>
                        <div class="col-md-6">
                            <h5 class="mb-0">Doctor's Name</h5>
                            <p class="mb-0">Doctor's Degree</p>
                        </div>
                        <div class="col-md-4 text-end">
                            <button class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Admin_doctors
