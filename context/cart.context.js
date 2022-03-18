import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const onAdd = (item) => {
    const _items = [...items];
    const findedItem = _items.find((elem) => elem.bicycleId === item.bicycleId);
    if (findedItem) {
      findedItem.quantity += 1;
      const updateItem = _items.map(
        (elem) => (elem.bicycleId === item.bicycleId && findedItem) || elem
      );
      setItems([...updateItem]);
      return;
    }
    _items.push(item);
    setItems([..._items]);
  };

  const decreaseQuantity = (id) => {
    const _items = [...items];
    const findedItem = _items.find((elem) => elem.bicycleId === id);
    if (findedItem) {
      findedItem.quantity -= 1;
      const updateItem = _items.map(
        (elem) => (elem.bicycleId === id && findedItem) || elem
      );
      setItems([...updateItem]);
      return;
    }
  };

  const onDelete = (id) => {
    const _items = [...items];
    const filterItems = _items.filter((item) => item.bicycleId !== id);
    setItems([...filterItems]);
  };

  return (
    <CartContext.Provider value={{ items, onAdd, onDelete, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
