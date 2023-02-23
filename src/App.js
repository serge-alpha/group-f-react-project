import React from "react";
import "./App.css";
import "./index.css";

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
// import Products from "./components/Products";
import Header from "./components/Header";
import Slider from "./components/Slider";


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Slider />
      {/* <Products products={products} /> */}
      <Footer />

    </div>
  );
};

export default App;
