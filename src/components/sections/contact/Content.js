import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function Content(props) {
    return (
        <section className="contact-part pt-115 pb-115">
            <div className="container">
                {/* Contact Info */}
                <div className="contact-info">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-10">
                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-home" />
                                </div>
                                <div className="desc">
                                    <h4>Office Address</h4>
                                    <p>19/A, Cirikon City hall Tower New York, NYC</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-10">
                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-phone" />
                                </div>
                                <div className="desc">
                                    <h4>Phone Number</h4>
                                    <p>+ 97656 8675 7864 7 <br /> + 876 766 8675 765 6</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-10">
                            <div className="info-box">
                                <div className="icon">
                                    <i className="flaticon-message" />
                                </div>
                                <div className="desc">
                                    <h4>Email Address</h4>
                                    <p>example@example.com <br /> example.example@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Mapts */}
                <div className="contact-maps mb-30 position-relative" id="contactMaps">
                    <Map
                        google={props.google}
                        zoom={12}
                        initialCenter={{
                            lat: 31.53912, lng: -89.29163
                        }}
                    >
                        <Marker position={{
                            lat: 31.53912, lng: -89.29163
                        }} />
                    </Map>
                </div>
                {/* Contact Form */}
                <div className="contact-form">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group mb-30">
                                    <span className="icon"><i className="far fa-user" /></span>
                                    <input type="text" placeholder="Your full name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-30">
                                    <span className="icon"><i className="far fa-envelope" /></span>
                                    <input type="email" placeholder="Enter email address" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-30">
                                    <span className="icon"><i className="far fa-phone" /></span>
                                    <input type="text" placeholder="Add phone number" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-30">
                                    <span className="icon"><i className="far fa-book" /></span>
                                    <input type="text" placeholder="Select Subject" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="input-group textarea mb-30">
                                    <span className="icon"><i className="far fa-pen" /></span>
                                    <textarea type="text" placeholder="Enter messages" />
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="main-btn btn-filled">Get Free Quote</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ",
})(Content);