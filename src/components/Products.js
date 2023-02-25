import React from "react";
import Product from "./Product";

const Products = (props) => {
  const { products,cartItem } = props;
  return (
    <section className="products">
          {products.map((product) => (
              <Product key={product.id} product={product} cartItem={cartItem} />
      ))}
    </section>
  );
};

export default Products;
