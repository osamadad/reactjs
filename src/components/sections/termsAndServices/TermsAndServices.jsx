import React from "react";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <section className="room-details pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="deatils-box">
              <div className="cancellation-box clearfix mb-60">
                <h3 style={{ textAlign: "center" }} className="subtitle">
                  Terms and services
                </h3>
                <p
                  style={{ textAlign: "center" }}
                  dangerouslySetInnerHTML={{
                    __html:
                      "sddddddddddddddddddddsssssssssssssssssdadadddddd <br />" +
                      "sddddddddddddddddddddsssssssssssssssssdadadddddd <br />" +
                      "sddddddddddddddddddddsssssssssssssssssdadadddddd <br />",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
