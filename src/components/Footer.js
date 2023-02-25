import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="App__footer">
        <section className="footer__section">
          <h1>Amaze Fashion</h1>
          <div className="footer__colm">
            <span className="colm__row">
              <img
                src="https://i.postimg.cc/RFB6GSQY/Screenshot-47.png"
                alt=""
                className="row__img"
              />
              <span className="row__details">
                <h3 className="footer_product_title">Golden Rings</h3>
                <p>$45.80</p>
              </span>
            </span>
            <span className="colm__row">
              <img
                src="https://i.postimg.cc/QM5Kp955/Screenshot-48.png"
                alt=""
                className="row__img"
              />
              <span className="row__details">
                <h3 className="footer_product_title">
                  Rose Gold Sapphire Ring
                </h3>
                <p>$21.20</p>
              </span>
            </span>
            <div className="colm__row">
              <img
                src="https://i.postimg.cc/htXdt3t2/Screenshot-49.png"
                alt=""
                className="row__img"
              />
              <span className="row__details">
                <h3 className="footer_product_title">In the Air</h3>
                <p>$19.99</p>
              </span>
            </div>
          </div>
          <div className="footer__colm">
            <span className="colm__row">
              <img
                src="https://i.postimg.cc/3xzD4CyY/Screenshot-50.png"
                alt=""
                className="row__img"
              />
              <span className="row__details">
                <h3 className="footer_product_title">Beautiful shoes</h3>
                <p>$18.99</p>
              </span>
            </span>
            <span className="colm__row">
              <img
                src="https://i.postimg.cc/xTxmYSnk/Screenshot-51.png"
                alt=""
                className="row__img"
              />
              <span className="row__details">
                <h3 className="footer_product_title">Blue Shirt</h3>
                <p>$7.85</p>
              </span>
            </span>
            <div className="colm__row">
              <img
                src="https://i.postimg.cc/gkkhf0FF/Screenshot-52.png"
                alt=""
                className="row__img"
              />
              <span className="row__details">
                <h3 className="footer_product_title">
                  Japanese Lucky Cat T-Shirt
                </h3>
                <p>$12.89</p>
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
                placeholder="Enter Email..."
                required
              />
              <button type="submit" className="subscribe__btn">
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
            <i class="fa-regular fa-copyright"></i> 2023 CREATED BY //RANDOM
            TEXT WHICH WILL BE ADDED IN FUTURE AN SO ON
          </h6>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
