import React, { Component } from "react";

class ProductsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.brand}</h1>;
  }
}

export default ProductsList;
