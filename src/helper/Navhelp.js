import React, { Component, Fragment } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navmethod: false,
            canvasmethod: false,
            searchmethod: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.canvasToggle = this.canvasToggle.bind(this);
        this.searchToggle = this.searchToggle.bind(this);
    }
    // Navigation
    toggleNav() {
        this.setState({
            navmethod: !this.state.navmethod
        });
    }
    // Canvas
    canvasToggle() {
        this.setState({
            canvasmethod: !this.state.canvasmethod
        });
    }
    // Search
    searchToggle() {
        this.setState({
            searchmethod: !this.state.searchmethod
        });
    }
    // Sticky header
    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth < 992
            });
        }, false);
        window.addEventListener('load', () => {
            this.setState({
                isMobile: window.innerWidth < 992
            });
        }, false);

        window.addEventListener('scroll', () => {
            this.setState({
                isTop: window.scrollY > 150
            });
        }, false);
    }
    // Mobile menu
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }
    triggerChild = (e) => {
        let subMenu = '';
        subMenu = (this.getNextSibling(e.target, '.submenu') !== undefined) ? this.getNextSibling(e.target, '.submenu') : null;
        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block';
        }
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default HeaderComponent;