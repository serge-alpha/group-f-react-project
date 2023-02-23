import React from "react";
import "./App.css";
import "./index.css";


import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


const App = () => {
  return (
      <div className="app">
          <Navbar/>
      <Header />
      <Products/> 
      <Footer />

    </div>
  );
};

export default App;
