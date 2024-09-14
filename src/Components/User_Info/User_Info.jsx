import React, { useState } from 'react';

const User_Info = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    birthday: '',
    age: '',
    bloodGroup: '',
    height: '',
    weight: '',
    gender: '',
    maritalStatus: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Validate form fields
  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "FirstName is a required field";
    if (!formData.middleName) errors.middleName = "MiddleName is a required field";
    if (!formData.lastName) errors.lastName = "LastName is a required field";
    if (!formData.mobileNo) errors.mobileNo = "MobileNo is a required field";
    if (!formData.email) errors.email = "Email is a required field";
    if (!formData.birthday) errors.birthday = "Birthday is a required field";
    if (!formData.age) errors.age = "Age is a required field";
    if (!formData.bloodGroup) errors.bloodGroup = "BloodGroup is a required field";
    if (!formData.height) errors.height = "Height is a required field";
    if (!formData.weight) errors.weight = "Weight is a required field";
    if (!formData.gender) errors.gender = "Gender is a required field";
    if (!formData.maritalStatus) errors.maritalStatus = "Marital Status is a required field";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };


  return (
    <>
      <section>
        <div className="container">
          <form  onSubmit={handleSubmit}>
            <div className="row">
              {/* First Name */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstName" 
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {formErrors.firstName && <small className="form-text text-danger">{formErrors.firstName}</small>}
                </div>
              </div>

              {/* Middle Name */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="middleName" 
                    placeholder="Middle name"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                  {formErrors.middleName && <small className="form-text text-danger">{formErrors.middleName}</small>}
                </div>
              </div>

              {/* Last Name */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastName" 
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {formErrors.lastName && <small className="form-text text-danger">{formErrors.lastName}</small>}
                </div>
              </div>

              {/* Mobile No */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="tel" 
                    className="form-control" 
                    id="mobileNo" 
                    placeholder="Mobile No"
                    value={formData.mobileNo}
                    onChange={handleChange}
                  />
                  {formErrors.mobileNo && <small className="form-text text-danger">{formErrors.mobileNo}</small>}
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && <small className="form-text text-danger">{formErrors.email}</small>}
                </div>
              </div>

              {/* Birthday */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="date" 
                    className="form-control" 
                    id="birthday"
                    value={formData.birthday}
                    onChange={handleChange}
                  />
                  {formErrors.birthday && <small className="form-text text-danger">{formErrors.birthday}</small>}
                </div>
              </div>

              {/* Age */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="number" 
                    className="form-control" 
                    id="age" 
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  {formErrors.age && <small className="form-text text-danger">{formErrors.age}</small>}
                </div>
              </div>

              {/* Blood Group */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <select 
                    className="form-control" 
                    id="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  >
                    <option value="">---Choose Blood Group---</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O+">O+</option>
                    <option value="AB+">AB+</option>
                  </select>
                  {formErrors.bloodGroup && <small className="form-text text-danger">{formErrors.bloodGroup}</small>}
                </div>
              </div>

              {/* Height */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="height" 
                    placeholder="Height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                  {formErrors.height && <small className="form-text text-danger">{formErrors.height}</small>}
                </div>
              </div>

              {/* Weight */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="weight" 
                    placeholder="Weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                  {formErrors.weight && <small className="form-text text-danger">{formErrors.weight}</small>}
                </div>
              </div>

              {/* Gender */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <select 
                    className="form-control" 
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">---Choose Gender---</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.gender && <small className="form-text text-danger">{formErrors.gender}</small>}
                </div>
              </div>

              {/* Marital Status */}
              <div className="col-md-6 mb-4">
                <div className="form-group">
                  <select 
                    className="form-control" 
                    id="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                  >
                    <option value="">---Choose Marital Status---</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                  {formErrors.maritalStatus && <small className="form-text text-danger">{formErrors.maritalStatus}</small>}
                </div>
              </div>

              <div className="col-md-1 mb-4">
                <button type="submit" className="btn btn-secondary rounded-0">Prev</button>
              </div>
              <div className="col-md-1 mb-4">
                <button type="submit" className="btn btn-primary rounded-0">Next</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default User_Info;
