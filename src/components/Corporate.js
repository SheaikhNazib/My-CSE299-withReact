import React from 'react'

function Corporate() {
    return (
        <>
            <header className="header-bg corporate-header">
                <div>
                    <h1 className="text-center fw-bold">Corporate Health Solutions</h1>
                    <h5 className="text-center">Medical helth offers a full range of corporate healthcare solutions for your
                        employees’ health and wellbeing.</h5>
                </div>
            </header>
            {/* <!-- --------------- text section ----------  --> */}
            <section className="container mt-5">
                <h1>Keep your employees healthy with Medical Assistant</h1>
                <p className="fw-light">With the stresses of modern life, our health is often not a priority. Praava wants to help
                    you and your team to be as healthy as possible to enable a happier, more productive workplace. Explore some
                    of our most popular corporate solutions below or get in touch to know more. Call 10648 or drop us an email
                    at corporates@praavahealth.com.</p>
            </section>

            {/* <!-- ------------- card section ----------  --> */}
            <section className="container mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* <!-- -------------------------------------card 1----------------  --> */}
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body card-bg">
                                <div className="my-5 mx-2">
                                    <h2 className="mb-4">Health Check-up</h2>
                                    <ul className="text-align">
                                        <li>Pre Employment health check-up</li>
                                        <li>Executive health check-up</li>
                                        <li>Her Health Check - Age Under 40</li>
                                        <li>Her Health Check - Age 40 to 65</li>
                                        <li>Her Health Check Age - Age Over 65</li>
                                        <li>His Health Check - Age Under 40</li>
                                        <li>His Health Check - Age 40 to 65</li>
                                        <li>His Health Check - Age over 65</li>
                                        <p>And much more...</p>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body card-bg">
                                <div className="my-5 mx-2">
                                    <h2 className="mb-4">Health Camps</h2>
                                    <p>Organize health camps at your organizations to promote healthcare and wellness among your
                                        employees. This can be conducted with medical consultants and doctors who will diagnose
                                        and help your employees maintain better physical and mental health.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body card-bg">
                                <div className="my-5 mx-2">
                                    <h2 className="mb-4">Webinars</h2>
                                    <p>Give us a call on 10648 or send us an email at corporates@praavahealth.com</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body card-bg">
                                <div className="my-5 mx-2">
                                    <h2 className="mb-4">Customized Health services</h2>
                                    <p>At Praava, we also offer several Annual Membership Plans to ensure healthcare is available anytime, anywhere. Our plans include unlimited doctor consults, attractive discounts, and lab exams. Find out which plan is right for you! Call us at 10648 or email us at corporates@praavahealth.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body card-bg">
                                <div className="my-5 mx-2">
                                    <h2 className="mb-4">Covid-19 Services</h2>
                                    <p>COVID-19 Bulk Tests</p>
                                    <p>COVID-19 Traveler Tests</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body card-bg">
                                <div className="my-5 mx-2">
                                    <h2 className="mb-4">24/7 Hotline</h2>
                                    <p>COVID-19 Bulk Tests</p>
                                    <p>COVID-19 Traveler Tests</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Corporate
