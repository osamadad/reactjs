import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Backtotop extends Component {
    render() {
        return (
            <Link to="#" className="back-to-top" id="backToTop">
                <i className="fal fa-angle-double-up"></i>
            </Link>
        );
    }
}

export default Backtotop;