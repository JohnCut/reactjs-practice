import React, { useState } from "react";

function CartItem({ id, name, price, qty }) {
  return (
    <div className="CartItem">
      <div>Name: {name}</div>
      <div>Price: ${price}</div>
      <div>Qty: {qty}</div>
      <div>Total: {qty * price}</div>
    </div>
  );
}

export default CartItem;
