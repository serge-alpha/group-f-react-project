import React from "react";

const Product = (props) => {
  const { product,cartItem } = props;
  return (
    <article className="product">
      <img className="product__img" src={product.image} alt={product.title} />
      <div className="product__details">
        <h4 className="product__title">{product.title}</h4>
        <p className="product__price">Price: ${product.price}</p>

       {/* <p className="product__rating">Rating: {product.rating.rate}/5</p> */}
              <p className="product__desc">Description: {product.description}</p>
              <button className="product__btn" onClick={() => { return cartItem(product.id) }}>Buy</button>

      </div>
    </article>
  );
};

export default Product;
