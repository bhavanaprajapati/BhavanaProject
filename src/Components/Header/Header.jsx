import React, { useState } from "react";
import User_Info from "../User_Info/User_Info";
import Address_Info from "../Address_Info/Address_Info";
import Thank_you from "../Thank_you/Thank_you";
import HeaderCss from "../Header/Header.css";

const Header = () => {
  const [step, setStep] = useState(1); // To track the current step
  const [userData, setUserData] = useState({}); // Store User Info
  const [addressData, setAddressData] = useState({}); // Store Address Info

  // Move to the next step
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };
  // Function to handle User Info data submission
  const handleUserInfoSubmit = (data) => {
    setUserData(data);
    nextStep();
  };

  // Function to handle Address Info data submission
  const handleAddressDetailsSubmit = (data) => {
    setAddressData(data);
    nextStep();
  };
  return (
    <>
      <div className="container mt-5">
      <div className="stepper">
        <div
          className={`step ${step > 1 ? "completed" : ""} ${step === 1 ? "active" : ""}`}
          onClick={() => setStep(1)}
        >
          <div className="circle">{step > 1 ? "✓" : "1"}</div>
          <div className="label">User Information</div>
        </div>
        <div className="line"></div>
        <div
          className={`step ${step > 2 ? "completed" : ""} ${step === 2 ? "active" : ""}`}
          onClick={() => setStep(2)}
        >
          <div className="circle">{step > 2 ? "✓" : "2"}</div>
          <div className="label">Address Details</div>
        </div>
        <div className="line"></div>
        <div
          className={`step ${step === 3 ? "active" : ""}`}
          onClick={() => setStep(3)}
        >
          <div className="circle">3</div>
          <div className="label">Thank You</div>
        </div>
      </div>

        {step === 1 && <User_Info  initialData={userData} onSubmit={handleUserInfoSubmit} />}
        {step === 2 && (
          <Address_Info
            onSubmit={handleAddressDetailsSubmit}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <Thank_you userData={userData} addressData={addressData} />
        )}
      </div>
    </>
  );
};

export default Header;
