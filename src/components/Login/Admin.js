import React, { useState } from 'react';

const Admin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        let formIsValid = true;
        const newErrors = {
            email: '',
            password: ''
        };

        if (!formData.email) {
            newErrors.email = 'Email is required';
            formIsValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
            formIsValid = false;
        }

        setErrors(newErrors);

        if (formIsValid) {
            // Submit the form
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div>
            <section className="vh-100" style={{backgroundColor:'darkgray'}}>
                <div className="container-fluid py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong">
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Login</h3>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="typeEmailX-2"
                                            className={`form-control form-control-lg ${errors.email && 'is-invalid'}`}
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="typePasswordX-2"
                                            className={`form-control form-control-lg ${errors.password && 'is-invalid'}`}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                    </div>


                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="form1Example3"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                                    </div>

                                    <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>Login</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Admin;
