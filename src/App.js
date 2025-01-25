import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ServicesPage from './components/ServicesPage'; // Make sure this is correctly imported
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with Navigation */}
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <section className="hero">
                <h1>Welcome to BinWise</h1>
                <p>Your one-stop solution for all scrap-related services.</p>
                <button>Get Started</button>
              </section>

              {/* Features Section */}
              <section className="features">
                <div className="feature">
                  <h2>Reliable Service</h2>
                  <p>We offer reliable and fast scrap collection.</p>
                </div>
                <div className="feature">
                  <h2>Eco-Friendly</h2>
                  <p>We ensure eco-friendly recycling processes.</p>
                </div>
                <div className="feature">
                  <h2>Affordable Prices</h2>
                  <p>Competitive pricing for all your scrap needs.</p>
                </div>
              </section>
            </>
          } />

          {/* Services Page Route */}
          <Route path="/services" element={<ServicesPage />} />

          {/* Other Routes (if you have them) */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}

        </Routes>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 ScrapUncle. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
