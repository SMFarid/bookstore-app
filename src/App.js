import React from "react";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <a href="index.html">BookStore</a>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign in</a>
          </div>
        </header>

        <main className="main">
          <div className="content">
            <ul className="products">
              {data.products.map((product) => (
                <li>
                  <div className="product">
                    <img
                      className="product-image"
                      src="/images/book.png"
                      alt="book"
                    />
                    <div className="title">
                      <a href="product.html">{product.title}</a>
                    </div>
                    <div className="author">{product.author}</div>
                    <div className="rating">{product.rating}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>

        <footer className="footer">
          <div>
            Simple bookstore developed using React and Node. Icons made by
            <a href="http://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            from
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <br />
        </footer>
      </div>
    </div>
  );
}

export default App;
