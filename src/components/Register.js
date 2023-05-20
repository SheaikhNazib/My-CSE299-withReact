import React from 'react'

function Register() {
  return (
    <section className="Form my-4 mx-auto login-body ">
        <div className="container container-sm login-bg">
            <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-lg-5 col-md-6">
                    <img src="images/login_bg.png" className="img-fluid" alt="" />
                </div>

                <div className="col-lg-7 col-md-6 px-5 pt-5">
                    <h2 className="mx-auto">Signup here</h2>
                    <form>
                        <div className="form-row">
                            <p className="my-0">First name</p>
                            <div className="col-lg-7">
                                <input type="text" placeholder="First name" className="form-control my-1 p-1" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <p className="my-0">Last name</p>
                            <div className="col-lg-7">
                                <input type="text" placeholder="Last name" className="form-control my-1 p-1" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <p className="my-0">Address</p>
                            <div className="col-lg-7">
                                <input type="text" placeholder="Basundhara R/A" className="form-control my-1 p-1" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <p className="my-0">Email</p>
                            <div className="col-lg-7">
                                <input type="email" placeholder="-------------@gmail.com" className="form-control my-1 p-1"
                                    required />
                            </div>
                        </div>

                        <div className="form-row">
                            <p className="my-0">Phone number</p>
                            <div className="col-lg-7">
                                <input type="number" placeholder="01*********" className="form-control my-1 p-1"
                                    required />
                            </div>
                        </div>

                        <div className="form-row">
                            <p className="my-0">password</p>
                            <div className="col-lg-7">
                                <input type="password" placeholder="******" className="form-control my-1 p-1" required />
                            </div>
                        </div>

                        <div className="d-grid gap-2 col-lg-7 my-3">
                            <button className="btn btn-danger px-5 p-3 mb-2" type="button">Signup</button>
                        </div>

                        <p>Already have an account? <a href="login">Login here</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register
