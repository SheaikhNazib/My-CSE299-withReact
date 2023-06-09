import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Dashboard() {
    return (
        <>
            <Navbar />
            {/* <!-- --------------------header carousel start---------- --> */}
            <header>
                <section className="">

                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {/* <!-- ----------- slider 1------------ --> */}
                            <div className="carousel-item active ">
                                <img src="images/slider-1.jpg" className="d-block w-100 " alt="..." />

                                <div className="carousel-caption d-none d-md-block ">

                                    <h1 className="carousel-text">Healthcare, Anytime Anywhere</h1>
                                    <h4 className="carousel-text mt-2 mb-5">Join Medical Assistant, a healthcare system that puts
                                        you first
                                    </h4>
                                    <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>
                                        <button className="btn btn-primary mb-5 py-3 px-4">
                                            Explore Services <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </a>

                                </div>
                            </div>

                            {/* <!-- ----------- slider 2------------ --> */}
                            <div className="carousel-item active ">
                                <img src="images/slider-2.jpg" className="d-block w-100 " alt="..." />

                                <div className="carousel-caption d-none d-md-block ">

                                    <h1 className="carousel-text">Consult With Experienced Doctors In-Hub Or From Your Home</h1>
                                    <h4 className="carousel-text mt-2 mb-5">Medical Assistant offers more than 60 doctors in 24
                                        specialized departments
                                    </h4>
                                    <a href="/doctors" style={{ color: 'white', textDecoration: 'none' }}>
                                        <button className="btn btn-primary mb-5 py-3 px-4">
                                            Book Appointment <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>

                            {/* <!-- ----------- slider 3------------ --> */}
                            <div className="carousel-item active ">
                                <img src="images/slider-3.jpg" className="d-block w-100 " alt="..." />

                                <div className="carousel-caption d-none d-md-block ">

                                    <h1 className="carousel-text">Hassle-Free Lab Tests With Home Sample Collection Service</h1>
                                    <h4 className="carousel-text mt-2 mb-5">We know it can be difficult to do lab tests, especially
                                        during busy schedules, harsh weather and heavy traffic, which is why we offer lab tests
                                        at home
                                    </h4>
                                    <a href="/tests" style={{ color: 'white', textDecoration: 'none' }}>
                                        <button className="btn btn-primary mb-5 py-3 px-4">
                                            Book Lab Test <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </header>

            <main>
                {/* <!-- -------------------why medical assistant part-1--------- --> */}
                <section className="container mt-5">
                    <div className="row">
                        <div className="container-fluid col-12 col-md-6 my-auto">
                            <h5 className="text-black-50 my-3">WHY MEDICAL ASSISTANT</h5>
                            <h2 className="fw-bold">Doctors Who Listen</h2>
                            <p>Our doctors spend time to get to know you and your health. They treat you with the respect and
                                empathy you deserve, and have years of local and international experience to give you advice
                                that you can rely on.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid w-100 rounded-5" src="images/doctor-listen.webp" alt="" />
                        </div>
                    </div>
                </section>

                {/* <!-- -------------------why medical assistant part-2--------- --> */}
                <section className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img className="img-fluid w-100 rounded-5" src="images/lab-test.jpg" alt="" />
                        </div>
                        <div className="container-fluid col-12 col-md-6 my-auto why-medi my-auto rounded-5">
                            <h5 className="text-white my-3 mt-5">WHY MEDICAL ASSISTANT</h5>
                            <h2 className="fw-bold text-white mt-5 mb-3">Diagonosis You Can Trust</h2>
                            <p className="text-white mb-5">You can depend on the quality of our diagnosis and test results. Our
                                laboratories are set up according to international standards and protocols and we routinely
                                compare our results with laboratories abroad to ensure your reports are accurate.</p>
                            <a className='btn-our-services' href="/services"><button className="btn btn-outline-light px-4 py-3 mb-3">Our Services <i
                                className="fa-solid fa-arrow-right"></i>
                            </button></a>
                        </div>
                    </div>
                </section>

                {/* <!-- -------------------why medical assistant part-3--------- --> */}
                <section className="container mt-5">
                    <div className="row">
                        <div className="container-fluid col-12 col-md-6 my-auto bg-secondary-subtle rounded-5">
                            <h5 className="text-black-50 my-3">WHY MEDICAL ASSISTANT</h5>
                            <h2 className="fw-bold">We Care For You Like Family</h2>
                            <p>Open every day 8AM - 10PM</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid w-100 rounded-5" src="images/care-pic.jpg" alt="" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Dashboard
