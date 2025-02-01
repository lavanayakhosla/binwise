import React, { useState } from "react";
import "./Registered_as_scrap_dealer.css";

export default function ScrapDealerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    typeOfScrap: "",
    assignedZone: "",
    aadharCard: null,
    safetyGear: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
  

      <div className="form-container">
        <h2>Become a Registered Scrap Dealer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your Address"
            />
          </div>

          <div className="form-group">
            <label>Type of Scrap</label>
            <input
              type="text"
              name="typeOfScrap"
              value={formData.typeOfScrap}
              onChange={handleChange}
              placeholder="Enter Type of Scrap Material (Plastic/Paper/Metal)"
            />
          </div>

          <div className="form-group">
            <label>Assigned Zone</label>
            <input
              type="text"
              name="assignedZone"
              value={formData.assignedZone}
              onChange={handleChange}
              placeholder="Enter Assigned Zone"
            />
          </div>

          <div className="form-group">
            <label>Upload Aadhar Card</label>
            <input
              type="file"
              name="aadharCard"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Do you have issued safety gear?</label>
            <input
              type="text"
              name="safetyGear"
              value={formData.safetyGear}
              onChange={handleChange}
              placeholder="Yes/No"
            />
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
   
  );
}
