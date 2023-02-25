import React from "react";
import Header from "./Header";
import Products from "./Products";

const Home = (data) => {
  return (
    <div>
      <Header />
      {data.isLoading && <p>the products are loading...</p>}
      {data.error ? (
        <p>{data.error}</p>
      ) : (
        <Products products={data.products} cartItem={data.cartItem} />
      )}
    </div>
  );
};

export default Home;
