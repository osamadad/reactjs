import React from "react";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <section className="contact-part pt-115 pb-115">
      <div className="container">
        <div className="contact-form">
          <form action="#">
            <div className="row">
              <div className="col-12">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-user" />
                  </span>
                  <input type="text" placeholder="Enter your ID" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-pen" />
                  </span>
                  <input type="text" placeholder="Enter your password" />
                </div>
              </div>
              <div className="col-12 text-center">
                <Link to={"/ReservationList"} className="main-btn btn-filled">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Content;
