import React from 'react'

function Login() {
    return (
        <>
            <body className='login-body'>
                <section className="Form my-4 mx-auto">
                    <div className="container container-sm">
                        <div className="row justify-content-center align-items-center login-bg" style={{ height: '100vh' }}>
                            <div className="col-lg-5 col-md-6">
                                <img src="images/login_bg.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-7 col-md-6 px-5 pt-5">
                                <h1>Login Here</h1>
                                <h4 className="my-2">Sign into your account</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="email" placeholder="Enter Email Address" className="form-control my-3 p-3" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input type="password" placeholder="Enter Password" className="form-control my-3 p-3" />
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2 col-lg-7">
                                        <button className="btn btn-danger px-5 p-3 mb-2" type="button">Login</button>
                                    </div>

                                    <a href="#">Forgot password?</a>
                                    <p>Don't have an account? <a href="register">Register here</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

export default Login
