import React from 'react'

function Doctors() {
  return (
    <>
      <header className="doctors-header">
        <div>
          <h1 className="text-center fw-bold">Our Doctors</h1>
          <h5 className="text-center">At Praava, Family Medicine Doctors as well as Visiting Specialists take care of you.
            Our doctors have years of local and international experience and treat you with the respect and empathy
            you deserve.
          </h5>
        </div>
      </header>

      <main className="mt-5">
        {/* <!-- ------------------------ Search doctor start -------------  --> */}
        <section className="container">
          <div className="row">
            <div className="col-4">
              <p>Search by Speciality</p>
              <div className="dropdown">
                <button className="btn btn-outline-success dropdown-toggle p-3" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Please Select
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Acupuncture</a></li>
                  <li><a className="dropdown-item" href="#">Anesthesiology</a></li>
                  <li><a className="dropdown-item" href="#">Cardiology</a></li>
                  <li><a className="dropdown-item" href="#">Dentistry</a></li>
                  <li><a className="dropdown-item" href="#">Dermatology</a></li>
                  <li><a className="dropdown-item" href="#">Diabetology</a></li>
                  <li><a className="dropdown-item" href="#">ENT</a></li>
                  <li><a className="dropdown-item" href="#">Family Physicians</a></li>
                  <li><a className="dropdown-item" href="#">Gastroenterology & Hepatology</a></li>
                  <li><a className="dropdown-item" href="#">Hematology</a></li>
                  <li><a className="dropdown-item" href="#">Mental Health Professionals</a></li>
                  <li><a className="dropdown-item" href="#">Nephrology</a></li>
                  <li><a className="dropdown-item" href="#">Neurology</a></li>
                  <li><a className="dropdown-item" href="#">Neurology</a></li>
                </ul>
              </div>
            </div>

            <div className="col-4">
              <p>Search by Name</p>
              <input className="p-3 rounded" type="text" placeholder="Type Doctor's Name" />
            </div>

            <div className="col-4">
              <p>Search by Date</p>
              <input className="p-3 rounded" type="date" id="date-picker" />
            </div>

          </div>
        </section>
        {/* <!-- ---------------------- search doctor end ------------  --> */}


        {/* <!-- -----------------------------List of doctors section start ----------  --> */}
        <section className="container pt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- -----------------------------List of doctors section end ----------  --> */}
      </main>
    </>
  )
}

export default Doctors
