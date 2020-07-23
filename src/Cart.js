import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

function Cart({ initItems }) {
  // gets local storage data
  const initState = JSON.parse(window.localStorage.getItem("items"));
  // use initState as data source unless there is no local data then use initItems
  const [items, setItems] = useState(initState || initItems);
  // save data to local storage when 'items' state have changed
  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };
  const gTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="Cart">
      <h1>Eric Cartman</h1>
      <div className="Cart-items">
        {items.map((item) => (
          <CartItem updateQty={updateQty} key={item.id} {...item} />
        ))}
      </div>
      <h2>Grand Total: ${gTotal}</h2>
    </div>
  );
}

export default Cart;
