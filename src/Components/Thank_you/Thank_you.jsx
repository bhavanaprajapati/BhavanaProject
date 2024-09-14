import React from "react";

const Thank_you = ({ userData, addressData }) => {
  return (
    <>
    <h2 className="text-success mb-3">User Added Successfully</h2>
      <table className="table table-bordered table-striped table-responsive">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              {userData.firstName} {userData.middleName} {userData.lastName}
            </td>
          </tr>
          <tr>
            <td>First Name</td>
            <td>{userData.firstName}</td>
          </tr>
          <tr>
            <td>Middle Name</td>
            <td>{userData.middleName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{userData.lastName}</td>
          </tr>
          <tr>
            <td>Mobile No</td>
            <td>{userData.mobileNo}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <td>Birthday</td>
            <td>{userData.birthday}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{userData.age}</td>
          </tr>
          <tr>
            <td>Blood Group</td>
            <td>{userData.bloodGroup}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{userData.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{userData.weight}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              {userData.gender}
            </td>
          </tr>
          <tr>
            <td>Marital Status</td>
            <td>{userData.maritalStatus}</td>
          </tr>
          <tr>
            <td>Address Line 1</td>
            <td>{addressData.addressLine1}</td>
          </tr>
          <tr>
            <td>Address Line 2</td>
            <td>{addressData.addressLine2}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{addressData.city}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{addressData.state}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{addressData.country}</td>
          </tr>
          <tr>
            <td>Pincode</td>
            <td>{addressData.pinCode}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Thank_you;
