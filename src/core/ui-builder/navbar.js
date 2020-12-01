import React, { Component } from 'react';
import './navbar.scss';
class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="d-flex align-items-center navbar pl-2 pr-2 shadow-sm">
                <span className="brand">Quick Admin</span>
            </div>
        );
    }
}

export default Navbar;