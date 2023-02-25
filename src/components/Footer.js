import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="App__footer">
        <section className="footer__section">
          <h1>Company Name</h1>
          <div className="footer__colm">
            <h3>PRODUCTS</h3>
            <span className="colm__row">
              <img src="2.jpg" alt="" className="row__img" />
              <span className="row__details">
                <h3>Title</h3>
                <p>Price</p>
              </span>
            </span>
            <span className="colm__row">
              <img src="2.jpg" alt="" className="row__img" />
              <span className="row__details">
                <h3>Title</h3>
                <p>Price</p>
              </span>
            </span>
            <div className="colm__row">
              <img src="2.jpg" alt="" className="row__img" />
              <span className="row__details">
                <h3>Title</h3>
                <p>Price</p>
              </span>
            </div>
          </div>
          <div className="footer__colm">
            <h3>PRODUCTS</h3>
            <span className="colm__row">
              <img src="2.jpg" alt="" className="row__img" />
              <span className="row__details">
                <h3>Title</h3>
                <p>Price</p>
              </span>
            </span>
            <span className="colm__row">
              <img src="2.jpg" alt="" className="row__img" />
              <span className="row__details">
                <h3>Title</h3>
                <p>Price</p>
              </span>
            </span>
            <div className="colm__row">
              <img src="2.jpg" alt="" className="row__img" />
              <span className="row__details">
                <h3>Title</h3>
                <p>Price</p>
              </span>
            </div>
          </div>
          <div className="footer__colm form">
            <h3>NEWS LETTER</h3>
            <p>Subscribe to get updates on the lastest trendy products</p>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                required
              />
              <button type="submit" className="btn">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
        <section className="bottom__link">
          <ul>
            <li>
              <h5>
                <a href="/">HOME |</a>
              </h5>
            </li>
            <li>
              <h5>
                <a href="/">FAQs |</a>
              </h5>
            </li>
            <li>
              <h5>
                <a href="/">TERMS AND CONDITIONS |</a>
              </h5>
            </li>
            <li>
              <h5>
                <a href="/">POLICIES |</a>
              </h5>
            </li>
          </ul>
        </section>
        <section className="dev__info">
          <h6>
            &copy 2023 CREATED BY //RANDOM TEXT WHICH WILL BE ADDED IN FUTURE AN
            SO ON
          </h6>
          <div className="payment">
            <i className="fa fa-cc-paypal" aria-hidden="true"></i>
            <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
            <i className="fa fa-paypal" aria-hidden="true"></i>
            <i className="fa fa-google-wallet" aria-hidden="true"></i>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
