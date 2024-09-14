import React, { useState } from "react";

const Address_Info = ({ onSubmit, prevStep }) => {
  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.addressLine1)
      errors.addressLine1 = "Address Line 1 is required";
    if (!formData.addressLine2)
      errors.addressLine2 = "Address Line 2 is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.pinCode) errors.pinCode = "Pincode is required";

    // Add other validations here
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

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
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="addressLine1"
                  placeholder="Address Line 1"
                  value={formData.addressLine1}
                  onChange={handleChange}
                />
                {formErrors.addressLine1 && (
                  <small className="form-text text-danger">
                    {formErrors.addressLine1}
                  </small>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="addressLine2"
                  placeholder="Address Line 2"
                  value={formData.addressLine2}
                  onChange={handleChange}
                />
                {formErrors.addressLine2 && (
                  <small className="form-text text-danger">
                    {formErrors.addressLine2}
                  </small>
                )}
              </div>

              <div className="col-md-6 mb-4">
                <select className="form-control" id="city" value={formData.city} onChange={handleChange}>
                  <option value="">Choose City...</option>
                  <option value="city1"> City1</option>
                  <option value="city2"> City2</option>
                  <option value="city3"> City3</option>
                  {/* Add city options here */}
                </select>
                {formErrors.city && (
                  <small className="form-text text-danger">
                    {formErrors.city}
                  </small>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <select className="form-control" id="state" value={formData.state} onChange={handleChange}>
                  <option value="">Choose State...</option>
                  <option value="state1"> State1</option>
                  <option value="state2"> State2</option>
                  <option value="state1"> State3</option>
                  {/* Add state options here */}
                </select>
                {formErrors.state && (
                  <small className="form-text text-danger">
                    {formErrors.state}
                  </small>
                )}
              </div>

              <div className="col-md-6 mb-4">
                <select className="form-control" id="country" value={formData.country} onChange={handleChange}>
                  <option value="">Choose Country...</option>
                  <option value="country1"> Country1</option>
                  <option value="country2"> Country2</option>
                  <option value="country3"> Country3</option>

                  {/* Add country options here */}
                </select>
                {formErrors.country && (
                  <small className="form-text text-danger">
                    {formErrors.country}
                  </small>
                )}
              </div>
              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="pinCode"
                  placeholder="Pin Code"
                  value={formData.pinCode}
                  onChange={handleChange}
                />
                {formErrors.pinCode && (
                  <small className="form-text text-danger">
                    {formErrors.pinCode}
                  </small>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="row">
              <div className="col-md-1 mb-4">
                <button
                  type="button"
                  className="btn btn-secondary rounded-0"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
              <div className="col-md-1 mb-4">
                <button type="submit" className="btn btn-primary rounded-0">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Address_Info;
