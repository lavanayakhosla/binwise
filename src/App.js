import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ServicesPage from "./components/ServicesPage"; // Ensure the file exists
import LoginForm,{handleLogin} from "./components/login_business"; // Ensure the file exists
import "./App.css";
import affordable from "./assets/image_copy2.png";
import dustbin from "./assets/image_copy.png";
import reliable from "./assets/image.png";
import logo from "./assets/Screenshot 2025-01-26 013052.png";
import earth from "./assets/Screenshot 2025-01-25 234055.png";
import  DealerRegistrationForm from "./components/register.js";

function App () {
   return (
    <Router>
      <div className="App">
        {/* Header with Navigation */}
        <header className="App-header">
          <div className="logo">
            <img id="logo" src={logo} alt="Binwise Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                 <Link to = "/login">Login</Link>
              </li>
              <li>
              <Link to="/DealerRegistrationForm">Sign up</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {showLogin && (
            <div className="modal">
              <LoginForm onClose={handleCloseLogin} />
            </div>
          )}
        </main>

        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <section className="hero">
                  <img src={earth} alt="Earth" />
                  <h1>Welcome to BinWise</h1>
                  <p>Your one-stop solution for all scrap-related services.</p>
                  <button>Get Started</button>
                </section>

                {/* Features Section */}
                <section className="features">
                  <div className="feature">
                    <img src={reliable} alt="Reliable Service" />
                    <h2>Reliable Service</h2>
                    <p>We offer reliable and fast scrap collection.</p>
                  </div>
                  <div className="feature">
                    <img src={dustbin} alt="Eco-Friendly" />
                    <h2>Eco-Friendly</h2>
                    <p>We ensure eco-friendly recycling processes.</p>
                  </div>
                  <div className="feature">
                    <img src={affordable} alt="Affordable Prices" />
                    <h2>Affordable Prices</h2>
                    <p>Competitive pricing for all your scrap needs.</p>
                  </div>
                </section>
              </>
            }
          />

          {/* Services Route */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Placeholder for other pages */}
          <Route path="/about" element={<h2>About Us Page</h2>} />
          <Route path="/contact" element={<h2>Contact Us Page</h2>} />
        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 BinWise. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
