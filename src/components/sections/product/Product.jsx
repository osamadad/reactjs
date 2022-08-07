import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Buttons from "./buttons";

class mainProduct extends Component {
  styles = {
    margin: "10px",
  };
  state = {
    products: ["product 1", "product 2", "product 3"],
    selectedproduct: "select a product",
    active: 2,
  };
  changedroplist = (e) => {
    this.setState({ selectedproduct: e.target.value });
  };
  click(val) {
    console.log(val);
    this.setState({ active: val });
  }
  handleClick = (e) => {
    e.preventDefault();
    e.target.style.border = "5px solid blue";
  };
  render() {
    return (
      <section className="contact-part pt-115 pb-115">
        <div className="container">
          <div className="contact-form">
            <div
              style={{ textAlign: "center", width: "500px", margin: "0 auto" }}
            >
              <select onChange={this.changedroplist} id="mainProduct">
                <option value="select a product">Select a product</option>
                {this.state.products.map((products) => (
                  <option value={products}>{products}</option>
                ))}
              </select>

              <h3 style={{ margin: "20px" }}>{this.state.selectedproduct}</h3>

              <select id="No.people">
                <option value="">Select the number of people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              <input
                style={{ margin: "20px", position: "relative", right: "20px" }}
                type="date"
                id="date"
              />

              <Buttons />

              <br />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default mainProduct;
