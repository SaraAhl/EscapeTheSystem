import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/room/:roomPath"
        element={<RoomPage />}
      />
    </Routes>
  );
};

export default App;