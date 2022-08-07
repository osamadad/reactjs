import React, { Component, Fragment } from 'react';
import Instagram from './Instagram';
import Counter from './Counter';
import Mainbanner from './Mainbanner';


class Content extends Component {
    render() {
        return (
            <Fragment>
                <Mainbanner />

                <section className="counter-section bg-black pt-100 pb-50">
                    <div className="container">
                        <Counter />
                    </div>
                </section>
                <Instagram />
            </Fragment>
        );
    }
}

export default Content;