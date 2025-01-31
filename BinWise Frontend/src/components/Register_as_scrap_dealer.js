import React from "react";
import "./ScrapDealerFrom.css"; // Import the CSS file
import  toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { createAccount } from '../Redux/Slices/AuthSlice';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react'


const ScrapDealerForm = () => {

  
//   console.log(import.meta.env)
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const [signupstate,setsignupstate]= useState({
      name:'',
      assignedZone:'',
      photo:null,
      typeofscrap:'',
      status:'',
      safetyGearIssued:true,
      phone:'',
      address:''
  })
  function handleinput(e){
      const {name,value}=e.target;
      setsignupstate({
          ...signupstate,
          [name]:value
      })
  }
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setsignupstate(prevState => ({
        ...prevState,
        photo: file
      }));
    }
  }
  
  async function handlesubmit(e){
      e.preventDefault();
      console.log(signupstate)


      if( !signupstate.phone || !signupstate.name || !signupstate.assignedZone  || !signupstate.address) {
          toast.error("Missing values from the form")
          return;
      }

      if(signupstate.phone.length<10) {
          toast.error("Mobile number should be atleast 10 character long")
             return 
      }


      const formData = new FormData();
    formData.append("name", signupstate.name);
    formData.append("assignedZone", signupstate.assignedZone);
    formData.append("status", signupstate.status);
    formData.append("safetyGearIssued", signupstate.safetyGearIssued);
    formData.append("phone", signupstate.phone);
    formData.append("address", signupstate.address);
    formData.append("photo", signupstate.photo); // Append file
    formData.append("typeofscrap", signupstate.typeofscrap); // Append file
      
    console.log("signup state",signupstate)
    console.log("form data",formData)
      
          
      const apiresponse= await dispatch(createAccount(formData));
          if(apiresponse.payload.data.success){
              navigate('/ScrapRates');
          }

      console.log("api response is",apiresponse)
  }


  return (
    <div className="continer">
      
      <form className="scrap-form">
      <h2 className="form-title">Become a Registered Scrap Dealer</h2>
        <label>Name</label>
        <input type="text" name="name" onChange={handleinput} required placeholder="Enter your name" />

        <label>Phone Number</label>
        <input type='tel' name="phone" onChange={handleinput} placeholder="Enter your Phone Number" />

        <label>Address</label>
        <input type="text" name="address" onChange={handleinput} placeholder="Enter your Address" />

        <label>Type of Scrap</label>
        <input type="text" name="typeofscrap" required onChange={handleinput} placeholder="Enter Type of Scrap Material (Plastic/Paper/Metal)" />

        <label>Assigned Zone</label>
        <input type="text" name="assignedZone" required onChange={handleinput} placeholder="Enter Assigned Zone" />

        <label>Upload Aadhar Card</label>
        <input type="file" name="photo" onChange={handleFileChange} accept="image/*" required />

        <label>Do you have issued safety gear?</label>
        <input type="text" name="safetyGearIssued" required onChange={handleinput} placeholder="Yes/No" />

        <button type="submit" onClick={handlesubmit} className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default ScrapDealerForm;
