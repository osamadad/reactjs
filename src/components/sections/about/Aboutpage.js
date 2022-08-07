import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

class Aboutpage extends Component {

    
    render() {
        return (
            <section className="about-section pt-115 pb-115">
                <div className="container">

                    <div className="section-title about-title text-center">
                        <span className="title-tag">since <span>1994</span></span>
                        <h2>Hello. Our hotel has been present for over 20 years. We make the best or all our customers.</h2>
                    </div>
                
                </div>
            </section>
        );
    }
}

export default Aboutpage;