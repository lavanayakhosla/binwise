import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faRecycle, faTruck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './ServicesPage.css';
import Registered_as_scrap_dealer from "./Registered_as_scrap_dealer"
import home_business from "./home_business"
import Muncipality from "./Muncipality"
// function ServicesPage() {
//   return (
//     <div className="services-page">
//       <h2>Our Services</h2>
//       <p>We offer a variety of scrap-related services. Choose the one that best suits your needs.</p>

//       <div className="service-details">
//         <div className="service-card">
//           <FontAwesomeIcon icon={faRecycle} size="3x" className="service-icon" />
//           <h3>Scrap Collection</h3>
//           <p>We collect all kinds of scrap materials from your home or business. No job is too big or small!</p>
//           <button>Get Quote</button>
//         </div>
//         <div className="service-card">
//           <FontAwesomeIcon icon={faTruck} size="3x" className="service-icon" />
//           <h3>Transportation</h3>
//           <p>Our team offers efficient transportation to take scrap from your place to recycling centers.</p>
//           <button>Get Quote</button>
//         </div>
//         <div className="service-card">
//           <FontAwesomeIcon icon={faDollarSign} size="3x" className="service-icon" />
//           <h3>Affordable Pricing</h3>
//           <p>We provide competitive and transparent pricing for all scrap materials, ensuring you get the best deal.</p>
//           <button>Get Quote</button>
//         </div>
//       </div>

//       <div className="additional-services">
//         <h3>Why Choose Us?</h3>
//         <ul>
//           <li>Fast and reliable services.</li>
//           <li>Eco-friendly recycling process.</li>
//           <li>Guaranteed satisfaction.</li>
//         </ul>
//         <button>Contact Us</button>
//       </div>
//     </div>
//   );
// }

// export default ServicesPage;


const ServiceCard = ({ icon, title, description, buttonLabel, buttonLink }) => {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <a href={buttonLink} className="button">
        {buttonLabel}
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-page">

      <main className="main">
        <h2 className="heading">Our Services</h2>
        <p className="subheading">
          We offer a variety of scrap-related services. Choose the one that best suits your needs.
        </p>

        <div className="services-grid">
          <ServiceCard
            icon={<span>&#9851;</span>}
            title="Scrap Collection from Home/Business"
            description="We collect all kinds of scrap materials from your home or enterprise. No job is too big or small!"
            buttonLabel="Schedule Pickup"
            buttonLink="/home_business"
          />
          <ServiceCard
            icon={<span>&#128666;</span>}
            title="Scrap Collection from Municipality"
            description="We offer the most affordable prices for bulk scrap."
            buttonLabel="Schedule Pickup"
            buttonLink="/Muncipality"
          />
          <ServiceCard
            icon={<span>&#36;</span>}
            title="Buy Scrap Materials"
            description="We provide competitive and transparent pricing for all scrap materials, ensuring you get the best deal."
            buttonLabel="Get Quote"
            buttonLink=" "
          />
          <ServiceCard
            icon={<span>&#128522;</span>}
            title="Registered Scrap Dealer"
            description="Become a registered Scrap Dealer! Get trained and verified."
            buttonLabel="Register With Us"
            buttonLink="/Registered_as_scrap_dealer"
          />
        </div>
      </main>
    </div>
  );
};

export default Services;
