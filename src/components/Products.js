
import React from "react";
import Product from "./Product";
import Slider from "./Slider";

const Products = (props) => {
  const { products } = props;
  return (
    <section className="products">
          <Slider/>
          <h2> test</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;

