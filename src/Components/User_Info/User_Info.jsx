import React, { useState, useEffect } from 'react';
import UserInfoCss from '../User_Info/User_Info.css'

const User_Info = ({ onSubmit, formData: initialData, prevStep }) => {
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

    // Populate the form with initial data (from previous step)
    useEffect(() => {
      if (initialData) {
        setFormData(initialData);
      }
    }, [initialData]);

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

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [id]: value }));
  // };

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({ ...prevData, [name]: value }));  // For radio buttons
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
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
                    // className="form-control" 
                    className={`form-control ${formErrors.firstName ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.middleName ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.lastName ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.mobileNo ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.email ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.birthday ? 'error' : ''}`}
                    id="birthday"
                    placeholder="Birthdate"
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
                    // className="form-control" 
                    className={`form-control ${formErrors.age ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.bloodGroup ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.height ? 'error' : ''}`}
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
                    // className="form-control" 
                    className={`form-control ${formErrors.weight ? 'error' : ''}`}
                    id="weight" 
                    placeholder="Weight"
                    value={formData.weight}
                    onChange={handleChange}
                  />
                  {formErrors.weight && <small className="form-text text-danger">{formErrors.weight}</small>}
                </div>
              </div>

                {/* Gender Radio Buttons */}
                <div className="col-md-6 mb-4">
                <label>Gender</label>
                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="genderMale" 
                    name="gender" 
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderMale">Male</label>
                </div>
                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="genderFemale" 
                    name="gender" 
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderFemale">Female</label>
                </div>
                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="genderOther" 
                    name="gender" 
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="genderOther">Other</label>
                </div>
                {formErrors.gender && <small className="form-text text-danger">{formErrors.gender}</small>}
              </div>

              {/* Marital Status Radio Buttons */}
              <div className="col-md-6 mb-4">
                <label>Marital Status</label>
                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="single" 
                    name="maritalStatus" 
                    value="single"
                    checked={formData.maritalStatus === 'single'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="single">Single</label>
                </div>
                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="married" 
                    name="maritalStatus" 
                    value="married"
                    checked={formData.maritalStatus === 'married'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="married">Married</label>
                </div>
                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="divorced" 
                    name="maritalStatus" 
                    value="divorced"
                    checked={formData.maritalStatus === 'divorced'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="divorced">Divorced</label>
                </div>
                <div className="form-check">
                  <input 
                    type="radio" 
                    className="form-check-input" 
                    id="widowed" 
                    name="maritalStatus" 
                    value="widowed"
                    checked={formData.maritalStatus === 'widowed'}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="widowed">Widowed</label>
                </div>
                {formErrors.maritalStatus && <small className="form-text text-danger">{formErrors.maritalStatus}</small>}
              </div>

              <div className="col-md-2 col-3 col-lg-1 mb-4">
                <button type="button" className="btn btn-secondary rounded-0" onClick={prevStep}>Prev</button>
              </div>
              <div className="col-md-2 col-3 col-lg-1 mb-4">
                <button type="submit" className="btn btn-primary rounded-0"  >Next</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default User_Info;
