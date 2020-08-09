import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
              <li>
                <div className="product">
                  <img
                    className="product-image"
                    src="/images/book.png"
                    alt="book"
                  />
                  <div className="title">
                    <a href="product.html">Title</a>
                  </div>
                  <div className="author">Author</div>
                  <div className="rating">Rating</div>
                </div>
              </li>
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
