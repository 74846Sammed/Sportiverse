import React, { useState } from 'react';

const Loginform = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '' 
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
    if (formData.email && formData.password) {
      // Perform login action (e.g., API call)
      console.log('Form submitted:', formData);
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div>
      <section className="vh-40 gradient-custom">
        <div className="container-fluid  h-40">
          <div className="row d-flex justify-content-center align-items-center h-30">
            <div className="col-12 col-md-6 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">

                  <div className="mb-md-4 mt-md-4 pb-4"> {/* Reduced bottom margin */}
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-4">Please enter your Email and password!</p> {/* Reduced bottom margin */}

                    <div className="form-outline form-white mb-3"> {/* Reduced bottom margin */}
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" name="email" value={formData.email} onChange={handleChange} />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-3"> {/* Reduced bottom margin */}
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" name="password" value={formData.password} onChange={handleChange} />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>

                    <div className="form-check form-check-inline mb-3"> {/* Reduced bottom margin */}
                      <input className="form-check-input" type="radio" name="role" id="userRadio" value="user" checked={formData.role === 'user'} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="userRadio">User</label>
                    </div>

                    <div className="form-check form-check-inline mb-3"> {/* Reduced bottom margin */}
                      <input className="form-check-input" type="radio" name="role" id="coachRadio" value="coach" checked={formData.role === 'coach'} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="coachRadio">Coach</label>
                    </div>

                    <p className="small mb-2 pb-2"><a className="text-white-50" href="#!">Forgot password?</a></p> {/* Reduced bottom margin */}

                    <button className="btn btn-outline-light btn-lg px-5 " type="submit" onClick={handleSubmit}>Login</button>
                  </div>
                  <div>
                    <p className="mb-2">Don't have an account? <a href="/registerform" className="text-white-50 fw-bold">Sign Up</a>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Loginform;
