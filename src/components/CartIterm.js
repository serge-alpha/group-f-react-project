import React from "react";

const CartIterm = (props) => {
  const { item, Delete } = props;

  return (
    <div className="cart__item">
      <img src={item.image} alt="" className="item__img" />
      <span className="item__details">
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <div className="cart__funtions">
          <span className="item__amount">
            <button className="item__btnIncrease">-</button>
            <p>{item.amount}</p>
            <button className="item__btnDecrease">+</button>
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
