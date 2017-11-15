import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ProductsList from "./ProductsList";

class BrandsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let brands = this.props.brands.map((b, idx) => (
      <Link key={idx} to={`/brands/${b}`}>
        <button className="brand-button">{b}</button>
      </Link>
    ));

    return (
      <div>
        <div className="brands-links">{brands}</div>
        <Route
          path="/brands/:brand"
          render={props => <ProductsList brand={props.match.params.brand} />}
        />
      </div>
    );
  }
}

BrandsList.defaultProps = {
  brands: [
    "almay",
    "annabelle",
    "benefit",
    "covergirl",
    "dalish",
    "e.l.f.",
    "essie",
    "iman",
    "l'oreal",
    "marcelle",
    "maybelline",
    "milani",
    "mineral fusion",
    "misa",
    "mistura",
    "moov",
    "nyx",
    "orly",
    "pacifica",
    "physicians",
    "formula",
    "anada",
    "revlon",
    "salon",
    "sante",
    "sinful",
    "smashbox",
    "stila",
    "suncoat",
    "zorah"
  ]
};

export default BrandsList;
