import React, { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import LoadingSpin from "./components/LoadingSpin";
import Home from "./components/Home";
import Register from "./pages/Register";
import Error from './pages/Error';


const App = () => {
    
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const AddToCart = (id) => {       
        const itemToAdd = products.find((item) => {return item.id === id });
        setCart((prevItems) => {return [...prevItems, itemToAdd] });
    }
    const deleteItem = (id) => {
        const itemsLeft = cart.filter((item) => { return item.id !== id });
        setCart(itemsLeft);
    }
    const EmptyCart = () => {
        setCart([]);
    }
    
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
    const userinfo = (info) => {
        console.log(info);
    }
  return (
    <div className="app">

          <BrowserRouter>
              <Navbar items={cart }/>
              <Routes>
                  <Route path="/" element={<Home error={error} isLoading={isLoading} products={products} cartItem={AddToCart}  />}></Route>
                  <Route path="/cart" element={<Cart items={cart} itemdelete={deleteItem} emptycart={EmptyCart} />}></Route>
                  <Route path="/register" element={<Register userinfo={userinfo} />} />
                  <Route path='*' element={<Error /> }></Route>
              </Routes>
          </BrowserRouter>
     
      <Footer />
    </div>
  );
};

export default App;
