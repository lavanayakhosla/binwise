import React from "react";
import "./ScrapDealerFrom.css"; // Import the CSS file
import  toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { createAccount } from '../Redux/Slices/ProductSlice';
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react'


const ScrapDealerForm = () => {

  
  console.log(import.meta.env)
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const [signupstate,setsignupstate]= useState({
      name:'',
      assignedZone:'',
      photo:'',
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
  async function handlesubmit(e){
      e.preventDefault();
      console.log(signupstate)


      if(!signupstate.email || !signupstate.mobilenumber || !signupstate.password || !signupstate.firstName) {
          toast.error("Missing values from the form")
          return;
      }

      if(signupstate.mobilenumber.length<10) {
          toast.error("Mobile number should be atleast 10 character long")
             return 
      }
      if(signupstate.firstName.length<5) {
          toast.error("First Name should be atleast 5 character long")
             return 
      }
      
      if(!signupstate.email.includes('@') || !signupstate.email.includes('.')) {
          toast.error("Invalid email address")
          return;
      }
          
      const apiresponse= await dispatch(createAccount(signupstate));
          if(apiresponse.payload.data.success){
              navigate('/auth/login');
          }

      console.log(apiresponse)
  }


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
