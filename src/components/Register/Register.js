import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNo: '',
        gender: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <div>
            <h2 className='title pb-2'>Registration Form</h2>
            {/* <div className='col-12 col-md-8 col-lg-6 col-xl-5'> */}
                <div className='container text-center bg-primary py-5'>
                <form onSubmit={handleSubmit}>
                    <div className="d-sm-inline-flex ">
                        <label htmlFor="name" className="form-mb-4"></label>
                        <input type="text" className="form-control mx-5" id="name" name="name" placeholder='Firstname' value={formData.firstname} onChange={handleChange} required />
                    </div>
                    <div className="d-sm-inline-flex  ">
                        <label htmlFor="name" className="form-mb-4"></label>
                        <input type="text" className="form-control mx-5" id="name" name="name" placeholder='Lastname' value={formData.lastname} onChange={handleChange} required />
                    </div>
                    <br></br>
                    <div className="d-sm-inline-flex ">
                        <label htmlFor="email" className="form-mb-4"></label>
                        <input type="email" className="form-control mx-5" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="d-sm-inline-flex ">
                        <label htmlFor="contactNo" className="form-mb-4"></label>
                        <input type="text" className="form-control mx-5" id="contactNo" name="contactNo" placeholder='Contact' value={formData.contactNo} onChange={handleChange} required />
                    </div>
                    <br></br>
                    <div className="d-sm-inline-flex ">
                        <label htmlFor="name" className="form-mb-4"></label>
                        <input type="text" className="form-control" id="name" name="name" placeholder='Address' value={formData.address} onChange={handleChange} required />
                    </div>
                    <br></br>
                    <div className="d-sm-inline-flex ">
                        <label className="form-label"><b>Gender</b></label>
                        <div className="form-check ">
                            <input className="form-check-input" type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
                            <label className="form-check-label" htmlFor="male">
                                <b>Male</b>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
                            <label className="form-check-label" htmlFor="female">
                                <b>Female</b>
                            </label>
                        </div>
                    </div>
                    <br></br>
                    <div className="d-sm-inline-flex">
                        <label htmlFor="password" className="form-mb-5"></label>
                        <input type="password" className="form-control" id="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-success">Register</button>
                </form>
            </div>
            </div>
        // </div>
    );
};

export default Register;
