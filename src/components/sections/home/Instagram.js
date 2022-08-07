import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import instaimage from '../../../data/instaposts.json';

class Instagram extends Component {
    render() {
        const settings = {
            slidesToShow: 6,
            slidesToScroll: 1,
            fade: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ]
        };
        return (
            <section className="instagram-feed-section">
                <div className="container-fluid p-0">
                    <Slider className="instagram-slider" {...settings}>
                        {instaimage.map((item, i) => (
                            <div key={i} className="image">
                                <Link to="#" className="insta-popup">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt="" />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        );
    }
}

export default Instagram;