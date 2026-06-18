import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Inventory from "../components/Inventory";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="home-title">Escape the System</h1>

      <p className="home-description">
        You are trapped inside Project NEXUS...
      </p>

      <button
      className="start-game-btn"
      onClick={() => navigate("/room/server-room")}
      >
        Start Game
        </button>

      <Navigation />
      <Inventory />
    </>
  );
};

export default HomePage;