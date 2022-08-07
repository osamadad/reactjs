import React, { Component, Fragment } from 'react';
import Aboutpage from './Aboutpage';
import Corefeature from './Corefeature';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Aboutpage />
                <Corefeature />
            </Fragment>
        );
    }
}

export default Content;