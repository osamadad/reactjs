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
                <div style={{ textAlign: "center" }}>
                  <h3 style={{margin:"20px"}}>Search by ID</h3>
                  <div className="input-group mb-30">
                    <span className="icon">
                      <i className="far fa-user" />
                    </span>
                    <input type="text" placeholder="Enter your ID" />
                  </div>
                  <h3 style={{margin:"20px"}}>or phone number</h3>
                  
                    <div className="input-group mb-30">
                      <span className="icon">
                        <i className="far fa-phone" />
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  
                  <div className="col-12 text-center">
                    <Link
                      to="/ManageReservation"
                      className="main-btn btn-filled"
                    >
                      Search
                    </Link>
                  </div>
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
