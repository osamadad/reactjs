import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Corefeature extends Component {
    render() {
        return (
            <section className="core-feature-section bg-black pt-115 pb-115">
                <div className="container">
                    <div className="section-title white-color text-center mb-50">
                        <span className="title-tag"> facilities </span>
                        <h2>Core Features</h2>
                    </div>
                    {/* Featre Loop */}
                    <div className="row features-loop">
                        <div className="col-lg-4 col-sm-6 order-1">
                            <div className="feature-box dark-box">
                                <div className="icon">
                                    <i className="flaticon-rating" />
                                </div>
                                <h3><Link to="/room-grid">Have High Rating</Link></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna..
                    </p>
                                <span className="count">01</span>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6 order-2">
                            <div className="feature-box dark-box">
                                <div className="icon">
                                    <i className="flaticon-clock" />
                                </div>
                                <h3><Link to="/room-grid">Quiet Hours</Link></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna..
                    </p>
                                <span className="count">02</span>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6 order-3 order-sm-4 order-lg-3">
                            <div className="feature-box dark-box">
                                <div className="icon">
                                    <i className="flaticon-location-pin" />
                                </div>
                                <h3><Link to="/room-grid">Best Locations</Link></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna..
                    </p>
                                <span className="count">03</span>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6 order-4 order-sm-3 order-lg-4">
                            <div className="feature-box dark-box">
                                <div className="icon">
                                    <i className="flaticon-clock-1" />
                                </div>
                                <h3><Link to="/restaurant">Free Cancellation</Link></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna..
                    </p>
                                <span className="count">04</span>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6 order-5">
                            <div className="feature-box dark-box">
                                <div className="icon">
                                    <i className="flaticon-credit-card" />
                                </div>
                                <h3><Link to="/room-grid">Payment Options</Link></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna..
                    </p>
                                <span className="count">05</span>
                            </div>

                        </div>
                        <div className="col-lg-4 col-sm-6 order-6">
                            <div className="feature-box dark-box">
                                <div className="icon">
                                    <i className="flaticon-discount" />
                                </div>
                                <h3><Link to="/offers">Special Offers</Link></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna..
                    </p>
                                <span className="count">06</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Corefeature;