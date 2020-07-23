import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({ initItems }) {
  return (
    <div className="Cart">
      <h1>Eric Cartman</h1>
      <div className="Cart-items">
        {initItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
