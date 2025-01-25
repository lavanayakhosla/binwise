import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faTruck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <div className="services-page">
      <h2>Our Services</h2>
      <p>We offer a variety of scrap-related services. Choose the one that best suits your needs.</p>

      <div className="service-details">
        <div className="service-card">
          <FontAwesomeIcon icon={faRecycle} size="3x" className="service-icon" />
          <h3>Scrap Collection</h3>
          <p>We collect all kinds of scrap materials from your home or business. No job is too big or small!</p>
          <button>Get Quote</button>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faTruck} size="3x" className="service-icon" />
          <h3>Transportation</h3>
          <p>Our team offers efficient transportation to take scrap from your place to recycling centers.</p>
          <button>Get Quote</button>
        </div>
        <div className="service-card">
          <FontAwesomeIcon icon={faDollarSign} size="3x" className="service-icon" />
          <h3>Affordable Pricing</h3>
          <p>We provide competitive and transparent pricing for all scrap materials, ensuring you get the best deal.</p>
          <button>Get Quote</button>
        </div>
      </div>

      <div className="additional-services">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Fast and reliable services.</li>
          <li>Eco-friendly recycling process.</li>
          <li>Guaranteed satisfaction.</li>
        </ul>
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default ServicesPage;
