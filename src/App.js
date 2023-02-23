import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Header from "./components/Header";
import Slider from "./components/Slider";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch the data");
        }
        return res.json();
      })
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setProducts([]);
        setIsLoading(false);
        setError(error.message);
      });
  }, []);
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Slider />
      {isLoading && <p>the products are loading...</p>}
      {error ? <p>{error}</p> : <Products products={products} />}

      <Footer />
    </div>
  );
};

export default App;
