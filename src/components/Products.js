 import React from "react";

import Product from "./Product";
import Slider from "./Slider";



const Products = ({ products }) => {
  return (
      <section className="app__product">
          <Slider/>
          <h2> test</h2>
          <Product/>
     </section>
   );
 };

 export default Products;
