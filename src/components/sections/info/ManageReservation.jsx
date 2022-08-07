import React from "react";
import { Link } from "react-router-dom";
import Info from "./info";

function Content(props) {
  return (
    <section className="contact-part pt-115 pb-115">
      <div className="container">
        <div className="contact-form">
          <Info />
          <div style={{ textAlign: "center" }}>
            <button style={{ margin: "20px 120px 0 0" }}>
              <Link className="main-btn btn-filled" to={"/product"}>
                Change Reservation
              </Link>
            </button>
            <button>
              <Link className="main-btn btn-filled" to={"/"}>
                Cancel Reservation
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
