import React, { useState } from "react";
import Product from "./Product";

const Products = (props) => {
  const [filter, setFilter] = useState("");

  const { products, cartItem } = props;
  return (
    <div>
      <div className="slider">
        <label htmlFor="search" className="label"></label>
        <input
          type="search"
          name="name"
          className="slider__search"
          placeholder="Search"
          onChange={(e) => setFilter(e.target.value)}
        />
        {/* <button
          id="search__btn"
          className="prodct__btn"
        >
          search
        </button> */}
      </div>
      <section className="products">
        {products
          .filter(({ title }) =>
            title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .map((product) => (
            <Product key={product.id} product={product} cartItem={cartItem} />
          ))}
      </section>
    </div>

  );
};

export default Products;
