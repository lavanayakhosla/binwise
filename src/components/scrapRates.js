import React from "react";
import "./scrapRates.css";
import newspaper from "../assets/image_copy_1.png"
import plastic from "../assets/image_copy_2.png"
import iron from "../assets/image_copy_3.png"
import appliances from "../assets/image_copy_4.png"
import wires from "../assets/image_copy_5.png"
import copper from "../assets/image_copy_6.png"
import wood from "../assets/image_copy_7.png"
import steel from "../assets/image copy.png"
import brass from "../assets/image copy 2.png"
let scrapItems = [
  {
    name: "NEWSPAPER",
    price: "₹ 22/kg",
    image: newspaper,
  },
  {
    name: "PLASTIC",
    price: "₹ 27/kg",
    image: plastic,
  },
  {
    name: "IRON",
    price: "₹ 30/kg",
    image: iron,
  },
  {
    name: "APPLIANCES",
    price: "₹ 40/kg",
    image:  appliances,
  },
  {
    name: "WIRES",
    price: "₹ 14/kg",
    image:  wires,
  },
  {
    name: "COPPER",
    price: "₹ 650/kg",
    image: copper,
  },
  {
    name: "BRASS",
    price: "₹ 650/kg",
    image:brass,
  },
  {
    name: " STAINLESS STEEL",
    price: "₹ 650/kg",
    image: steel,
  },
  {
    name: "WOOD",
    price: "₹ 23/kg",
    image: wood,
  },


];

const ScrapRates = () => {
  return (
    <div>
    <main className="main">
        <h2 className="title">Scrap Rates</h2>
        <div className="grid">
          {scrapItems.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <div className="card-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ScrapRates;
