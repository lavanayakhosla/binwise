import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import glassJar from '../assets/images/glass-jar-removebg-preview.png';
import paperBag from '../assets/images/paper-bag-removebg-preview.png';
//import plasticBottle from 'assets/plastic-bottle-removebg-preview.png';
import bulb from '../assets/images/bulb-removebg-preview.png';
import can from '../assets/images/can-removebg-preview.png';
import cardboard from '../assets/images/cardboard-removebg-preview.png';
import egg from '../assets/images/egg-removebg-preview.png';
import grass from '../assets/images/grass-removebg-preview.png';
import hair from '../assets/images/hair-removebg.png';
import peel from '../assets/images/peels-removebg-preview.png';
import plasticBottle from '../assets/images/plastic-bottle-removebg-preview.png';
import tyre from '../assets/images/rubber-removebg-preview.png';
import styroform from '../assets/images/styroform-removebg-preview.png';
import woodchips from '../assets/images/woodchips-removebg-preview.png';
import wrappers from '../assets/images/wrappers-removebg-preview.png';
import './DragAndDrop.css'; // Create this CSS file for styling

const items = [
  { id: 1, name: 'Plastic Bottle', image: plasticBottle, type: 'blue' },
  { id: 2, name: 'Glass Jar', image: glassJar, type: 'green' },
  { id: 3, name: 'Paper Bag', image: paperBag, type: 'green' },
  { id: 8, name: 'Aluminum Can', image:  can , type: 'blue' },
  { id: 5, name: 'Rubber Tyre', image: tyre, type: 'blue' },
  { id: 6, name: 'Light Bulb', image: bulb, type: 'blue' },
  { id: 7, name: 'Wood Chips', image: woodchips, type: 'green' },
  { id: 4, name: 'Eggshells', image: egg, type: 'green' },
  { id: 13, name: 'wrappers', image: wrappers, type: 'blue' },

  {id: 9, name: 'Cardboard', image: cardboard, type: 'green' },
  { id: 10, name: 'Grass Clippings', image: grass, type: 'green' },
  {id: 14, name: 'styroform', image: styroform, type: 'blue' },
  { id: 11, name: 'Hair', image: hair, type: 'green' },
  { id: 12, name: 'Fruit Peel', image: peel, type: 'green' },

];

const DragAndDropGame = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (binType) => {
    if (draggedItem && draggedItem.type === binType) {
      toast.success(`Great job! You dropped ${draggedItem.name} in the right bin!`);
    } else {
      toast.error(`Oops! ${draggedItem ? draggedItem.name : 'Nothing'} is not the right bin!`);
    }
    setDraggedItem(null);
  };

  return (
    <div className="game-container">
      <ToastContainer />
      <h1>Drag and Drop Game</h1>
      <div className="bins">
        <div
          className="bin blue-bin"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop('blue')}
        >
          Blue Bin
        </div>
        <div
          className="bin green-bin"
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop('green')}
        >
          Green Bin
        </div>
      </div>
      <div className="items">
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            draggable
            onDragStart={() => handleDragStart(item)}
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropGame;
