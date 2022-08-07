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
                  <input type="text" placeholder="Enter your full name" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-envelope" />
                  </span>
                  <input type="email" placeholder="Enter email address" />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group mb-30">
                  <span className="icon">
                    <i className="far fa-phone" />
                  </span>
                  <input type="text" placeholder="Enter your phone number" />
                </div>
                <div className="col-12 text-center">
                  <Link to="/Confirmation" className="main-btn btn-filled">
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Content;
