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
            <label>
              <input
                style={{ marginTop: "20px", width: "20px", height: "20px" }}
                type="checkbox"
              />
              I agree to the <Link to={"/TermsAndServices"}>terms and services</Link>
            </label>
            <br />
            <button>
              <Link className="main-btn btn-filled" to={"/"}>
                confirm resrvation
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
