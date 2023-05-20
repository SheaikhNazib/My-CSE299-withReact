import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary container">
      <div className="container-fluid">
        <a className="navbar-brand text-center text-success fw-bold fs-3" href="./dashboard">Medical Assistant</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <a className="nav-link active nav-under text-danger-emphasis fs-4 fw-medium" aria-current="page"
              href="./dashboard">Home</a>
            <a className="nav-link active nav-under text-danger-emphasis fs-4 fw-medium" aria-current="page"
              href="./services">Services</a>
            <a className="nav-link active nav-under text-danger-emphasis fs-4 fw-medium" aria-current="page"
              href="./corporate">Corporate</a>
            <a className="nav-link active nav-under text-danger-emphasis fs-4 fw-medium" aria-current="page"
              href="./doctors">Our Doctors</a>
          </div>
        </div>
        <a href="tel:10648" className="phone-number"><i className="fa-solid fa-phone-volume me-1"></i><span
          className="me-3">10648</span></a>

        <a href="mailto:sheaikh.rahman@northsouth.edu" className="email-address"><i
          className="email-icon fa-solid fa-envelope me-1"></i><span className="me-3">sheaikh.rahman@northsouth.edu</span></a>

        <a href="./login" className="login"><i className="fa-solid fa-power-off"></i> <span className="me-3">Login</span></a>
      </div>
    </nav>
  );
};

export default Navbar;
