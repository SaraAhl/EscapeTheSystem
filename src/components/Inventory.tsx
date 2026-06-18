import { useInventory } from "../context/InventoryContext";

const Inventory = () => {
  const { inventory } = useInventory();

  return (
    <div>
      <h2>Inventory</h2>

      {inventory.map((item: any) => (
        <div key={item.id}>
          {item.item}
        </div>
      ))}
    </div>
  );
};

export default Inventory;