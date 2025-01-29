import React from "react";
import "./ScrapDealerFrom.css"; // Import the CSS file

const ScrapDealerForm = () => {
  return (
    <div className="container">
      <h2 className="form-title">Become a Registered Scrap Dealer</h2>
      <form className="scrap-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Phone Number</label>
        <input type="text" placeholder="Enter your Phone Number" />

        <label>Address</label>
        <input type="text" placeholder="Enter your Address" />

        <label>Type of Scrap</label>
        <input type="text" placeholder="Enter Type of Scrap Material (Plastic/Paper/Metal)" />

        <label>Assigned Zone</label>
        <input type="text" placeholder="Enter Assigned Zone" />

        <label>Upload Aadhar Card</label>
        <input type="file" />

        <label>Do you have issued safety gear?</label>
        <input type="text" placeholder="Yes/No" />

        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default ScrapDealerForm;
