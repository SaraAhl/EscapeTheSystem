import { createContext, useContext, useState } from "react";
import items from "../data/items.json";

const InventoryContext = createContext<any>(null);

export const InventoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const starterItem = items.find((item) => item.id === 1);

  const [inventory, setInventory] = useState(
    starterItem ? [starterItem] : []
  );

  const addItem = (item: any) => {
    setInventory((prev) => [...prev, item]);
  };

  return (
    <InventoryContext.Provider
      value={{ inventory, addItem }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  return useContext(InventoryContext);
};