import { useParams, useNavigate } from "react-router-dom";
import rooms from "../data/rooms.json";
import items from "../data/items.json";
import { useInventory } from "../context/InventoryContext";

const RoomPage = () => {
const { roomPath } = useParams();
const navigate = useNavigate();

const { inventory, addItem } = useInventory();

const room = rooms.find(
(room) => room.roomPath === roomPath
);

if (!room) {
return <h1>Room not found</h1>;
}

const itemNeeded = items.find(
(item) => item.id === room.itemToSolve
);

const roomIsSolved = inventory.some(
(item: any) => item.id === room.itemToAdd
);

const currentRoomIndex = rooms.findIndex(
(r) => r.id === room.id
);

const nextRoom = rooms[currentRoomIndex + 1];

const handleUseItem = (item: any) => {
if (roomIsSolved) return;

if (item.id === room.itemToSolve) {
  const rewardItem = items.find(
    (i) => i.id === room.itemToAdd
  );

  if (rewardItem) {
    addItem(rewardItem);
  }

  if (nextRoom) {
    navigate(`/room/${nextRoom.roomPath}`);
  }
}

};

return (
<>
{room.roomName}

  <img
    src={
      roomIsSolved
        ? room.solvedImage
        : room.unsolvedImage
    }
    alt={room.roomName}
  />

  <p>
    {roomIsSolved
      ? room.solvedInstruction
      : room.unsolvedInstruction}
  </p>

  <p>
    Required item: {itemNeeded?.item}
  </p>

  <p>
    Solved: {roomIsSolved ? "Yes" : "No"}
  </p>

  {!roomIsSolved && (
    <>
      <h3>Your inventory</h3>

      {inventory.map((item: any) => (
        <button
          key={item.id}
          onClick={() => handleUseItem(item)}
        >
          {item.item}
        </button>
      ))}
    </>
  )}
</>

);
};

export default RoomPage;