import React from "react";
import "./App.css";
import "./index.css";

import Footer from "./components/Footer";
// import Products from "./components/Products";
import Header from "./components/Header";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Slider />
      {/* <Products products={products} /> */}
      <Footer />
    </div>
  );
};

export default App;
