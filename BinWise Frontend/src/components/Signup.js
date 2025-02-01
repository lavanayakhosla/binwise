import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createAccount } from '../Redux/Slices/ProductSlice';
 
import "./signup.css"; // Import the CSS file
 
import Registerashome from './Register_as_home';
import RegisterAsMunicipality from './Register_as_municipality';
import "./signup.css"
import "./Registered_as_scrap_dealer.css"; 

const ScrapDealerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState("");
  const [signupstate, setsignupstate] = useState({
    name: '',
    email: '',
    phone: '',
    typeofscrap: '',
    password: '',
    photo: null,
  });


  function handleInput(e) {
    const { name, value } = e.target;
    setsignupstate({
      ...signupstate,
      [name]: value,
    });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setsignupstate((prevState) => ({
        ...prevState,
        photo: file,
      }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!signupstate.name || !signupstate.email || !signupstate.phone || !signupstate.typeofscrap || !signupstate.password || !signupstate.photo) {
      toast.error("Missing values from the form");
      return;
    }

    if (signupstate.phone.length < 10) {
      toast.error("Mobile number should be at least 10 characters long");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(signupstate.password)) {
      toast.error("Password must be at least 6 characters long, include one uppercase letter, one number, and one special character");
      return;
    }

    const formData = new FormData();
    formData.append("name", signupstate.name);
    formData.append("email", signupstate.email);
    formData.append("phone", signupstate.phone);
    formData.append("typeofscrap", signupstate.typeofscrap);
    formData.append("password", signupstate.password);
    formData.append("photo", signupstate.photo);

    const apiresponse = await dispatch(createAccount(formData));
    if (apiresponse.payload.data.success) {
      navigate('/ScrapRates');
    }
  }

  const handleRegisterClick = (role) => {
    setSelectedRole(role);
  };

  const renderRegisterForm = () => {
    switch (selectedRole) {
      case "scrapdealer":
        return (
          
            <form className="scrap-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Become a Registered Scrap Dealer</h2>
              
              <label>Profile Picture</label>
              <input type="file" name="photo" onChange={handleFileChange} accept="image/*" required />
              
              <label>Name</label>
              <input type="text" name="name" onChange={handleInput} required placeholder="Enter your name" />
              
              <label>Email</label>
              <input type="email" name="email" onChange={handleInput} required placeholder="Enter your email" />
              
              <label>Phone Number</label>
              <input type="tel" name="phone" onChange={handleInput} required placeholder="Enter your phone number" />
              
              <label>Type of Scrap</label>
              <input type="text" name="typeofscrap" onChange={handleInput} required placeholder="Enter Type of Scrap Material (Plastic/Paper/Metal)" />
              
              <label>Password</label>
              <input type="password" name="password" onChange={handleInput} required placeholder="Enter your password" />
              
              <button type="submit" className="register-btn">Register</button>
            </form>
          
        );
      case "municipality":
        return <RegisterAsMunicipality />;
      case "homebusiness":
        return <Registerashome />;
      default:
        return (
          <div className="all-optns">
            <h2>Select Your Role to Register</h2>
            <button className="select-btn" onClick={() => handleRegisterClick("scrapdealer")}>
              Scrap Dealer
            </button>
            <button className="select-btn" onClick={() => handleRegisterClick("municipality")}>
              Municipality Office
            </button>
            <button className="select-btn" onClick={() => handleRegisterClick("homebusiness")}>
              Home/Business
            </button>
          </div>
        );
    }
  };

  return <div>{renderRegisterForm()}</div>;
};

export default ScrapDealerForm;
