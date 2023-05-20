import React from 'react'

const Footer = () => {
    return (
        <footer className="container bg-black mt-5">
            <div className="p-5">
                <div className="row p-5 g-3">
                    <div className="col-md-3 text-white">
                        <h3>Services</h3>
                        <p className="mt-0 mt-md-4">Tests & Procedures</p>
                        <p className="mt-0 mt-md-4-2">Health Checks & Packages</p>
                        <p className="mt-0 mt-md-4-2">Membership Plan</p>

                    </div>
                    <div className="col-md-3 text-white">
                        <h3>Resources</h3>
                        <p className="mt-0 mt-md-4">Our Doctors</p>
                        <p className="mt-0 mt-md-4-2">Pharmacy + E-Pharmacy</p>
                        <p className="mt-0 mt-md-4-2">FAQ</p>
                    </div>


                    <div className="col-md-3 text-white">
                        <h3>Contact Now</h3>
                        <p className="mt-4">Basundhara R/A, Block-A</p>
                        <p className="mt-2">+88 01750-7822000,
                            +88 01750-7821000</p>
                        <p className="mt-2">
                            mediassist@gmail.com</p>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email Address"
                                aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-primary  border-0" type="button"
                                id="button-addon2"><i className="fa-solid fa-paper-plane text-white"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
