import React, { useState } from "react";
import "./login.css"

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("");

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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            </form>
            <p>Don't Have a account <a href="./SignUp">Sign up</a></p>
          </div>
        );
      case "municipality":
        return (
          <div className="container">
            <h3>Municipality Office Login</h3>
            <form className="form-container">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
            </form>
            <p>Don't Have a account <a href="./SignUp">Sign up</a></p>
          </div>
        );
      case "homebusiness":
        return (
          <div className="conatiner">
            <form className="form-container">
            <h3>Home/Business Login</h3>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
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
