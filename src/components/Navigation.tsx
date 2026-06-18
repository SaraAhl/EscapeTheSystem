import { Link } from "react-router-dom";
import rooms from "../data/rooms.json";

const Navigation = () => {
    return (
      <nav className="navigation">
        {rooms.map((room) => (
          <Link
            key={room.id}
            to={`/room/${room.roomPath}`}
          >
            {room.roomName}
          </Link>
        ))}
      </nav>
    );
  };
  
  export default Navigation;