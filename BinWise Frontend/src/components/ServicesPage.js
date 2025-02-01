import React from 'react';
import './ServicesPage.css';
import Registered_as_scrap_dealer from "./Registered_as_scrap_dealer"
import home_business from "./home_business"
import Muncipality from "./Muncipality"

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
            buttonLink="#"
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
