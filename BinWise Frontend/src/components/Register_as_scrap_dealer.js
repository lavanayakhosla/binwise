import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createAccount } from "../Redux/Slices/ProductSlice";
import "./ScrapDealerForm.css"; // Corrected file import

const ScrapDealerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState("");

  const [signupState, setSignupState] = useState({
    name: "",
    assignedZone: "",
    photo: null,
    typeofscrap: "",
    status: "",
    safetyGearIssued: "Yes",
    phone: "",
    address: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSignupState((prevState) => ({
        ...prevState,
        photo: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!signupState.phone || !signupState.name || !signupState.assignedZone || !signupState.address) {
      toast.error("Missing values from the form");
      return;
    }

    if (signupState.phone.length < 10) {
      toast.error("Mobile number should be at least 10 characters long");
      return;
    }

    // Create FormData for API submission
    const formData = new FormData();
    Object.keys(signupState).forEach((key) => {
      if (signupState[key]) {
        formData.append(key, signupState[key]);
      }
    });

    try {
      const apiResponse = await dispatch(createAccount(formData));
      if (apiResponse.payload?.data?.success) {
        navigate("/ScrapRates");
      }
    } catch (error) {
      toast.error("Failed to register. Please try again.");
    }
  };

  const formTitles = {
    scrapdealer: "Become a Registered Scrap Dealer",
    municipality: "Register as a Municipality",
    homebusiness: "Register as a Business/Home",
  };

  const renderRegisterForm = () => (
    <div className="container">
      <form className="scrap-form" onSubmit={handleSubmit}>
        <h2 className="form-title">{formTitles[selectedRole] || "Become a Registered User"}</h2>

        <label>Name</label>
        <input type="text" name="name" onChange={handleInput} required placeholder="Enter your name" />

        <label>Phone Number</label>
        <input type="tel" name="phone" onChange={handleInput} placeholder="Enter your Phone Number" />

        <label>Address</label>
        <input type="text" name="address" onChange={handleInput} placeholder="Enter your Address" />

        <label>Type of Scrap</label>
        <input type="text" name="typeofscrap" required onChange={handleInput} placeholder="Enter Scrap Material (Plastic/Paper/Metal)" />

        <label>Assigned Zone</label>
        <input type="text" name="assignedZone" required onChange={handleInput} placeholder="Enter Assigned Zone" />

        <label>Upload Aadhar Card</label>
        <input type="file" name="photo" onChange={handleFileChange} accept="image/*" required />

        <label>Do you have issued safety gear?</label>
        <select name="safetyGearIssued" required onChange={handleInput}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );

  return <div>{renderRegisterForm()}</div>;
};

export default ScrapDealerForm;
