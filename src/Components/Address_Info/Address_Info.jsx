import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

const Address_Info = ({ onSubmit, prevStep,formData: initialData, nextStep }) => {
  const [formData, setFormData] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

      // Populate the form with initial data (from previous step)
      useEffect(() => {
        if (initialData) {
          setFormData(initialData);
        }
      }, [initialData]);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (formData.country) {
      const countryStates = State.getStatesOfCountry(formData.country);
      setStates(countryStates);
      setCities([]); // Reset cities when country changes
    }
  }, [formData.country]);

  // Load cities when state changes
  useEffect(() => {
    if (formData.state) {
      const stateCities = City.getCitiesOfState(formData.country, formData.state);
      setCities(stateCities);
    }
  }, [formData.state]);

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
                  // className="form-control"
                  className={`form-control ${formErrors.addressLine1 ? 'error' : ''}`}
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
                  // className="form-control"
                  className={`form-control ${formErrors.addressLine2 ? 'error' : ''}`}
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
              <select 
                // className="form-control"
                className={`form-control ${formErrors.country ? 'error' : ''}`}
                id="country" 
                value={formData.country} 
                onChange={handleChange}>
                <option value="">Choose Country...</option>
                {countries.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
              {formErrors.country && (
                <small className="form-text text-danger">
                  {formErrors.country}
                </small>
              )}
            </div>

            <div className="col-md-6 mb-4">
              <select
              //  className="form-control" 
              className={`form-control ${formErrors.state ? 'error' : ''}`}
               id="state" 
               value={formData.state} 
               onChange={handleChange}>
                <option value="">Choose State...</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
              {formErrors.state && (
                <small className="form-text text-danger">
                  {formErrors.state}
                </small>
              )}
            </div>

            <div className="col-md-6 mb-4">
              <select 
              // className="form-control" 
              className={`form-control ${formErrors.city ? 'error' : ''}`}
              id="city" 
              value={formData.city} 
              onChange={handleChange}>
                <option value="">Choose City...</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {formErrors.city && (
                <small className="form-text text-danger">
                  {formErrors.city}
                </small>
              )}
            </div>

              <div className="col-md-6 mb-4">
                <input
                  type="text"
                  // className="form-control"
                  className={`form-control ${formErrors.pinCode ? 'error' : ''}`}
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
              <div className="col-md-2 col-3 col-lg-1 mb-4">
                <button
                  type="button"
                  className="btn btn-secondary rounded-0"
                  onClick={prevStep}
                >
                  Back
                </button>
              </div>
              <div className="col-md-2 col-3 col-lg-1 mb-4">
                <button type="submit" className="btn btn-primary rounded-0" onClick={nextStep}>
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
