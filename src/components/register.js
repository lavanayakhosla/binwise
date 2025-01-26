import React, { useState } from "react";
import "./register.css";

const DealerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    scrapType: "",
    zone: "",
    aadhar: null,
    safetyGear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, aadhar: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic (API calls, etc.)
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
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type of Scrap</label>
          <input
            type="text"
            name="scrapType"
            placeholder="Enter Type of Scrap Material (Plastic/Paper/Metal)"
            value={formData.scrapType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Assigned Zone</label>
          <input
            type="text"
            name="zone"
            placeholder="Enter Assigned zone"
            value={formData.zone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Upload Aadhar Card</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div className="form-group">
          <label>Do you have issued safety gear?</label>
          <input
            type="text"
            name="safetyGear"
            placeholder="Yes/No"
            value={formData.safetyGear}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default DealerRegistrationForm;
