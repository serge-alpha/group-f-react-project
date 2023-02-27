import React, { useState } from "react";
import CartIterm from "./CartIterm";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { items, itemdelete, emptycart } = props;

  const cartImage = (
    <img
      className="cart__image__empty"
      src="https://i.postimg.cc/9MbrsRys/pngaaa-com-5034319.png"
      alt="empty cart"
    />
  );
  let sum = 0;
  items.map((item) => {
    return (sum += item.price);
  });
  const [pay, setPay] = useState(cartImage);
  const Payed = () => {
    setPay("Thank you! Your order is on it's way 🎉");
    emptycart();
  };

  const Items = items.map((item) => {
    return <CartIterm item={item} key={item.id} Delete={itemdelete} />;
  });

  return (
    <section className="cart">
      <h1>Cart ( {items.length} )</h1>
      {items.length === 0 ? <h1 className="cartImage">{pay}</h1> : Items}
      <h2>Total: ${sum}</h2>
      {items.length === 0 ? (
        <Link to="/">
          <button className="add__btn">Add Items</button>
        </Link>
      ) : (
        <button className="pay__btn" onClick={Payed}>
          Pay Now
        </button>
      )}
    </section>
  );
};

export default Cart;
