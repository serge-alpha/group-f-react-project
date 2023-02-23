import React from "react";

import image from "../photo/photos.jpg";

const Header = () => {
  return (
    <header>
      <section className="app__header">
        <div className="container">
        <img src={image} alt='photo' className="header__image"/>
        <div class="centered">
        <h1>Amaze Fashion</h1>
        <h3>'Fashion Fades,Style is Eternal'</h3>
        </div>
        </div>
       
      
    
      </section>

    </header> 
  );
};

export default Header;
