import Navigation from "../components/Navigation";
import Inventory from "../components/Inventory";

const HomePage = () => {
  return (
    <>
      <h1>Escape the System</h1>

      <p>
        You are trapped inside Project NEXUS, an abandoned AI research facility.
        Solve puzzles, collect items and escape before the system locks down forever.
      </p>

      <Navigation />
      <Inventory />
    </>
  );
};

export default HomePage;