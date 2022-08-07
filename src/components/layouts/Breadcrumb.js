import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <section className="breadcrumb-area" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/04.jpg)" }}>
                <div className="container">
                    <div className="breadcrumb-text">
                        <span>Place holder text</span>
                        <h2 className="page-title">{this.props.breadcrumb.pagename}</h2>
                        <ul className="breadcrumb-nav">
                            <li><Link to="/">Home</Link></li>
                            <li className="active">{this.props.breadcrumb.pagename}</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Breadcrumb;