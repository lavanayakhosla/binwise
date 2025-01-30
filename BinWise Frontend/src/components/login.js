import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import {login} from '../Redux/Slices/AuthSlice'
import { Link } from "react-router-dom";
import "./login.css"

const Login = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [selectedRole, setSelectedRole] = useState("");

  const [loginData,setloginData] = useState({
    email:'',
    password:''
})

function handleinput(e){
        const {name,value}=e.target;
        setloginData({
            ...loginData,
            [name]:value,
        })
}
async function handlesubmit(e){
   e.preventDefault();
   console.log(loginData)


   if(!loginData.email  || !loginData.password ) {
    toast.error("Missing values from the form")
    return;
}
   if(!loginData.email.includes('@') || !loginData.email.includes('.')) {
    toast.error("Invalid email address")
    return;
}

const apiresponse = await dispatch(login(loginData))
console.log(apiresponse)
if(apiresponse.payload?.data.success){
    navigate('/');
}

}


  const handleLoginClick = (role) => {
    setSelectedRole(role);
  };
  const renderLoginForm = () => {
    switch (selectedRole) {
      case "scrapdealer":
        return (
          <div className="container">
            <h3>Scrap Dealer Login</h3>
            <form className="form-container">
            <input type="text" name='email' required onChange={handleinput} placeholder="John@example.com" />
            <input type="password" name="password" required onChange={handleinput} placeholder="Enter your password" />
            <button onClick={handlesubmit}>Login</button>
            </form>
            <p>Don't Have a account <a href="./SignUp">Sign up</a></p>
          </div>
        );
      case "municipality":
        return (
          <div className="container">
            <h3>Municipality Office Login</h3>
            <form className="form-container">
            <input type="text" name='email' required onChange={handleinput} placeholder="John@example.com" />
            <input type="password" name="password" required onChange={handleinput} placeholder="Enter your password" />
            <button onClick={handlesubmit}>Login</button>
            </form>
            <p>Don't Have a account <a href="./SignUp">Sign up</a></p>
          </div>
        );
      case "homebusiness":
        return (
          <div className="conatiner">
            <form className="form-container">
            <h3>Home/Business Login</h3>
            <input type="text" name='email' required onChange={handleinput} placeholder="John@example.com" />
            <input type="password" name="password" required onChange={handleinput} placeholder="Enter your password" />
            <button onClick={handlesubmit}>Login</button>
            </form>
            <p>Don't Have a account <a href="./SignUp">Sign up</a></p>
          </div>
        );
      default:
        return (
          <div className="container">
            <h2>Select Your Role to Login</h2>
            <button className="select-btn" onClick={() => handleLoginClick("scrapdealer")}>
              Scrap Dealer
            </button>
            <button className="select-btn" onClick={() => handleLoginClick("municipality")}>
              Municipality Office
            </button>
            <button className="select-btn" onClick={() => handleLoginClick("homebusiness")}>
              Home/Business
            </button>
          </div>
        );
    }
  };

  return <div>{renderLoginForm()}</div>;
};

export default Login;
