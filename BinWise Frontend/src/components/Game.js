import React from "react";
import { useNavigate } from "react-router-dom";
import './Game.css'; // Add this CSS file for styling
const GameCard = ({ title, description, buttonLabel, onClick, icon }) => {
  return (
    <div className="game-card">
      <div className="icon">{icon}</div>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <button className="button" onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

const GamePage = () => {
  const navigate = useNavigate();

  return (
    <div className="game-page">
      <h1 className="heading">Fun and Interactive Games</h1>
      <p className="subheading">
        Test your recycling knowledge and learn more about waste management through our exciting games!
      </p>
      <div className="game-grid">
        <GameCard
          icon={<span>♻️</span>}
          title="Recyclo Quiz Game"
          description="Challenge yourself with our fun and educational recycling quiz. Test your knowledge about what can be recycled!."

          buttonLabel="Play Now"
          onClick={() => navigate("/Quiz")}
        />
        <GameCard
          icon={<span>🗑️</span>}
          title="Which is the Right Bin?"
          description="Drag and drop items into the correct bin. Learn proper waste segregation while having fun! Make a real impact ."
          buttonLabel="Play Now"
          onClick={() => navigate("/DragAndDropGame")}
        />
      </div>
    </div>
  );
};

export default GamePage;
