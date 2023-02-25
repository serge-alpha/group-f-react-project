import React, { useState } from "react";

const CartIterm = (props) => {
  const { item, Delete } = props;

  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="cart__item">
      <img src={item.image} alt="" className="item__img" />
      <span className="item__details">
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <div className="cart__funtions">
          <span className="item__amount">
            <button
              disabled={count <= 0}
              className="item__btnIncrease"
              onClick={handleDecrement}
            >
              -
            </button>
            <p>{count}</p>
            <button className="item__btnDecrease" onClick={handleIncrement}>
              +
            </button>
          </span>
          <button
            className="item__delete"
            onClick={() => {
              Delete(item.id);
            }}
          >
            Delete
          </button>
        </div>
      </span>
    </div>
  );
};

export default CartIterm;
