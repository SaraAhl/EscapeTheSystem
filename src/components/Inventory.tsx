import { useInventory } from "../context/InventoryContext";

const Inventory = () => {
  const { inventory } = useInventory();

  return (
    <div className="inventory">
      <h2>Inventory</h2>

      {inventory.map((item: any) => (
        <div
          key={item.id}
          className="inventory-item"
        >
          {item.item}
        </div>
      ))}
    </div>
  );
};

export default Inventory;