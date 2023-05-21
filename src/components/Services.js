import React from 'react'

function Services() {
    return (
        <>
            <header className="service-header">
                    <h1 className="text-center">Services</h1>
                    <h5 className="text-center">We take care of all your outpatient needs under one roof</h5>
            </header>
            <main>
                {/* <!-- -----------------------consultation section start----------  --> */}
                <section className="container mt-4 p-3 rounded service-section">
                    <div className="row">
                        <div className="col-10">
                            <h3>Consultations</h3>
                            <p>Medical Assistant’s caring, internationally trained 60+ doctors from 24 specializations take the
                                time to listen and understand your needs. All consultations (in-clinic or virtual) take at least
                                15 minutes with our family doctors or specialists. Our senior doctors train others in cases
                                where they require guidance. Praava Family Medicine Doctors are your family members who
                                understand your health more than anyone else. All of our patients' medical histories are
                                recorded in the Praava server so doctors can quickly check them before consultations so they can
                                better understand the background of their patients. Praava also maintains the highest
                                confidentiality of medical records.</p>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Read More <i
                                className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                    {/* <!--------- Modal-------> */}
                    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Consultations</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h2>In-Person Consultation</h2>
                                    <p>Meet our Family Health Professionals and Visiting Specialists at our flagship health
                                        center in Banani. Our doctors provide adequate time and get to know you and your health.
                                        They check your prescriptions and medical history before your consultation to better
                                        advise you on your health conditions.
                                    </p>
                                    <button className="btn btn-primary">Book Appointment <i
                                        className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ------------------------- consultation section end------------- --> */}


                {/* <!-- -----------------------Diagnostics section start----------  --> */}
                <section className="container mt-2 p-3 rounded service-section">
                    <div className="row">
                        <div className="col-10">
                            <h3>Diagnostics</h3>
                            <p>
                                Medical assistant’s state-of-the-art diagnostic services consist of seven laboratories including
                                the first
                                Molecular Cancer Diagnostics laboratory in Bangladesh as well as comprehensive imaging exams.
                                Our laboratories received Bangladesh Accreditation Board (BAB) accreditation and ISO 15189-2012
                                international accreditation. For external validation of Praava’s testing, Praava participates in
                                RIQAS (Randox International Quality Assessment Scheme), the world’s largest international
                                external quality assessment scheme, and has received a 99.9% average monthly accuracy score.

                            </p>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Read More <i
                                className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                    {/* <!------ Modal------- --> */}
                    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Diagnostics Lab Services & Imaging</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h2>Diagnostics Lab Services & Imaging</h2>
                                    <p>Our state-of-the-art diagnostic services consist of seven laboratories including the
                                        first Molecular Cancer Diagnostics laboratory in Bangladesh as well as comprehensive
                                        imaging exams. Our laboratories received Bangladesh Accreditation Board (BAB)
                                        accreditation and ISO 15189:2012 international accreditation. For external validation of
                                        Praava’s testing, Praava participates in RIQAS (Randox International Quality Assessment
                                        Scheme), the world’s largest international external quality assessment scheme, and has
                                        received a 99.9% average monthly accuracy score.
                                    </p>
                                    <button className="btn btn-primary">Book Appointment <i
                                        className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ------------------------- Diagnostics section end------------- --> */}

                {/* <!-- -----------------------Health Checks & Packages section start----------  --> */}
                <section className="container mt-2 p-3 rounded service-section">
                    <div className="row">
                        <div className="col-10">
                            <h3>Health Checks & Packages</h3>
                            <p>
                                Medical assistant believes everyone should have access to convenient, affordable, and
                                high-quality healthcare. Our health checks and packages help you stay on top of your health, no
                                matter your age, gender, or needs. Praava has designed its health checks in such a way that you
                                can get any one of them to cover your healthcare needs for at least a year. Availing a health
                                check that matches your needs can give you a clear indication of any health issues and better
                                guidelines to improve them. Choose the one that is right for you.

                            </p>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Read More <i
                                className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                    {/* <!------ Modal------- --> */}
                    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Health Checks and Packages</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h2>Health Checks and Packages</h2>
                                    <p>We believe everyone should have access to convenient, affordable, and high-quality
                                        healthcare. Our health checks and packages help you stay on top of your health no matter
                                        your age, gender or needs. Choose the one that is right for you.
                                    </p>
                                    <button className="btn btn-primary">Book Appointment <i
                                        className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ------------------------- Health Checks & Packages section end------------- --> */}


                {/* <!-- -----------------------Remote & Home Services section start----------  --> */}
                <section className="container mt-2 p-3 rounded service-section">
                    <div className="row">
                        <div className="col-10">
                            <h3>Remote & Home Services</h3>
                            <p>
                                Praava has brought back the culture of getting doctor consultations or nursing services at your home for any emergency situation. Praava values your time and delivers services to cater your needs. You can book appointments for sample collection of any lab tests or home visits by our Family Medicine Doctors, physiotherapists or nurses right at your home.
                            </p>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Read More <i
                                className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                    {/* <!------ Modal------- --> */}
                    <div className="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Health Checks and Packages</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h2>Health Checks and Packages</h2>
                                    <p>We believe everyone should have access to convenient, affordable, and high-quality
                                        healthcare. Our health checks and packages help you stay on top of your health no matter
                                        your age, gender or needs. Choose the one that is right for you.
                                    </p>
                                    <button className="btn btn-primary">Book Appointment <i
                                        className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ------------------------- Remote & Home Services section end------------- --> */}

            </main>

        </>
    )
}

export default Services
