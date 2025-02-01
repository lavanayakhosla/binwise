import React from "react";
import "./Muncipality.css"; // Importing CSS

const SchedulePickup = () => {
  return (
    <div className="pickup-container">
      <h2 className="section-title">Schedule Pickup from Home /Business</h2>
      <form className="pickup-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your Phone Number" />

        <label>Address</label>
        <input type="text" placeholder="Enter your Address" />

        <label>Type of Scrap</label>
        <input type="text" placeholder="Enter Type of Scrap Material (Plastic/Paper/Metal)" />

        <label>Comfortable Time of Pickup</label>
        <input type="datetime-local" />

        <button type="submit">Schedule Pickup</button>
      </form>
    </div>
  );
};

export default SchedulePickup;