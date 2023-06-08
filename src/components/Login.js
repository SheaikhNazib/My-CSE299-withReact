import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email and password match your criteria for authentication
        if (email === 'sheaikh.rahman@northsouth.edu' && password === 'nazib') {
            // Redirect to the dashboard page
            window.location.href = '/dashboard';
        } 
        else if (email === 'admin@gmail.com' && password === 'admin') {
            // Redirect to the dashboard page
            window.location.href = '/admin';
        } 
        else {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <body className="login-body">
                <section className="Form my-4 mx-auto">
                    <div className="container container-sm">
                        <div
                            className="row justify-content-center align-items-center login-bg"
                            style={{ height: '100vh' }}
                        >
                            <div className="col-lg-5 col-md-6">
                                <img src="images/login_bg.png" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-7 col-md-6 px-5 pt-5">
                                <h1>Login Here</h1>
                                <h4 className="my-2">Sign into your account</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input
                                                type="email"
                                                placeholder="Enter Email Address"
                                                className="form-control my-3 p-3"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-lg-7">
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                className="form-control my-3 p-3"
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="d-grid gap-2 col-lg-7">
                                        <button className="btn btn-danger px-5 p-3 mb-2" type="submit">
                                            Login
                                        </button>
                                    </div>

                                    {error && <p className="text-danger">{error}</p>}

                                    <a href="#">Forgot password?</a>
                                    <p>
                                        Don't have an account? <a href="register">Register here</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}

export default Login;
