import React from 'react';
import { Link } from 'react-router-dom';
import { TbShoppingCart } from "react-icons/tb";
import { TbUser } from "react-icons/tb";
import { IconContext } from "react-icons";

const Navbar = ({ items }) => {
    let sum = 0;
    items.map((item) => { return sum += item.price });
    return (
        <div className="navbar">
            <div className="navbar__top">
                <h1>Company Name</h1>
                <div className="navbar__topDetails">
                    <IconContext.Provider value={{ className: "nav__icon1" }}>
                        <TbUser />
                    </IconContext.Provider>  
                    <Link to='/cart' src='/'>     
                        <span className="navbar__cartDetails">
                            <IconContext.Provider value={{ className:"nav__icon" }}>
                              <TbShoppingCart />
                            </IconContext.Provider>                       
                            <span>
                                <h4>{items.length}Iterm</h4>
                                <h3>${sum}</h3>
                            </span>                       
                        </span>
                    </Link>
                </div>
            </div>
          <nav>
            <ul className="nav__links">
              <li className='nav__link'><Link to='/'>Home</Link></li>
              <li className='nav__link'><Link to='/'>Contact</Link></li>
              <li className='nav__link'><Link to='/'>Register</Link></li>
            </ul>
            </nav>
        </div>
    );
  };



  export default Navbar;