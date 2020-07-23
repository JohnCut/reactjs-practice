import React, { useState } from "react";

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };
  const subOne = () => {
    updateQty(id, qty - 1);
  };
  return (
    <div className="CartItem">
      <div>Name: {name}</div>
      <div>Price: ${price}</div>
      <div>
        <button onClick={subOne} disabled={qty <= 1}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Total: ${qty * price}</div>
    </div>
  );
}

export default CartItem;
