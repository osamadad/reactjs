import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import navigationmenu from '../../data/navigation.json';

class Canvas extends Component {
    render() {
        return (
            <Fragment>
                {/* Search Widget */}
                <div className="widget search-widget">
                    <h5 className="widget-title">Search room</h5>
                    <form>
                        <input type="text" placeholder="Search your keyword..." />
                        <button type="submit"><i className="far fa-search" /></button>
                    </form>
                </div>
                {/* About Widget */}
                <div className="widget about-widget">
                    <h5 className="widget-title">About us</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reiciendis illo ipsa asperiores,
                        perspiciatis corrupti veritatis assumenda architecto commodi provident quas necessitatibus
                        consequatur praesentium magnam optio deserunt fugiat repellat culpa.
    </p>
                </div>
                {/* Nav Widget */}
                <div className="widget nav-widget">
                    <h5 className="widget-title">Our pages</h5>
                    <ul>
                        {navigationmenu.length > 0 ? navigationmenu.slice(2, 6).map((item, i) => (
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
                {/* Social Link */}
                <div className="widget social-link">
                    <h5 className="widget-title">Contact with us</h5>
                    <ul>
                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                        <li><Link to="#"><i className="fab fa-behance" /></Link></li>
                        <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                        <li><Link to="#"><i className="fab fa-google" /></Link></li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Canvas;