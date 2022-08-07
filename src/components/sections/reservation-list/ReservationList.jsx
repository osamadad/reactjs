import React, { Component } from "react";
import { Link } from "react-router-dom";

class reservationList extends Component {
  render() {
    return (
      <section className="contact-part pt-115 pb-115">
        <div className="container">
          <div className="contact-form">
      <div style={{textAlign: 'center'}}>
        <h1>Welcome (Employee)</h1>

        <input style={{ width: "450px" , height:'50px'}}  type="text" placeholder="Search" />
        <br />
        <p
          style={{
            width: "450px",
            height: "400px",
            margin: "0 auto",
            overflow: "auto",
            backgroundColor: "#bdbdbd",
          }}
        >
          reservation NO 1 __________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
          ___________________________________________
        </p>
        <br />
          <Link style={{margin:'20px'}} className="main-btn btn-filled" to={"/product"}>
            New Reservation
          </Link>
          <Link className="main-btn btn-border" to={"/search"}>
            Search Reservation by ID Or phone
          </Link>
      </div>
      </div>
      </div>
      </section>
    );
  }
}

export default reservationList;
