import React, { Component } from "react";

class Content extends Component {
  styles = {
    marginLeft: "200px",
    marginRight: "140px",
    display: "inline",
    textAlign: "center",
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", margin: "20px" }}>
          User Information
        </h1>

        <h3 style={this.styles}>Name</h3>
        <h3 style={this.styles}>Details</h3>
        <br />

        <h3 style={this.styles}>Phone</h3>
        <h3 style={this.styles}>Details</h3>
        <br />

        <h3 style={this.styles}>E-mail</h3>
        <h3 style={this.styles}>Details</h3>
        <br />

        <h1 style={{ textAlign: "center", margin: "20px" }}>
          reservation Information
        </h1>

        <h3 style={this.styles}>product Name</h3>
        <h3 style={{ position: "relative", left: "600px", bottom: "30px" }}>
          Details
        </h3>
        <h3 style={this.styles}>product Number</h3>
        <h3 style={{ position: "relative", left: "600px", bottom: "30px" }}>
          Details
        </h3>

        <h3 style={this.styles}>Number of people</h3>
        <h3 style={{ position: "relative", left: "600px", bottom: "30px" }}>
          Details
        </h3>

        <h3 style={this.styles}>Date</h3>
        <h3 style={this.styles}>Details</h3>
        <br />

        <h3 style={this.styles}>Time</h3>
        <h3 style={this.styles}>Details</h3>
      </div>
    );
  }
}

export default Content;
