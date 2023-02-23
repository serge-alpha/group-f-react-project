import React from "react";


const Slider = () => {
  return (
    <main>
      <div className="slider">
      <label for="search" className="label">Search: </label>
        <input type='search' name="name" className="slider__search"></input>
      </div>
    </main>
  );
};

export default Slider;
