import { useState } from "react";
import "./BuyScrap.css"

const ScrapForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    municipality: "",
    scrapType: "",
    quantity: 1
  });

  const scrapOptions = ["Plastic", "Metal", "Glass", "Paper", "E-Waste"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const increaseQuantity = () => {
    setFormData({ ...formData, quantity: formData.quantity + 1 });
  };

  const decreaseQuantity = () => {
    if (formData.quantity > 1) {
      setFormData({ ...formData, quantity: formData.quantity - 1 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="container">
      <h2 className="heading">Buy Scrap Materials</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" className="input-field" value={formData.name} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Enter your phone" className="input-field" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="state" placeholder="Enter your state" className="input-field" value={formData.state} onChange={handleChange} required />
        <input type="text" name="district" placeholder="Enter your district" className="input-field" value={formData.district} onChange={handleChange} required />
        <input type="text" name="municipality" placeholder="Enter your municipality" className="input-field" value={formData.municipality} onChange={handleChange} required />

        {/* Scrap Type Dropdown */}
        <select name="scrapType" className="input-field" value={formData.scrapType} onChange={handleChange} required>
          <option value="">Select Scrap Type</option>
          {scrapOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        {/* Quantity Selector */}
        <div className="quantity-container">
          <button type="button" className="quantity-btn" onClick={decreaseQuantity}>−</button>
          <input type="text" name="quantity" className="quantity-input" value={formData.quantity} readOnly />
          <button type="button" className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>

        <div></div><button type="submit" className="submit-btn">Place your order</button>
      </form>
    </div>
  );
};

export default ScrapForm;
