import React, { Component } from "react";
import "./App.css";
import BrandsList from "./BrandsList";
import { Route, Link } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Mega Makeup App</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="header-text">
            <span>💄</span> Mega Makeup App <span>💋</span>
          </h1>
          <h1 className="cart-link">
            <Link to="/cart">
              Go to cart <span>👛</span>
            </Link>
          </h1>
        </div>
        <BrandsList />
      </div>
    );
  }
}

export default App;
