import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Tests() {
    return (
        <>
            <Navbar />
            <header className="tests-header">
                <div>
                    <h1 className="text-center fw-bold">Lab Test</h1>
                    <h5 className="text-center">Medical assistant's biggest differentiator from other diagnostics centers is quality. We offer diagnostic labs and a full range of imaging services that are set to international standards (including the first molecular cancer diagnostics lab in Bangladesh). Book any service necessary without any hesitation.
                    </h5>
                </div>
            </header>

            <main className="mt-5">
                {/* <!-- ------------------------ Search Test start -------------  --> */}
                <section className="container">
                    <div className="row">

                        <div className="col-4">
                            <p>Search by Test Name</p>
                            <input className="p-3 rounded" type="text" placeholder="Type Test Name" />
                        </div>

                    </div>
                </section>
                {/* <!-- ---------------------- search Test end ------------  --> */}


                {/* <!-- -----------------------------List of tests section start ----------  --> */}
                <section className="container pt-5">
                    <div class="container">
                        <h1>Test List</h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Test Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>CT-SCAN OF BRAIN (OT)</td>
                                    <td>৳ 4,000</td>
                                    <td><button class="btn btn-primary">Book Now</button></td>
                                </tr>
                                <tr>
                                    <td>Intravenous Urogram (IVU)</td>
                                    <td>৳ 5,200</td>
                                    <td><button class="btn btn-primary">Book Now</button></td>
                                </tr>
                                <tr>
                                    <td>CT Urogram (OT)</td>
                                    <td>৳ 12,000</td>
                                    <td><button class="btn btn-primary">Book Now</button></td>
                                </tr>
                                <tr>
                                    <td>Endoscopy Of UpperGIT (OT) (OT)</td>
                                    <td>৳ 2,100</td>
                                    <td><button class="btn btn-primary">Book Now</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                {/* <!-- -----------------------------List of tests section end ----------  --> */}
            </main>
            <Footer />
        </>
    )
}

export default Tests;
