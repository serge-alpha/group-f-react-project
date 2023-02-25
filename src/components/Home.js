import React from "react";
import Header from "./Header";
import Products from "./Products";
import LoadingSpin from "./LoadingSpin";

const Home = (data) => {
  return (
    <div>
      <Header />
      {data.error ? (
        <p>{data.error}</p>
      ) : (
        <Products products={data.products} cartItem={data.cartItem} />
      )}
      {data.isLoading && <LoadingSpin />}
    </div>
  );
};

export default Home;
