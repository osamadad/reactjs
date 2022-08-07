import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from '../../helper/Navhelp';
import classNames from 'classnames';
import navigationmenu from '../../data/navigation.json';
import Canvas from './Canvas';

class Headerinner extends HeaderComponent {
    render() {
        const breakpoint = this.state.isMobile ? 'breakpoint-on' : '';
        const hideClass = this.state.isMobile ? 'd-none' : '';
        const stickyHeader = this.state.isTop ? 'sticky-active' : '';
        return (
            <Fragment>
                {/*====== HEADER START ======*/}
                <header className={`header-absolute sticky-header inner-page ${stickyHeader}`}>
                    <div className="container container-custom-one">
                        <div className={`nav-container d-flex align-items-center justify-content-between ${breakpoint}`}>
                            {/* Main Menu */}
                            <div className={classNames("nav-menu d-lg-flex align-items-center", { "menu-on": this.state.navmethod })}>
                                {/* Navbar Close Icon */}
                                <div className="navbar-close" onClick={this.toggleNav}>
                                    <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                </div>
                                {/* Off canvas Menu  */}
                                <div className="toggle" onClick={this.canvasToggle}>
                                    <Link to="#" id="offCanvasBtn"><i className="fal fa-bars" /></Link>
                                </div>
                                {/* Mneu Items */}
                                <div className="menu-items">
                                    <ul>
                                        {navigationmenu.length > 0 ? navigationmenu.slice(0, 4).map((item, i) => (
                                            <li key={i} className={`menu-item ${item.child ? 'menu-item-has-children' : ''} `} onClick={this.triggerChild}>
                                                {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                                {item.child ?
                                                    <ul className="submenu" role="menu">
                                                        {item.submenu.map((sub_item, i) => (
                                                            <li key={i} className={`menu-item ${sub_item.child ? 'menu-item-has-children' : ''} `}>
                                                                {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                                {sub_item.submenu ?
                                                                    <ul className="submenu">
                                                                        {sub_item.submenu.map((third_item, i) => (
                                                                            <li className="menu-item" key={i}><Link
                                                                                to={third_item.link}>{third_item.linkText}</Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul> : null}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    : null
                                                }
                                            </li>
                                        )) : null}
                                    </ul>
                                </div>
                                {/* from pushed-item */}
                                <div className="nav-pushed-item" />
                            </div>
                            {/* Site Logo */}
                            <div className="site-logo">
                                <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="logo" /></Link>
                            </div>
                            {/* Header Info Pussed To Menu Wrap */}
                            <div className={`nav-push-item ${hideClass}`}>
                                {/* Header Info */}
                                <div className="header-info d-lg-flex align-items-center">
                                    <div className="item">
                                        <i className="fal fa-phone" />
                                        <span>Phone Number</span>
                                        <Link to="tel:+90898787709">
                                            <h5 className="title">+908 987 877 09</h5>
                                        </Link>
                                    </div>
                                    <div className="item">
                                        <i className="fal fa-envelope" />
                                        <span>Email Address</span>
                                        <Link to="mailto:example@example.com">
                                            <h5 className="title">example@example.com</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Navbar Toggler */}
                            <div className={classNames("navbar-toggler", { "active": this.state.navmethod })} onClick={this.toggleNav}>
                                <span /><span /><span />
                            </div>
                        </div>
                    </div>
                </header>
                {/*====== HEADER PART END ======*/}
                {/*====== OFF CANVAS START ======*/}
                <div className={classNames("offcanvas-wrapper", { "show-offcanvas": this.state.canvasmethod })}>
                    <div className={classNames("offcanvas-overly", { "show-overly": this.state.canvasmethod })} onClick={this.canvasToggle} />
                    <div className="offcanvas-widget">
                        <Link to="#" className="offcanvas-close" onClick={this.canvasToggle}><i className="fal fa-times" /></Link>
                        <Canvas />
                    </div>
                </div>
                {/*====== OFF CANVAS END ======*/}
            </Fragment>
        );
    }
}

export default Headerinner;